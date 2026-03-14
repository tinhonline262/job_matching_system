package com.intelligent_resume.app.service.auth.impl;

import com.intelligent_resume.app.constant.OptConstants;
import com.intelligent_resume.app.dto.request.AuthenticationRequestDTO;
import com.intelligent_resume.app.dto.request.RefreshTokenRequestDTO;
import com.intelligent_resume.app.dto.request.RegisterRequestDTO;
import com.intelligent_resume.app.dto.request.VerificationOptRequestDTO;
import com.intelligent_resume.app.dto.response.AuthTokensResponseDTO;
import com.intelligent_resume.app.dto.response.RegisterResponseDTO;
import com.intelligent_resume.app.entity.SignUp;
import com.intelligent_resume.app.entity.User;
import com.intelligent_resume.app.enumeration.SignUpStatus;
import com.intelligent_resume.app.exception.BlacklistedTokenException;
import com.intelligent_resume.app.exception.InvalidTokenException;
import com.intelligent_resume.app.exception.LoginNotValidException;
import com.intelligent_resume.app.exception.OptFailException;
import com.intelligent_resume.app.exception.SignUpNotValidException;
import com.intelligent_resume.app.mapper.AuthMapper;
import com.intelligent_resume.app.properties.JwtProperties;
import com.intelligent_resume.app.repository.SignUpRepository;
import com.intelligent_resume.app.service.auth.AuthenticationService;
import com.intelligent_resume.app.service.auth.JwtKeyService;
import com.intelligent_resume.app.service.auth.TokenBlacklistService;
import com.intelligent_resume.app.service.auth.UserService;
import com.intelligent_resume.app.util.OptGenerateUtils;
import com.intelligent_resume.app.util.TimeUtils;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDateTime;
import java.util.List;

@Slf4j
@Service
@RequiredArgsConstructor
@Transactional
public class AuthenticationServiceImpl implements AuthenticationService {
    private final AuthMapper authMapper;
    private final PasswordEncoder passwordEncoder;
    private final SignUpRepository signUpRepository;
    private final UserService userService;
    private final JwtKeyService jwtKeyService;
    private final TokenBlacklistService tokenBlacklistService;
    private final JwtProperties jwtProperties;


    @Override
    public AuthTokensResponseDTO login(AuthenticationRequestDTO loginRequestDTO) {
        log.info("Login attempt for username: {}", loginRequestDTO.getUsername());

        User user = userService.getUserByUserName(loginRequestDTO.getUsername());
        if (!passwordEncoder.matches(loginRequestDTO.getPassword(), user.getPasswordHash())) {
            log.warn("Invalid password attempt for user: {}", loginRequestDTO.getUsername());
            throw new LoginNotValidException("Invalid password");
        }

        return generateAccessAndRefreshToken(user);
    }

    @Override
    public void logout(String accessToken, String refreshToken) {
        if (accessToken == null || accessToken.isBlank()) {
            throw new InvalidTokenException("Access token is required");
        }
        if (refreshToken == null || refreshToken.isBlank()) {
            throw new InvalidTokenException("Refresh token is required");
        }

        tokenBlacklistService.blacklistAccessToken(accessToken);
        tokenBlacklistService.blacklistRefreshToken(refreshToken);
    }

    @Override
    public AuthTokensResponseDTO refreshToken(RefreshTokenRequestDTO refreshTokenRequest) {
        final String refreshToken = refreshTokenRequest.refreshToken();

        if (refreshToken == null || refreshToken.isBlank()) {
            throw new InvalidTokenException("Refresh token is required");
        }
        if (!jwtKeyService.validateToken(refreshToken)) {
            throw new InvalidTokenException("Invalid or expired refresh token");
        }
        if (tokenBlacklistService.isRefreshTokenBlacklisted(refreshToken)) {
            throw new BlacklistedTokenException("Refresh token is blacklisted");
        }

        String username = jwtKeyService.extractUsername(refreshToken);
        User user = userService.getUserByUserName(username);

        tokenBlacklistService.blacklistRefreshToken(refreshToken);
        return generateAccessAndRefreshToken(user);
    }

    private AuthTokensResponseDTO generateAccessAndRefreshToken(User user) {
        if (user == null) {
            throw new IllegalArgumentException("User cannot be null");
        }
        AuthTokensResponseDTO responseDTO = authMapper.toAuthTokensResponseDTO(user);

        responseDTO.setAccessToken(jwtKeyService.generateToken(user, jwtProperties.getTokenExp()));
        responseDTO.setRefreshToken(jwtKeyService.generateRefreshToken(user, jwtProperties.getRefreshTokenExp()));

        log.info("Generated access and refresh tokens for user: {}", user.getUsername());
        return responseDTO;
    }

    @Override
    public RegisterResponseDTO register(RegisterRequestDTO registerRequestDTO) {
        log.info("Registering new user with username: {} and email: {}", registerRequestDTO.getUsername(), registerRequestDTO.getEmail());
        checkExistingSignUpUser(registerRequestDTO);
        SignUp signUp = authMapper.toSignUp(registerRequestDTO);
        signUp.setStatus(SignUpStatus.PENDING);
        signUp.setPassword(passwordEncoder.encode(registerRequestDTO.getPassword()));
        assignNewVerifyToken(signUp);
        signUpRepository.save(signUp);
        log.info("User registered successfully with username: {} and email: {}", registerRequestDTO.getUsername(), registerRequestDTO.getEmail());

        return authMapper.toRegisterResponseDTO(signUp);
    }

    @Override
    public void verifyUserRegistration(VerificationOptRequestDTO verificationOptRequest) {
        log.info("Verifying user registration");
        SignUp signUpEntity = signUpRepository.findByIdAndStatus(verificationOptRequest.signUpId(), SignUpStatus.PENDING)
                .orElseThrow(() -> {
                    log.warn("SignUp not found or not in PENDING status for ID: {}", verificationOptRequest.signUpId());
                    return new OptFailException("Invalid sign-up ID or user already verified");
                });

        if (!signUpEntity.getCurrentVerificationToken().equals(verificationOptRequest.otp())) {
            log.warn("Invalid OTP provided for SignUp ID: {}", signUpEntity.getId());
            throw new OptFailException("Invalid verification token");
        }
        if (signUpEntity.getExpiredVerificationTokenDate().isBefore(LocalDateTime.now())) {
            log.warn("Attempt to verify user with expired token. SignUp ID: {}", signUpEntity.getId());
            throw new OptFailException("Verification token has expired");
        }
        signUpEntity.setStatus(SignUpStatus.VERIFIED);
        signUpRepository.save(signUpEntity);
        userService.createUser(signUpEntity);
        log.info("User registration verified successfully for SignUp ID: {}", signUpEntity.getId());
    }

    @Override
    public void resendUserVerificationOTP(String signUpId) {
        log.info("Resending verification token for signUpId: {}", signUpId);
        SignUp signUpEntity = signUpRepository.findById(signUpId)
                .orElseThrow(() -> {
                    log.warn("SignUp not found for ID: {}", signUpId);
                    return new OptFailException("Invalid sign-up ID");
                });
        if (signUpEntity.getStatus() != SignUpStatus.PENDING) {
            log.warn("Attempt to resend token for sign-up with invalid status: {}. SignUp ID: {}", signUpEntity.getStatus(), signUpId);
            throw new OptFailException("Cannot resend token for non-pending sign-up");
        }
        OptGenerateUtils.validateResendOtp(signUpEntity.getLastVerificationTokenSentAt());
        OptGenerateUtils.validateOtpAttempts(signUpEntity.getCountAttemptVerificationToken());
        assignNewVerifyToken(signUpEntity);
        signUpEntity.setCountAttemptVerificationToken(signUpEntity.getCountAttemptVerificationToken() + 1);
        signUpRepository.save(signUpEntity);
        log.info("Verification token resent successfully for signUpId: {}", signUpId);
    }


    private void checkExistingSignUpUser(RegisterRequestDTO dto) {
        List<SignUpStatus> validStatuses = List.of(SignUpStatus.PENDING, SignUpStatus.VERIFIED);

        if (signUpRepository.existsByUsernameAndStatusIn(dto.getUsername(), validStatuses)) {
            log.warn("Attempt to signup with existing username: {}", dto.getUsername());
            throw new SignUpNotValidException("Username already exists");
        }

        if (signUpRepository.existsByEmailAndStatusIn(dto.getEmail(), validStatuses)) {
            log.warn("Attempt to signup with existing email: {}", dto.getEmail());
            throw new SignUpNotValidException("Email already registered");
        }
    }

    private void assignNewVerifyToken(SignUp signUpEntity) {
        final String token = OptGenerateUtils.generateOtp();
        signUpEntity.setCurrentVerificationToken(token);
        signUpEntity.setExpiredVerificationTokenDate(TimeUtils.getExpiredTime(OptConstants.EXPIRED_VERIFICATION_TOKEN_SECONDS));
        signUpEntity.setCountAttemptVerificationToken(0);
        signUpEntity.setLastVerificationTokenSentAt(LocalDateTime.now());
        log.info("Assign new token {} for user {}", token, signUpEntity.getUsername());
    }
}

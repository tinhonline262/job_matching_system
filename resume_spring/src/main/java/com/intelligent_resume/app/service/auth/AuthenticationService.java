package com.intelligent_resume.app.service.auth;

import com.intelligent_resume.app.dto.request.AuthenticationRequestDTO;
import com.intelligent_resume.app.dto.request.RefreshTokenRequestDTO;
import com.intelligent_resume.app.dto.request.RegisterRequestDTO;
import com.intelligent_resume.app.dto.request.VerificationOptRequestDTO;
import com.intelligent_resume.app.dto.response.AuthTokensResponseDTO;
import com.intelligent_resume.app.dto.response.RegisterResponseDTO;

public interface AuthenticationService {
        AuthTokensResponseDTO login(AuthenticationRequestDTO loginRequestDTO);
        void logout(String accessToken, String refreshToken);
        AuthTokensResponseDTO refreshToken(RefreshTokenRequestDTO refreshToken);
        RegisterResponseDTO register(RegisterRequestDTO registerRequestDTO);
        void verifyUserRegistration(VerificationOptRequestDTO verificationOptRequestDTO);
        void resendUserVerificationOTP(String signUpId);
}

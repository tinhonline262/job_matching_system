package com.intelligent_resume.app.mapper;

import com.intelligent_resume.app.dto.request.RegisterRequestDTO;
import com.intelligent_resume.app.dto.response.AuthTokensResponseDTO;
import com.intelligent_resume.app.dto.response.RegisterResponseDTO;
import com.intelligent_resume.app.entity.SignUp;
import com.intelligent_resume.app.entity.User;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.ReportingPolicy;

@Mapper(componentModel = "spring", unmappedTargetPolicy = ReportingPolicy.IGNORE)
public interface AuthMapper {

    @Mapping(target = "password", ignore = true)
    @Mapping(target = "id", ignore = true)
    @Mapping(target = "status", ignore = true)
    @Mapping(target = "currentVerificationToken", ignore = true)
    @Mapping(target = "expiredVerificationTokenDate", ignore = true)
    @Mapping(target = "createdAt", ignore = true)
    @Mapping(target = "updatedAt", ignore = true)
    SignUp toSignUp(RegisterRequestDTO dto);

    @Mapping(target = "signUpId", source = "id")
    RegisterResponseDTO toRegisterResponseDTO(SignUp signUp);

    @Mapping(target = "userId", source = "id")
    AuthTokensResponseDTO toAuthTokensResponseDTO(User user);
}

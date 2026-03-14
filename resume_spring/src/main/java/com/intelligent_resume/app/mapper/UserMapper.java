package com.intelligent_resume.app.mapper;

import com.intelligent_resume.app.entity.SignUp;
import com.intelligent_resume.app.entity.User;
import org.mapstruct.*;

@Mapper(
        componentModel = "spring",
        unmappedTargetPolicy = ReportingPolicy.IGNORE,
        uses = UserProfileMapper.class
)
public interface UserMapper {

    @Mapping(target = "id", ignore = true)
    @Mapping(target = "passwordHash", source = "password")
    @Mapping(target = "isActive", expression = "java(true)")
    @Mapping(target = "userRoles", ignore = true)
    @Mapping(target = "profile", source = ".")
    User toUser(SignUp signUp);
}
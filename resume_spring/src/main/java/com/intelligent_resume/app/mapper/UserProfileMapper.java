package com.intelligent_resume.app.mapper;

import com.intelligent_resume.app.entity.SignUp;
import com.intelligent_resume.app.entity.UserProfile;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;

@Mapper(componentModel = "spring")
public interface UserProfileMapper {

    @Mapping(target = "profileId", ignore = true)
    @Mapping(target = "user", ignore = true)
    UserProfile toProfile(SignUp signUp);
}
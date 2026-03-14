package com.intelligent_resume.app.util;

import com.intelligent_resume.app.entity.Role;
import com.intelligent_resume.app.entity.User;
import com.intelligent_resume.app.entity.UserRole;
import com.intelligent_resume.app.enumeration.RoleType;
import lombok.experimental.UtilityClass;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;

import java.util.Set;

@UtilityClass
public class AuthenticationUtils {

    public static String getCurrentUsername() {
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        if (authentication == null || !authentication.isAuthenticated()) {
            throw new IllegalStateException("No authenticated user found");
        }
        return authentication.getName();
    }
}

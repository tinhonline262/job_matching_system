package com.intelligent_resume.app.service.auth;


import com.intelligent_resume.app.entity.User;

import java.time.Duration;
import java.util.List;

public interface JwtKeyService {

    String generateToken(User user, Duration expiry);

    String generateRefreshToken(User user, Duration expiry);

    boolean validateToken(String token);
    List<String> extractRoles(String token);

    List<String> extractPermissions(String token);

    String extractUsername(String token);
}
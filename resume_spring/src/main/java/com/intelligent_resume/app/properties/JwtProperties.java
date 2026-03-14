package com.intelligent_resume.app.properties;

import lombok.AccessLevel;
import lombok.Data;
import lombok.experimental.FieldDefaults;
import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.stereotype.Component;

import java.time.Duration;

/**
 * JWT configuration properties loaded from application.yaml.
 * Prefix: identity.jwt
 */
@ConfigurationProperties(prefix = "app.jwt")
@Component
@Data
@FieldDefaults(level = AccessLevel.PRIVATE)
public class JwtProperties {

    String secretKey;
    Duration tokenExp;
    Duration refreshTokenExp;
}

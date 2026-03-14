package com.intelligent_resume.app.dto.response;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.*;
import lombok.experimental.FieldDefaults;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@FieldDefaults(level = AccessLevel.PRIVATE)
public class AuthTokensResponseDTO {
        @JsonProperty("access_token")
        String accessToken;

        @JsonProperty("refresh_token")
        String refreshToken;

        // Only user identifier — client can fetch full profile separately
        @JsonProperty("user_id")
        String userId;
}
package com.intelligent_resume.app.dto.response;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Builder;

@Builder
public record RegisterResponseDTO (
        @JsonProperty("sign-up-id")
        String signUpId
) {
}
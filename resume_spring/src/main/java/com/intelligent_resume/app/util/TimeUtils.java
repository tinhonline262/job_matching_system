package com.intelligent_resume.app.util;

import lombok.experimental.UtilityClass;

import java.time.LocalDateTime;

@UtilityClass
public class TimeUtils {

    public static LocalDateTime getExpiredTime(int seconds) {
        return LocalDateTime.now().plusSeconds(seconds);
    }
}

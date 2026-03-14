package com.intelligent_resume.app.util;

import com.intelligent_resume.app.constant.OptConstants;
import com.intelligent_resume.app.exception.OptFailException;
import lombok.experimental.UtilityClass;
import lombok.extern.slf4j.Slf4j;

import java.security.SecureRandom;
import java.time.LocalDateTime;

@UtilityClass
@Slf4j
public class OptGenerateUtils {

    private static final SecureRandom random = new SecureRandom();
    public static String generateOtp() {
        int number = random.nextInt(900000) + 100000;
        return String.valueOf(number);
    }

    public void validateResendOtp(LocalDateTime lastSentTime) {

        if (lastSentTime != null &&
                LocalDateTime.now().isBefore(
                        lastSentTime.plusSeconds(OptConstants.RESEND_INTERVAL_SECONDS)
                )) {

            throw new OptFailException("Please wait 60 seconds before requesting another OTP");
        }
    }

    public void validateOtpAttempts(int attempts) {

        if (attempts >= OptConstants.MAX_ATTEMPTS) {
            throw new OptFailException("Too many incorrect OTP attempts");
        }
    }
}

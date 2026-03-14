package com.intelligent_resume.app.exception;

public class SignUpNotValidException extends RuntimeException {
    public SignUpNotValidException(String message) {
        super(message);
    }
}

package com.intelligent_resume.app.exception;

public class LoginNotValidException extends RuntimeException {
  public LoginNotValidException(String message) {
    super(message);
  }
}

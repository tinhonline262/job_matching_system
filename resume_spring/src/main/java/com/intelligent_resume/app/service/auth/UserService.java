package com.intelligent_resume.app.service.auth;

import com.intelligent_resume.app.entity.SignUp;
import com.intelligent_resume.app.entity.User;

public interface UserService {
    void createUser(SignUp signUp);
    User getUserByUserName(String userName);
}

package com.intelligent_resume.app.service.mail;

import com.intelligent_resume.app.event.type.NotificationEvent;

public interface MailService {

    void sendVerifyUserMail(NotificationEvent verifyUserMailEvent);

    void sendCompleteUserMail(NotificationEvent completeUserMailEvent);
}

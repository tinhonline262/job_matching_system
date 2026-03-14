package com.intelligent_resume.app.service.mail.impl;

import com.intelligent_resume.app.constant.AttributeConstant;
import com.intelligent_resume.app.event.type.NotificationEvent;
import com.intelligent_resume.app.service.mail.MailService;
import com.intelligent_resume.app.template.AbstractMailHandler;
import com.intelligent_resume.app.template.CompleteUserMailHandler;
import com.intelligent_resume.app.template.VerifyUserMailHandler;
import jakarta.mail.MessagingException;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;
import org.thymeleaf.spring5.SpringTemplateEngine;

import java.util.HashMap;
import java.util.Map;

@Slf4j
@Service
class MailServiceImpl implements MailService {

    private final JavaMailSender mailSender;
    private final SpringTemplateEngine templateEngine;
    private final String senderMail;

    MailServiceImpl(JavaMailSender mailSender, SpringTemplateEngine templateEngine,
                    @Value("${mail.sender.from}") String senderMail) {
        this.mailSender = mailSender;
        this.templateEngine = templateEngine;
        this.senderMail = senderMail;
    }

    @Override
    public void sendVerifyUserMail(NotificationEvent mailDTO) {
        Map<String, Object> variables = new HashMap<>();
        variables.put(AttributeConstant.NAME_ATTRIBUTE, mailDTO.getData().get(AttributeConstant.NAME_ATTRIBUTE));
        variables.put(AttributeConstant.EMAIL_ATTRIBUTE, mailDTO.getData().get(AttributeConstant.EMAIL_ATTRIBUTE));
        variables.put(AttributeConstant.VERIFY_TOKEN_ATTRIBUTE, mailDTO.getData().get(AttributeConstant.VERIFY_TOKEN_ATTRIBUTE));
        variables.put(AttributeConstant.EXPIRED_DATE_ATTRIBUTE, mailDTO.getData().get(AttributeConstant.EXPIRED_DATE_ATTRIBUTE));

        AbstractMailHandler mailHandler = new VerifyUserMailHandler(
                mailSender, templateEngine, variables, senderMail,
                mailDTO.getData().get(AttributeConstant.EMAIL_ATTRIBUTE).toString()
        );
        sendMail(mailHandler);
    }

    @Override
    public void sendCompleteUserMail(NotificationEvent mailDTO) {
        Map<String, Object> variables = new HashMap<>();
        variables.put(AttributeConstant.NAME_ATTRIBUTE, mailDTO.getData().get(AttributeConstant.NAME_ATTRIBUTE));
        variables.put(AttributeConstant.EMAIL_ATTRIBUTE, mailDTO.getData().get(AttributeConstant.EMAIL_ATTRIBUTE));
        variables.put(AttributeConstant.USERNAME_ATTRIBUTE, mailDTO.getData().get(AttributeConstant.USERNAME_ATTRIBUTE));
        variables.put(AttributeConstant.CREATED_AT_ATTRIBUTE, mailDTO.getData().get(AttributeConstant.CREATED_AT_ATTRIBUTE));

        AbstractMailHandler mailHandler = new CompleteUserMailHandler(
                mailSender, templateEngine, variables, senderMail,
                mailDTO.getData().get(AttributeConstant.EMAIL_ATTRIBUTE).toString()
        );
        sendMail(mailHandler);
    }

    private void sendMail(AbstractMailHandler mailHandler) {
        try {
            mailHandler.send();
        } catch (MessagingException e) {
            log.error("Failed to send email: {}", e.getMessage(), e);
        }
    }
}

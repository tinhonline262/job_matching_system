package com.intelligent_resume.app.event.consumer;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.intelligent_resume.app.event.type.NotificationEvent;
import com.intelligent_resume.app.service.mail.MailService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.data.redis.connection.stream.MapRecord;
import org.springframework.stereotype.Component;

/**
 * Consumes notification events from the Redis Stream and routes them
 * to the appropriate {@link MailService} method.
 */
@Slf4j
@Component
@RequiredArgsConstructor
public class MailEventConsumer {

    private final MailService mailService;
    private final ObjectMapper objectMapper;

    public void consume(MapRecord<String, String, String> message) {
        try {
            String payload = message.getValue().get("payload");
            if (payload == null) {
                log.warn("Received stream message with no payload, id={}", message.getId());
                return;
            }

            NotificationEvent event = objectMapper.readValue(payload, NotificationEvent.class);
            log.info("Processing notification event type={}", event.getEventType());

            switch (event.getEventType()) {
                case "VERIFY_USER" -> mailService.sendVerifyUserMail(event);
                case "COMPLETE_USER" -> mailService.sendCompleteUserMail(event);
                default -> log.warn("Unrecognised event type={}", event.getEventType());
            }
        } catch (Exception e) {
            log.error("Failed to process stream message id={}", message.getId(), e);
        }
    }
}

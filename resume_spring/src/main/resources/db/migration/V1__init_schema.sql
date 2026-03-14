-- V1__initial_schema.sql
-- Initial database schema (cleaned for Flyway) with performance & auth/security indexes

-- Permissions (lookup by name is common when checking/assigning)
CREATE TABLE tbl_permissions (
                                 permission_id          BIGINT       NOT NULL AUTO_INCREMENT,
                                 permission_name        VARCHAR(100) NOT NULL,
                                 permission_description VARCHAR(500)          DEFAULT NULL,
                                 PRIMARY KEY (permission_id),
                                 UNIQUE  KEY uk_permission_name (permission_name)   -- ← added: fast lookup + prevent duplicates
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;


-- Roles
CREATE TABLE tbl_roles (
                           role_id           BIGINT       NOT NULL AUTO_INCREMENT,
                           role_name         VARCHAR(100) NOT NULL,
                           role_description  VARCHAR(500)          DEFAULT NULL,
                           is_active         BIT(1)       NOT NULL DEFAULT 1,
                           created_at        DATETIME(6)  NOT NULL,
                           updated_at        DATETIME(6)           DEFAULT NULL,
                           PRIMARY KEY (role_id),
                           UNIQUE  KEY uk_role_name (role_name)               -- ← added: fast lookup + prevent duplicates
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;


-- Users (core authentication table)
CREATE TABLE tbl_users (
                           user_id       VARCHAR(255) PRIMARY KEY,
                           username      VARCHAR(50)  NOT NULL,
                           password_hash VARCHAR(255) NOT NULL,
                           sign_up_id     VARCHAR(255) DEFAULT NULL,
                           is_active     BIT(1)       NOT NULL DEFAULT 1,
                           created_at    DATETIME(6)  NOT NULL,
                           updated_at    DATETIME(6)           DEFAULT NULL,
                           UNIQUE  KEY uk_username (username)                 -- already good for login
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

CREATE TABLE tbl_user_profiles (
                                   user_profile_id   BIGINT AUTO_INCREMENT PRIMARY KEY,

                                   user_id           VARCHAR(255) NOT NULL,

                                   email             VARCHAR(100) NOT NULL,
                                   phone_number      VARCHAR(20) DEFAULT NULL,

                                   first_name        VARCHAR(100) DEFAULT NULL,
                                   last_name         VARCHAR(100) DEFAULT NULL,
                                   date_of_birth     DATE DEFAULT NULL,

                                   profile_image_url VARCHAR(500) DEFAULT NULL,

                                   created_at        DATETIME(6) NOT NULL,
                                   updated_at        DATETIME(6) DEFAULT NULL,

                                   CONSTRAINT fk_user_profile_user
                                       FOREIGN KEY (user_id)
                                           REFERENCES tbl_users(user_id)
                                           ON DELETE CASCADE,

                                   CONSTRAINT uk_user_profile_user
                                       UNIQUE (user_id),

                                   CONSTRAINT uk_user_profile_email
                                       UNIQUE (email),

                                   INDEX idx_user_profile_email (email)

) ENGINE=InnoDB
DEFAULT CHARSET=utf8mb4
COLLATE=utf8mb4_0900_ai_ci;


-- Sign-up / registration pending records
CREATE TABLE tbl_sign_up (
                             signup_id                      VARCHAR(255) PRIMARY KEY,
                             username                       VARCHAR(50)  NOT NULL,
                             email                          VARCHAR(100) NOT NULL,
                             first_name                           VARCHAR(100) NOT NULL,
                             last_name                           VARCHAR(100) NOT NULL,
                             password                       TEXT         NOT NULL,
                             current_verification_token     VARCHAR(255) NOT NULL,
                             expired_verification_token_date DATETIME(6)  NOT NULL,
                             count_attempt_verification_token int         NOT NULL,
                             last_verification_token_sent_at  datetime(6)  not null,
                             status                         ENUM('CANCELLED','EXPIRED','PENDING','VERIFIED') NOT NULL,
                             created_at                     DATETIME(6)  NOT NULL,
                             updated_at                     DATETIME(6)  NOT NULL,
                             UNIQUE  KEY uk_email (email),
                             INDEX       idx_signup_token (current_verification_token)         -- verification lookup
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;


-- Role ↔ Permission (many-to-many)
CREATE TABLE tbl_role_permissions (
                                      role_permission_id BIGINT      NOT NULL AUTO_INCREMENT PRIMARY KEY,
                                      role_id            BIGINT      NOT NULL,
                                      permission_id      BIGINT      NOT NULL,
                                      is_active          BIT(1)      NOT NULL DEFAULT 1,
                                      granted_at         DATETIME(6) NOT NULL,
                                      granted_by         VARCHAR(255)         DEFAULT NULL,

                                      UNIQUE  KEY uk_role_permission (role_id, permission_id),
                                      INDEX       idx_role_perm_role_active (role_id, is_active),       -- ← critical: get active permissions of a role
                                      INDEX       idx_role_perm_perm       (permission_id),             -- reverse lookup if needed

                                      CONSTRAINT fk_rp_role      FOREIGN KEY (role_id)       REFERENCES tbl_roles(role_id),
                                      CONSTRAINT fk_rp_permission FOREIGN KEY (permission_id) REFERENCES tbl_permissions(permission_id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;


-- User ↔ Role (many-to-many)
CREATE TABLE tbl_user_roles (
                                user_role_id   BIGINT      NOT NULL AUTO_INCREMENT PRIMARY KEY,
                                user_id        VARCHAR(255) NOT NULL,
                                role_id        BIGINT      NOT NULL,
                                is_active      BIT(1)      NOT NULL DEFAULT 1,
                                assigned_at    DATETIME(6) NOT NULL,
                                assigned_by    VARCHAR(255)         DEFAULT NULL,

                                UNIQUE  KEY uk_user_role (user_id, role_id),
                                INDEX       idx_user_role_user_active (user_id, is_active),       -- ← critical: get active roles of a user (used on every request!)
                                INDEX       idx_user_role_role        (role_id),                 -- reverse lookup if needed

                                CONSTRAINT fk_ur_user FOREIGN KEY (user_id) REFERENCES tbl_users(user_id),
                                CONSTRAINT fk_ur_role FOREIGN KEY (role_id) REFERENCES tbl_roles(role_id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
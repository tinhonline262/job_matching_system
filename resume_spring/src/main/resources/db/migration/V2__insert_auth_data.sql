-- V2__insert_initial_roles_and_basic_permissions.sql
-- Inserts initial roles from RoleType enum + a small set of common permissions
-- + assigns basic permissions to roles (you can extend this later)

-- ------------------------------------------------------------------------------
-- 1. Basic / atomic permissions
--    (You can add more granular ones later in future migrations)
-- ------------------------------------------------------------------------------
INSERT INTO tbl_permissions (permission_name, permission_description) VALUES
                                                                          ('USER_READ_OWN',           'View own profile and basic info'),
                                                                          ('USER_UPDATE_OWN',         'Edit own profile'),
                                                                          ('USER_READ',               'View any user basic info (admin/manager)'),
                                                                          ('USER_MANAGE',             'Create/update/disable users (admin/manager)'),
                                                                          ('ROLE_ASSIGN',             'Assign/remove roles to users'),
                                                                          ('PERMISSION_MANAGE',       'Manage roles & permissions'),
                                                                          ('SYSTEM_CONFIG',           'Access system configuration & logs')
    ON DUPLICATE KEY UPDATE permission_description = VALUES(permission_description);

-- ------------------------------------------------------------------------------
-- 2. Initial roles from RoleType enum
-- ------------------------------------------------------------------------------
INSERT INTO tbl_roles (role_name, role_description, is_active, created_at, updated_at) VALUES
                                                                                           ('ADMIN',    'Full system access with administrative privileges.',     1, NOW(6), NULL),
                                                                                           ('MANAGER',  'Responsible for managing teams and system operations.',  1, NOW(6), NULL),
                                                                                           ('STAFF',    'Operates system functionalities assigned by managers.', 1, NOW(6), NULL),
                                                                                           ('CUSTOMER', 'Registered user who can use services provided by the system.', 1, NOW(6), NULL),
                                                                                           ('GUEST',    'Unregistered user with limited system access.',         1, NOW(6), NULL)
    ON DUPLICATE KEY UPDATE
                         role_description = VALUES(role_description),
                         is_active        = VALUES(is_active);

-- ------------------------------------------------------------------------------
-- 3. Assign permissions to roles (many-to-many)
--    Using subqueries for readability & safety
-- ------------------------------------------------------------------------------

-- ADMIN → almost everything
INSERT INTO tbl_role_permissions (role_id, permission_id, is_active, granted_at, granted_by)
SELECT
    r.role_id,
    p.permission_id,
    1,
    NOW(6),
    'SYSTEM_INIT'
FROM tbl_roles r
         CROSS JOIN tbl_permissions p
WHERE r.role_name = 'ADMIN'
    ON DUPLICATE KEY UPDATE is_active = 1;

-- MANAGER → most management permissions (excluding full admin ones if desired)
INSERT INTO tbl_role_permissions (role_id, permission_id, is_active, granted_at, granted_by)
SELECT
    r.role_id,
    p.permission_id,
    1,
    NOW(6),
    'SYSTEM_INIT'
FROM tbl_roles r
         JOIN tbl_permissions p ON p.permission_name IN (
                                                         'USER_READ', 'USER_MANAGE', 'USER_READ_OWN', 'USER_UPDATE_OWN',
                                                         'ROLE_ASSIGN'
    )
WHERE r.role_name = 'MANAGER'
    ON DUPLICATE KEY UPDATE is_active = 1;

-- STAFF → limited operational permissions
INSERT INTO tbl_role_permissions (role_id, permission_id, is_active, granted_at, granted_by)
SELECT
    r.role_id,
    p.permission_id,
    1,
    NOW(6),
    'SYSTEM_INIT'
FROM tbl_roles r
         JOIN tbl_permissions p ON p.permission_name IN (
                                                         'USER_READ_OWN', 'USER_UPDATE_OWN'
    -- add more domain-specific permissions later
    )
WHERE r.role_name = 'STAFF'
    ON DUPLICATE KEY UPDATE is_active = 1;

-- CUSTOMER → only own data
INSERT INTO tbl_role_permissions (role_id, permission_id, is_active, granted_at, granted_by)
SELECT
    r.role_id,
    p.permission_id,
    1,
    NOW(6),
    'SYSTEM_INIT'
FROM tbl_roles r
         JOIN tbl_permissions p ON p.permission_name IN (
                                                         'USER_READ_OWN', 'USER_UPDATE_OWN'
    )
WHERE r.role_name = 'CUSTOMER'
    ON DUPLICATE KEY UPDATE is_active = 1;

-- GUEST → practically nothing (or very minimal read-only if needed)
-- Usually we don't assign any permissions → skip or add very limited ones later

-- ------------------------------------------------------------------------------
-- Optional: you can add one default admin user here (VERY carefully!)
-- Many teams prefer to create the first admin manually / via admin panel instead.
-- Example (commented out by default):
--
/*
INSERT INTO tbl_users (user_id, username, password_hash, is_active, created_at)
VALUES ('admin-0001-initial', 'admin', '{bcrypt}$2a$10$...', 1, NOW(6));

INSERT INTO tbl_user_profiles (user_id, email, first_name, last_name, created_at)
VALUES ('admin-0001-initial', 'admin@yourcompany.com', 'System', 'Admin', NOW(6));

INSERT INTO tbl_user_roles (user_id, role_id, is_active, assigned_at, assigned_by)
SELECT 'admin-0001-initial', r.role_id, 1, NOW(6), 'SYSTEM_INIT'
FROM tbl_roles r WHERE r.role_name = 'ADMIN';
*/
package com.intelligent_resume.app.service.auth.impl;

import com.intelligent_resume.app.entity.Role;
import com.intelligent_resume.app.entity.SignUp;
import com.intelligent_resume.app.entity.User;
import com.intelligent_resume.app.entity.UserRole;
import com.intelligent_resume.app.enumeration.RoleType;
import com.intelligent_resume.app.exception.AddRoleFailException;
import com.intelligent_resume.app.mapper.UserMapper;
import com.intelligent_resume.app.repository.RoleRepository;
import com.intelligent_resume.app.repository.UserRepository;
import com.intelligent_resume.app.repository.UserRoleRepository;
import com.intelligent_resume.app.service.auth.UserService;
import lombok.AllArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Set;

@Service
@Slf4j
@AllArgsConstructor
@Transactional
public class UserServiceImpl implements UserService {
    private final UserMapper userMapper;
    private final UserRepository userRepository;
    private final RoleRepository roleRepository;
    private final UserRoleRepository userRoleRepository;

    @Override
    public void createUser(SignUp signUp) {
        log.info("Creating user with email: {}", signUp.getEmail());
        User userEntity = userMapper.toUser(signUp);
        userEntity.getProfile().setUser(userEntity);
        userEntity.setSignUp(signUp);
        userRepository.save(userEntity);
        assignRoles(userEntity, Set.of(RoleType.CUSTOMER));
        log.info("Created user with email: {}", signUp.getEmail());
    }

    @Override
    public User getUserByUserName(String userName) {
        return userRepository.findByUsername(userName)
                .orElseThrow(() -> new RuntimeException("User not found with username: " + userName));
    }

    private void assignRoles(User user, Set<RoleType> roleTypes) {

        if (roleTypes == null || roleTypes.isEmpty()) {
            throw new AddRoleFailException("No roles provided for assignment");
        }
        if (user.getUserRoles() != null && !user.getUserRoles().isEmpty()) {
            user.getUserRoles().clear();
        }

        for (RoleType roleType : roleTypes) {

            Role role = roleRepository.findRoleByRoleName(roleType.name())
                    .orElseThrow(
                            () -> new AddRoleFailException("Role not found: " + roleType.name())
                    );

            UserRole userRole = new UserRole();
            userRole.setUser(user);
            userRole.setRole(role);
            userRoleRepository.save(userRole);

            user.getUserRoles().add(userRole);
            roleRepository.save(role);
        }
    }
}

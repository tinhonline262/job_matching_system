package com.intelligent_resume.app.repository;

import com.intelligent_resume.app.entity.SignUp;
import com.intelligent_resume.app.enumeration.SignUpStatus;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import javax.swing.*;
import javax.swing.text.html.Option;
import java.util.List;
import java.util.Optional;

@Repository
public interface SignUpRepository extends JpaRepository<SignUp,String> {
    boolean existsByUsernameAndStatusIn(String username, List<SignUpStatus> statuses);
    boolean existsByEmailAndStatusIn(String email, List<SignUpStatus> statuses);
    Optional<SignUp> findByIdAndStatus(String id, SignUpStatus status);
}

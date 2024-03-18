package ru.fortuna.fortunesGateway.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import ru.fortuna.fortunesGateway.model.Users.Admin;

public interface AdminRepository extends JpaRepository<Admin, Long> {
    Admin findByUsername(String username);
}

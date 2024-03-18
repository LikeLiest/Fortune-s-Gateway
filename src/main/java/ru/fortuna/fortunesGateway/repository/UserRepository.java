package ru.fortuna.fortunesGateway.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import ru.fortuna.fortunesGateway.model.Users.MyUser;

public interface UserRepository extends JpaRepository<MyUser, Long> {
    MyUser findByUsername(String username);
}

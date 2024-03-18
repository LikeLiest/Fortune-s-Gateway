package ru.fortuna.fortunesGateway.service;


import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import ru.fortuna.fortunesGateway.model.Users.MyUser;
import ru.fortuna.fortunesGateway.repository.UserRepository;

@Service
@RequiredArgsConstructor
public class UserService {
    private final UserRepository repository;

    private MyUser createUser(final MyUser user) {
        return repository.save(user);
    }

    public MyUser getCurrentUser() {
        return repository.findAll().getFirst();
    }
}

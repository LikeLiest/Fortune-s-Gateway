package ru.fortuna.fortunesGateway.service;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import ru.fortuna.fortunesGateway.model.Users.Admin;
import ru.fortuna.fortunesGateway.repository.AdminRepository;

@Service
@RequiredArgsConstructor
public class AdminService {
    private final AdminRepository repository;

    public Admin createAdmin(final Admin admin) {
        return repository.save(admin);
    }

    public Admin getAdmin() {
        return repository.findAll().getFirst();
    }
}

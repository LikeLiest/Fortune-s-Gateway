package ru.fortuna.fortunesGateway.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import ru.fortuna.fortunesGateway.model.tickets.Ticket;


public interface TicketRepository extends JpaRepository<Ticket, Long> {
}

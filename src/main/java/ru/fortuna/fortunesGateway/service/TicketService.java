package ru.fortuna.fortunesGateway.service;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import ru.fortuna.fortunesGateway.model.tickets.Ticket;
import ru.fortuna.fortunesGateway.repository.TicketRepository;

import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
@Slf4j
public class TicketService {
    private final TicketRepository repository;

    public List<Ticket> getAllTickets() {
        return repository.findAll();
    }

    public Ticket saveTicket(final Ticket ticket) {
        return repository.save(ticket);
    }

    public Ticket updateTicket(final Long id, final Ticket updateTicket) {
        Optional<Ticket> optionalTicket = repository.findById(id);
        if (optionalTicket.isPresent()) {
            final Ticket ticket = optionalTicket.get();
            ticket.setId(updateTicket.getId());
            ticket.setCost(updateTicket.getCost());
            ticket.setWinChance(updateTicket.getWinChance());
            return repository.save(ticket);
        } else {
            throw new RuntimeException("Ticket not fount with id: " + id);
        }
    }

    public void deleteTicket(final Long id) {
        if (repository.findById(id).isPresent()) {
            repository.deleteById(id);
            log.info("ticket with id= {} is removed", repository.findById(id));
        } else {
            log.error("it seems something went wrong. Check class TicketService");
        }
    }
}


package ru.fortuna.fortunesGateway.controller;


import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.*;
import ru.fortuna.fortunesGateway.model.tickets.Ticket;
import ru.fortuna.fortunesGateway.repository.TicketRepository;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("api/v1/main")
@RequiredArgsConstructor
@Slf4j
public class TicketController {
    private final TicketRepository repository;

    @GetMapping("/tickets")
    public List<Ticket> ticketList() {
        List<Ticket> ticketList = new ArrayList<>();
        ticketList.add(new Ticket(1L, 100.0, 0.1));
        ticketList.add(new Ticket(2L, 200.0, 0.15));
        ticketList.add(new Ticket(3L, 250.0, 0.2));
        ticketList.add(new Ticket(4L, 325.0, 0.25));
        ticketList.add(new Ticket(5L, 400.0, 0.30));
        ticketList.add(new Ticket(6L, 550.0, 0.35));
        ticketList.add(new Ticket(7L, 650.0, 0.4));
        ticketList.add(new Ticket(8L, 850.0, 0.45));
        repository.saveAll(ticketList);
        return ticketList;
    }
}

package ru.fortuna.fortunesGateway.controller;


import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import ru.fortuna.fortunesGateway.model.tickets.Ticket;
import ru.fortuna.fortunesGateway.service.TicketService;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("api/v1/main")
@RequiredArgsConstructor
@Slf4j
public class TicketController {
    private final TicketService service;

    @GetMapping("/tickets")
    public List<Ticket> ticketList() {
        List<Ticket> ticketList = new ArrayList<>();
        ticketList.add(new Ticket(1L, 10.0, 0.1));
        ticketList.add(new Ticket(2L, 20.0, 0.2));
        ticketList.add(new Ticket(3L, 30.0, 0.5));
        return ticketList;
    }

    @GetMapping("/responseTickets")
    private ResponseEntity<List<Ticket>> getAllTickets() {
        List<Ticket> ticketList = service.getAllTickets();
        return new ResponseEntity<>(ticketList, HttpStatus.OK);
    }

    @PostMapping
    public ResponseEntity<Ticket> createTicket(@RequestBody final Ticket ticket) {
        final Ticket createdTicket = service.saveTicket(ticket);
        return new ResponseEntity<>(createdTicket, HttpStatus.CREATED);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Ticket> updateTicket(@PathVariable final Long id, @RequestBody final Ticket ticket) {
        final Ticket updatedTicket = service.updateTicket(id, ticket);
        return new ResponseEntity<>(updatedTicket, HttpStatus.OK);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteTicket(@PathVariable final Long id) {
        service.deleteTicket(id);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }

    @PostMapping("/id/buy")
    public ResponseEntity<Ticket> buyTicket(@PathVariable final Long id) {
        final Ticket boughtTicket = service.buyTicket(id);
        return new ResponseEntity<>(boughtTicket,HttpStatus.OK);
    }
}

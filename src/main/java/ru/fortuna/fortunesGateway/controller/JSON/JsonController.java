package ru.fortuna.fortunesGateway.controller.JSON;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.SerializationFeature;
import jakarta.annotation.PostConstruct;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import ru.fortuna.fortunesGateway.model.tickets.Ticket;
import ru.fortuna.fortunesGateway.repository.TicketRepository;

import java.io.File;
import java.io.IOException;
import java.util.List;

@Service
@RequiredArgsConstructor
public class JsonController {
    private final TicketRepository repository;

    @PostConstruct
    public void exportDataToJsonFile() {
        List<Ticket> ticketList = repository.findAll();
        ObjectMapper objectMapper = new ObjectMapper();
        objectMapper.enable(SerializationFeature.INDENT_OUTPUT);

        try {
            objectMapper.writeValue(new File("jackson.json"), ticketList);
        } catch (IOException e) {
            System.err.println("Не удалось записать json файл...");
            throw new RuntimeException(e);
        }
    }
}

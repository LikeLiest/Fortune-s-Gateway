package ru.fortuna.fortunesGateway.model;


import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class Application {
    private int id;
    private String name;
}

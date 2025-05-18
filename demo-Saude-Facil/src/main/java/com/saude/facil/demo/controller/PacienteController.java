package com.saude.facil.demo.controller;

import com.saude.facil.demo.entity.paciente.Paciente;
import com.saude.facil.demo.entity.paciente.dto.PacienteAtualizarDTO;
import com.saude.facil.demo.entity.paciente.dto.PacienteDTO;
import com.saude.facil.demo.entity.paciente.dto.PacienteResponseDTO;
import com.saude.facil.demo.service.PacienteService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/pacientes")
public class PacienteController {

    @Autowired
    private PacienteService service;

    @CrossOrigin(origins = "*")
    @PostMapping
    private ResponseEntity<Paciente> cadastrarPaciente(@RequestBody PacienteDTO dto) {
        System.out.println(dto.cep());
        return ResponseEntity.ok(this.service.cadastrarPaciente(dto));
    }

    @CrossOrigin(origins = "*")
    @GetMapping
    private ResponseEntity<List<PacienteResponseDTO>> listarPacientes() {
        return ResponseEntity.ok(service.listarPacientes());
    }
    @CrossOrigin(origins = "*")
    @GetMapping("{id}")
    private ResponseEntity<Optional<PacienteResponseDTO>> listarPaciente(@PathVariable Long id) {
        return ResponseEntity.ok(service.listarPaciente(id));
    }
    @CrossOrigin(origins = "*")
    @DeleteMapping("{id}")
    private ResponseEntity deletaPaciente(@PathVariable Long id) {
        service.deletarPaciente(id);
        return ResponseEntity.status(HttpStatus.CREATED).build();
    }

    @CrossOrigin(origins = "*")
    @PutMapping("{id}")
    private ResponseEntity<Paciente> atualizarMedico(@RequestBody PacienteAtualizarDTO dto,@PathVariable Long id) {
        return ResponseEntity.ok(service.atualizarPaciente(dto, id));
    }
}

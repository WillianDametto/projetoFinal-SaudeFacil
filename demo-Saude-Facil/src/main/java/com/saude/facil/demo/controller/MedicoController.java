package com.saude.facil.demo.controller;

import com.saude.facil.demo.entity.medicos.Medico;
import com.saude.facil.demo.entity.medicos.dtos.MedicoAtualizarDTO;
import com.saude.facil.demo.entity.medicos.dtos.MedicoDTO;
import com.saude.facil.demo.entity.medicos.dtos.MedicoResponseDTO;
import com.saude.facil.demo.service.MedicoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/medicos")
public class MedicoController {

    @Autowired
    private MedicoService service;

    @CrossOrigin(origins = "*")
    @PostMapping
    private ResponseEntity<Medico> cadastrarMedico(@RequestBody MedicoDTO dto) {
        return ResponseEntity.ok(this.service.cadastrarMedico(dto));
    }
    @CrossOrigin(origins = "*")
    @GetMapping
    private ResponseEntity<List<MedicoResponseDTO>> listarMedicos() {
        return ResponseEntity.ok(service.listarMedicos());
    }
    @CrossOrigin(origins = "*")
    @GetMapping("{id}")
    private ResponseEntity<Optional<MedicoResponseDTO>> listarMedico(@PathVariable Long id) {
        return ResponseEntity.ok(service.listarMedico(id));
    }
    @CrossOrigin(origins = "*")
    @DeleteMapping("{id}")
    private ResponseEntity deletarMedico(@PathVariable Long id) {
        service.deletarMedico(id);
        return ResponseEntity.status(HttpStatus.CREATED).build();
    }
    @CrossOrigin(origins = "*")
    @PutMapping("{id}")
    private ResponseEntity<Medico> atualizarMedico(@RequestBody MedicoAtualizarDTO dto,@PathVariable Long id) {
        return ResponseEntity.ok(service.atualizarMedico(dto, id));
    }
}

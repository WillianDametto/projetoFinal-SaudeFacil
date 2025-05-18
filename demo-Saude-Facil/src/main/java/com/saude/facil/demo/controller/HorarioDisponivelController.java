package com.saude.facil.demo.controller;

import com.saude.facil.demo.entity.medicos.HorarioDisponivel;
import com.saude.facil.demo.service.HorarioDisponivelService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/horarios-disponiveis")
public class HorarioDisponivelController {

    @Autowired
    private HorarioDisponivelService horarioDisponivelService;

    @CrossOrigin(origins = "*")
    @PostMapping
    public ResponseEntity<HorarioDisponivel> criarHorarioDisponivel(
            @RequestParam Long medicoId,
            @RequestParam String data,
            @RequestParam String hora,
            @RequestParam Boolean disponivel) {
        HorarioDisponivel novoHorario = horarioDisponivelService.criarHorarioDisponivel(medicoId, data, hora, disponivel);
        return ResponseEntity.ok(novoHorario);
    }
    @CrossOrigin(origins = "*")
    @GetMapping("/{id}")
    public ResponseEntity<HorarioDisponivel> buscarHorarioPorId(@PathVariable Long id) {
        return horarioDisponivelService.buscarHorarioPorId(id)
                .map(ResponseEntity::ok)
                .orElseGet(() -> ResponseEntity.notFound().build());
    }

    @CrossOrigin(origins = "*")
    @GetMapping
    public ResponseEntity<List<HorarioDisponivel>> listarHorariosDisponiveis() {
        List<HorarioDisponivel> horarios = horarioDisponivelService.listarHorariosDisponiveis();
        return ResponseEntity.ok(horarios);
    }
    @CrossOrigin(origins = "*")
    @PutMapping("/{id}")
    public ResponseEntity<HorarioDisponivel> atualizarHorarioDisponivel(@PathVariable Long id, @RequestParam Boolean disponivel) {
        Optional<HorarioDisponivel> horarioAtualizado = horarioDisponivelService.atualizarHorarioDisponivel(id, disponivel);
        return horarioAtualizado.map(ResponseEntity::ok).orElseGet(() -> ResponseEntity.notFound().build());
    }
    @CrossOrigin(origins = "*")
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deletarHorarioDisponivel(@PathVariable Long id) {
        if (horarioDisponivelService.deletarHorarioDisponivel(id)) {
            return ResponseEntity.ok().build();
        } else {
            return ResponseEntity.notFound().build();
        }
    }
}

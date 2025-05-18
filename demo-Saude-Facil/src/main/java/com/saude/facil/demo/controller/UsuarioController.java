package com.saude.facil.demo.controller;

import com.saude.facil.demo.entity.paciente.dto.DadosAutenticacaoPaciente;
import com.saude.facil.demo.entity.usuario.Usuario;
import com.saude.facil.demo.service.UsuarioService;
import com.saude.facil.demo.service.dto.DadosAutenticacao;
import com.saude.facil.demo.service.dto.UsuarioResponseDTO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/usuarios")
public class UsuarioController {

    @Autowired
    private UsuarioService service;

    @RestController
    public class HealthCheckController {
        @GetMapping("/healthz")
        public ResponseEntity<String> healthCheck() {
            return ResponseEntity.ok("OK");
        }
    }
    @CrossOrigin(origins = "*")
    @PostMapping()
    public ResponseEntity<Usuario> criarUsuario(@RequestBody DadosAutenticacao dadosAutenticacao) {
        return ResponseEntity.status(HttpStatus.CREATED).body(service.criarUsuario(dadosAutenticacao));

    }

    @CrossOrigin(origins = "*")
    @PostMapping("/criar-paciente")
    public ResponseEntity<Usuario> criarUsuarioPaciente(@RequestBody DadosAutenticacaoPaciente dadosAutenticacao) {
        return ResponseEntity.status(HttpStatus.CREATED).body(service.criarUsuarioPaciente(dadosAutenticacao));
    }
    @CrossOrigin(origins = "*")
    @GetMapping
    public ResponseEntity<List<UsuarioResponseDTO>> listarUsuarios() {

        return ResponseEntity.ok(service.listarUsuarios());
    }
    @CrossOrigin(origins = "*")
    @GetMapping("/{id}")
    public ResponseEntity<Optional<UsuarioResponseDTO>> listarUsuarios(@PathVariable Long id) {

        return ResponseEntity.ok(service.listarUsuarioUnico(id));
    }

    @CrossOrigin(origins = "*")
    @PatchMapping
    public ResponseEntity<Usuario> atualizarSenha(@RequestParam String email) {
        System.out.println(email);
        return ResponseEntity.ok(service.atualizarSenha(email));
    }
}

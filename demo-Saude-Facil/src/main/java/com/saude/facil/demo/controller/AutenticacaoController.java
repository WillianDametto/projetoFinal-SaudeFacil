package com.saude.facil.demo.controller;

import com.saude.facil.demo.entity.paciente.dto.DadosAutenticacaoPaciente;
import com.saude.facil.demo.entity.usuario.Usuario;
import com.saude.facil.demo.entity.usuario.dto.DadosLogin;
import com.saude.facil.demo.repository.UsuarioRepository;
import com.saude.facil.demo.service.dto.DadosAutenticacao;
import com.saude.facil.demo.service.dto.UsuarioResponseDTO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/login")
public class AutenticacaoController {

    @Autowired
    private AuthenticationManager manager;

    @Autowired
    private UsuarioRepository repository;
    @PostMapping
    @CrossOrigin(origins = "*")
    public ResponseEntity<UsuarioResponseDTO> efetuarLogin(@RequestBody @Validated DadosAutenticacao dados){
        Usuario usuario = repository.findByEmailIgnoreCase(dados.email());
        var token = new UsernamePasswordAuthenticationToken(dados.email(),dados.senha());
        var authentication =  manager.authenticate(token);

        return ResponseEntity.ok(new UsuarioResponseDTO(usuario));
    }
}

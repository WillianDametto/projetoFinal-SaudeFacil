package com.saude.facil.demo.service;

import com.saude.facil.demo.entity.medicos.Medico;
import com.saude.facil.demo.entity.medicos.dtos.MedicoDTO;
import com.saude.facil.demo.entity.medicos.dtos.MedicoResponseDTO;
import com.saude.facil.demo.entity.paciente.dto.DadosAutenticacaoPaciente;
import com.saude.facil.demo.entity.paciente.dto.PacienteDTO;
import com.saude.facil.demo.entity.usuario.Usuario;
import com.saude.facil.demo.repository.MedicoRepository;
import com.saude.facil.demo.repository.PacienteRepository;
import com.saude.facil.demo.repository.UsuarioRepository;
import com.saude.facil.demo.service.dto.DadosAutenticacao;
import com.saude.facil.demo.service.dto.UsuarioResponseDTO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import java.security.SecureRandom;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class UsuarioService {

    @Autowired
    private UsuarioRepository repository;

    @Autowired
    private EmailService emailService;

    @Autowired
    private PacienteRepository pacienteRepository;

    @Autowired
    private MedicoRepository medicoRepository;

    public Usuario criarUsuario(DadosAutenticacao dadosAutenticacao) {
        medicoRepository.save(dadosAutenticacao.medico());
        BCryptPasswordEncoder encoder = new BCryptPasswordEncoder();
        Usuario usuario = new Usuario(dadosAutenticacao);
        usuario.setSenha(encoder.encode(usuario.getPassword()));
        return repository.save(usuario);
    }

    public Usuario criarUsuarioPaciente(DadosAutenticacaoPaciente dadosAutenticacao) {
        pacienteRepository.save(dadosAutenticacao.paciente());
        BCryptPasswordEncoder encoder = new BCryptPasswordEncoder();
        Usuario usuario = new Usuario(dadosAutenticacao);
        usuario.setPaciente(dadosAutenticacao.paciente());
        usuario.setSenha(encoder.encode(usuario.getPassword()));
        return repository.save(usuario);
    }

    public List<UsuarioResponseDTO> listarUsuarios() {
        return repository.findAll()
                .stream()
                .map(UsuarioResponseDTO::new)
                .collect(Collectors.toList());
    }

    public Optional<UsuarioResponseDTO> listarUsuarioUnico(Long id) {
        return repository.findById(id)
                .map(UsuarioResponseDTO::new);

    }

    public Usuario atualizarSenha(String email) {
        // Atualizar a senha no banco de dados
        BCryptPasswordEncoder encoder = new BCryptPasswordEncoder();
        Usuario usuario = repository.findByEmailIgnoreCase(email);
        StringBuilder senha = new SecureRandom().ints(8, 33, 126)
                .collect(StringBuilder::new, StringBuilder::appendCodePoint, StringBuilder::append);
        usuario.setSenha(encoder.encode(senha));
        repository.save(usuario);

        // Enviar o e-mail com a nova senha
        try {
            emailService.enviarEmailComNovaSenha(usuario.getEmail(), String.valueOf(senha));
        } catch (Exception e) {
            e.printStackTrace();
            throw new RuntimeException("Erro ao enviar e-mail de recuperação de senha.");
        }
        return usuario;
    }

}

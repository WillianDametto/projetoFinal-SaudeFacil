package com.saude.facil.demo.service.dto;

import com.saude.facil.demo.entity.enums.UserRole;
import com.saude.facil.demo.entity.usuario.Usuario;

public record UsuarioResponseDTO(
        Long id,
        String email,
        Long medicoId,
        Long pacienteId,
        UserRole role
) {
    public UsuarioResponseDTO(Usuario dados) {
        this(
                dados.getId(),
                dados.getEmail(),
                (dados.getMedico() != null) ? dados.getMedico().getId() : null,
                (dados.getPaciente() != null) ? dados.getPaciente().getId() : null,
                dados.getRole()
        );
    }
}

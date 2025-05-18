package com.saude.facil.demo.entity.paciente.dto;

import com.saude.facil.demo.entity.paciente.Paciente;

public record PacienteResponseDTO(
        Long id,
        String nomeCompleto,
        String dataNascimento,
        String cpf,
        String genero,
        String estadoCivil,
        String telefone,
        String email
) {

    public PacienteResponseDTO(Paciente dto) {
        this(dto.getId(),dto.getNomeCompleto(),dto.getDataNascimento(), dto.getCpf(), dto.getGenero(), dto.getEstadoCivil(), dto.getTelefone(), dto.getEmail());
    }


}

package com.saude.facil.demo.entity.medicos.dtos;

import com.saude.facil.demo.entity.medicos.Medico;
import com.saude.facil.demo.entity.medicos.enums.Especialidade;
import com.saude.facil.demo.entity.paciente.Paciente;

public record MedicoResponseDTO(
        Long id,
        String nome,
        String cpf,
        String crm,
        String email,
        String telefone,
        String dataNascimento,
        Especialidade especialidade
) {
    public MedicoResponseDTO(Medico dto) {
        this(dto.getId(),dto.getNome(), dto.getCpf(), dto.getCrm(), dto.getEmail(), dto.getTelefone(), dto.getDataNascimento(), dto.getEspecialidade());
    }
}

package com.saude.facil.demo.entity.medicos.dtos;


import com.saude.facil.demo.entity.medicos.Medico;
import com.saude.facil.demo.entity.medicos.enums.Especialidade;

public record MedicoDTO(
         String nome,
         String cpf,
         String crm,
         String email,
         String telefone,
         String dataNascimento,
         Especialidade especialidade
) {

    public MedicoDTO(Medico medico) {
        this(medico.getNome(), medico.getCpf(), medico.getCrm(), medico.getEmail(), medico.getTelefone(), medico.getDataNascimento(), medico.getEspecialidade());
    }
}

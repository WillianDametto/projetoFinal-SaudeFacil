package com.saude.facil.demo.entity.paciente.dto;

import com.saude.facil.demo.entity.enums.UserRole;
import com.saude.facil.demo.entity.paciente.Paciente;
import com.saude.facil.demo.service.dto.DadosAutenticacao;

public record DadosAutenticacaoPaciente(
        String email,
        String senha,
        Paciente paciente,
        UserRole role

) {

}

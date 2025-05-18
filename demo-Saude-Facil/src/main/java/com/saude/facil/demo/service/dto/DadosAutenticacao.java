package com.saude.facil.demo.service.dto;

import com.saude.facil.demo.entity.enums.UserRole;
import com.saude.facil.demo.entity.medicos.Medico;

public record DadosAutenticacao(

        String email,
        String senha,
        Medico medico,
        UserRole role
) {
}

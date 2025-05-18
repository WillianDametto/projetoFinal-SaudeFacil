package com.saude.facil.demo.service;

import com.saude.facil.demo.entity.endereco.Endereco;
import com.saude.facil.demo.entity.medicos.Medico;
import com.saude.facil.demo.entity.medicos.dtos.MedicoAtualizarDTO;
import com.saude.facil.demo.entity.medicos.dtos.MedicoDTO;
//import com.saude.facil.demo.provider.CepApi;
import com.saude.facil.demo.entity.medicos.dtos.MedicoResponseDTO;
import com.saude.facil.demo.entity.paciente.dto.PacienteResponseDTO;
import com.saude.facil.demo.repository.MedicoRepository;
import com.saude.facil.demo.service.dto.UsuarioResponseDTO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class MedicoService {

    @Autowired
    private MedicoRepository repository;

//    @Autowired
//    private CepApi cepApi;

    public Medico cadastrarMedico(MedicoDTO request){
//        Endereco endereco = new Endereco(cepApi.apiCep(request.cep()));
        Medico medico = new Medico(request);
//        medico.setEndereco(endereco);
        return repository.save(medico);
    }

    public List<MedicoResponseDTO> listarMedicos(){
        return repository.findAll()
                .stream()
                .map(MedicoResponseDTO::new)
                .collect(Collectors.toList());
    }

    public Optional<MedicoResponseDTO> listarMedico(Long id){
        return repository.findById(id)
                .map(MedicoResponseDTO::new);
    }

    public void deletarMedico(Long id){
        Medico medico = repository.findById(id).orElseThrow();
        repository.delete(medico);
    }

    public Medico atualizarMedico(MedicoAtualizarDTO dto, Long id){
        Medico medico = repository.findById(id).orElseThrow();
        medico.atualizarMedico(dto);
        this.repository.save(medico);
        return new Medico();
    }
}

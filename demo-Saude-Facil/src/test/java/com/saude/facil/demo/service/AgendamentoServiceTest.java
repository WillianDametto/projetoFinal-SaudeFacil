package com.saude.facil.demo.service;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.*;


import com.saude.facil.demo.entity.medicos.Agendamento;
import com.saude.facil.demo.entity.medicos.HorarioDisponivel;
import com.saude.facil.demo.entity.medicos.enums.StatusAgendamento;
import com.saude.facil.demo.entity.medicos.enums.TipoConsulta;
import com.saude.facil.demo.repository.AgendamentoRepository;
import com.saude.facil.demo.repository.HorarioDisponivelRepository;
import jakarta.persistence.EntityNotFoundException;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.*;
import org.springframework.boot.test.context.SpringBootTest;

import java.util.*;

@SpringBootTest
public class AgendamentoServiceTest {

    @Mock
    private AgendamentoRepository agendamentoRepository;

    @Mock
    private HorarioDisponivelRepository horarioDisponivelRepository;

    @InjectMocks
    private AgendamentoService agendamentoService;

    @BeforeEach
    void setUp() {
        MockitoAnnotations.openMocks(this);
    }

    @Test
    void criarAgendamento_ComHorarioDisponivel_DeveCriarAgendamento() {
        Long pacienteId = 1L;
        Long medicoId = 2L;
        String data = "2025-05-20";
        String hora = "10:00";
        TipoConsulta tipo = TipoConsulta.PRESENCIAL;
        String obs = "Consulta de rotina";

        HorarioDisponivel horarioDisponivel = new HorarioDisponivel(1L, medicoId, data, hora, true);
        when(horarioDisponivelRepository.findByMedicoIdAndDataAndHoraAndDisponivelTrue(medicoId, data, hora))
                .thenReturn(Optional.of(horarioDisponivel));

        Agendamento agendamento = new Agendamento(null, pacienteId, medicoId, data + " " + hora, StatusAgendamento.AGENDADO, tipo, obs);
        when(agendamentoRepository.save(any())).thenReturn(agendamento);

        Optional<Agendamento> resultado = agendamentoService.criarAgendamento(pacienteId, medicoId, data, hora, tipo, obs);

        assertTrue(resultado.isPresent());
        assertEquals(StatusAgendamento.AGENDADO, resultado.get().getStatus());
        verify(horarioDisponivelRepository).save(horarioDisponivel);
        verify(agendamentoRepository).save(any());
    }

    @Test
    void criarAgendamento_ComHorarioIndisponivel_DeveLancarExcecao() {
        when(horarioDisponivelRepository.findByMedicoIdAndDataAndHoraAndDisponivelTrue(anyLong(), anyString(), anyString()))
                .thenReturn(Optional.empty());

        assertThrows(EntityNotFoundException.class, () ->
                agendamentoService.criarAgendamento(1L, 2L, "2025-05-20", "10:00", TipoConsulta.PRESENCIAL, "Obs")
        );
    }

    @Test
    void buscarAgendamentoPorId_DeveRetornarAgendamento() {
        Agendamento agendamento = new Agendamento(1L, 1L, 2L, "2025-05-20 10:00", StatusAgendamento.AGENDADO, TipoConsulta.PRESENCIAL, "Obs");
        when(agendamentoRepository.findById(1L)).thenReturn(Optional.of(agendamento));

        Optional<Agendamento> resultado = agendamentoService.buscarAgendamentoPorId(1L);

        assertTrue(resultado.isPresent());
        assertEquals(1L, resultado.get().getId());
    }

    @Test
    void cancelarAgendamento_DeveCancelarEAtualizarHorario() {
        Agendamento agendamento = new Agendamento(1L, 1L, 2L, "2025-05-20 10:00", StatusAgendamento.AGENDADO, TipoConsulta.PRESENCIAL, "Obs");
        when(agendamentoRepository.findById(1L)).thenReturn(Optional.of(agendamento));

        HorarioDisponivel horario = new HorarioDisponivel(1L, 2L, "2025-05-20", "10:00", false);
        when(horarioDisponivelRepository.findByMedicoIdAndDataAndHora(2L, "2025-05-20", "10:00"))
                .thenReturn(Optional.of(horario));

        boolean resultado = agendamentoService.cancelarAgendamento(1L);

        assertTrue(resultado);
        verify(agendamentoRepository).save(agendamento);
        verify(horarioDisponivelRepository).save(horario);
        assertEquals(StatusAgendamento.CANCELADO, agendamento.getStatus());
        assertTrue(horario.getDisponivel());
    }

    @Test
    void listarAgendamentos_DeveRetornarTodos() {
        List<Agendamento> lista = Arrays.asList(
                new Agendamento(1L, 1L, 2L, "2025-05-20 10:00", StatusAgendamento.AGENDADO, TipoConsulta.PRESENCIAL, "Obs")
        );
        when(agendamentoRepository.findAll()).thenReturn(lista);

        Iterable<Agendamento> resultado = agendamentoService.listarAgendamentos();

        assertNotNull(resultado);
        assertEquals(1, ((List<Agendamento>) resultado).size());
    }
}

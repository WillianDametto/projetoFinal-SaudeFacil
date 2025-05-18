package com.saude.facil.demo.entity.usuario;

import com.saude.facil.demo.entity.enums.UserRole;
import com.saude.facil.demo.entity.medicos.Medico;
import com.saude.facil.demo.entity.paciente.Paciente;
import com.saude.facil.demo.entity.paciente.dto.DadosAutenticacaoPaciente;
import com.saude.facil.demo.service.dto.DadosAutenticacao;
import jakarta.persistence.*;
import lombok.*;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import java.util.Collection;
import java.util.List;

@Entity
@Table(name = "usuarios")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@EqualsAndHashCode(of = "id")
public class Usuario implements UserDetails {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Column(unique = true)
    private String email;
    private String senha;
    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "medico_id")
    private Medico medico;
    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "paciente_id")
    private Paciente paciente;
    @Enumerated(EnumType.STRING)
    private UserRole role;

    public Usuario(DadosAutenticacao dadosAutenticacao) {
        this.email = dadosAutenticacao.email();
        this.senha = dadosAutenticacao.senha();
        this.medico = dadosAutenticacao.medico();
        this.role = UserRole.ADMIN;
    }
    public Usuario(DadosAutenticacaoPaciente dto){
        this.email = dto.email();
        this.senha = dto.senha();
        this.role = UserRole.COMUM;
    }

    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        if (this.role == UserRole.COMUM){
            return List.of(new SimpleGrantedAuthority("ROLE_COMUM"));
        }
        return List.of(new SimpleGrantedAuthority("ROLE_ADMIN"), new SimpleGrantedAuthority("ROLE_COMUM"));
    }

    @Override
    public String getPassword() {
        return senha;
    }

    @Override
    public String getUsername() {
        return email;
    }

    @Override
    public boolean isAccountNonExpired() {
        return UserDetails.super.isAccountNonExpired();
    }

    @Override
    public boolean isAccountNonLocked() {
        return UserDetails.super.isAccountNonLocked();
    }

    @Override
    public boolean isCredentialsNonExpired() {
        return UserDetails.super.isCredentialsNonExpired();
    }

    @Override
    public boolean isEnabled() {
        return UserDetails.super.isEnabled();
    }
}

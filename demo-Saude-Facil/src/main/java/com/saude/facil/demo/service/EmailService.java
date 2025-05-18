package com.saude.facil.demo.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.stereotype.Service;

import jakarta.mail.MessagingException;
import jakarta.mail.internet.MimeMessage;

@Service
public class EmailService {

    @Autowired
    private JavaMailSender javaMailSender;

    public void enviarEmailComNovaSenha(String toEmail, String novaSenha) throws MessagingException {
        // Criação do e-mail
        MimeMessage mimeMessage = javaMailSender.createMimeMessage();
        MimeMessageHelper helper = new MimeMessageHelper(mimeMessage, true);

        // Destinatário e assunto
        helper.setTo(toEmail);
        helper.setSubject("Sua Nova Senha");

        // Corpo do e-mail
        String body = "<p>Olá,</p>"
                + "<p>Sua nova senha é: <strong>" + novaSenha + "</strong></p>"
                + "<p>Por favor, altere sua senha ao fazer login.</p>";

        helper.setText(body, true); // true indica que o corpo do e-mail é em HTML

        // Enviar o e-mail
        javaMailSender.send(mimeMessage);
    }
}

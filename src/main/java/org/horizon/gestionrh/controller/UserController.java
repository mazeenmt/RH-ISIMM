package org.horizon.gestionrh.controller;
import org.horizon.gestionrh.service.UserService;
import org.horizon.gestionrh.entity.User;
import org.horizon.gestionrh.enums.Role;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.springframework.http.ResponseEntity;
import org.horizon.gestionrh.service.EmailService;

import java.io.IOException;
import java.util.Map;
import java.util.List;

@CrossOrigin
@RestController
@RequestMapping("/users")
public class UserController {
    @Autowired
    private UserService userService;

//    @PostMapping("/create")
//    public User createUser(@RequestBody User data){
//        System.out.println(data);
//        return userService.createUser(data.getUsername, data.getEmail, data.getPassword, data.getRole);
//    }


    EmailService emailService = new EmailService();
    @CrossOrigin
    @PostMapping("email/send")
    public String sendEmail(@RequestParam String to, @RequestParam String subject, @RequestParam String body) {
        try {
            emailService.sendEmail(to, subject, body);
            return "Email sent successfully!";
        } catch (IOException e) {
            return "Error sending email: " + e.getMessage();
        }
    }

    @PostMapping("/create")
    public ResponseEntity<String> createUser(@RequestBody Map<String, Object> requestData) {
        System.out.println("Received User Data: " + requestData);
        String username = (String) requestData.get("username");
        String password = (String) requestData.get("password");
        Role role = Role.valueOf((String)requestData.get("role"));
        String email = (String) requestData.get("email");
        User user = userService.createUser(username, email, password, role);
        String subject = "Confirmation de votre adresse e-mail – ISIMM RH-Management";
        String token = userService.saveTokenToUser(email);
        String confirmationLink = "http://localhost:8080/auth/confirm-email?token=" + token;
        String body =
                "<p>Bonjour " + (String) requestData.get("firstName") + ",</p><br>" +
                "<p>Merci de vous être inscrit sur <strong>ISIMM RH-Management</strong>.</p><br>" +
                "<p>Veuillez confirmer votre adresse e-mail en cliquant sur le bouton ci-dessous :</p>" +
                "<p style=\"text-align: center;\">" +
                    "<a href=\"" + confirmationLink + "\" " +
                    "style=\"background-color: #007bff; color: white; padding: 12px 24px; text-decoration: none; border-radius: 5px;\">" +
                        "Confirmer mon e-mail" +
                    "</a>" +
                "</p>" +
                "<p>Si vous n'êtes pas à l'origine de cette inscription, veuillez ignorer cet e-mail. Ce lien expirera dans 24 heures.</p>" +
                "<p>Cordialement,</p>" +
                "<p><strong>ISIMM</strong></p>";
        try {
            emailService.sendEmail(email, subject, body);
            System.out.println("Email sent successfully!");
        } catch (IOException e) {
            System.out.println("Error sending email: " + e.getMessage());
        }
        return ResponseEntity.ok("User data received successfully!");
    }


    @GetMapping("/list")
    public List<User> getAllUsers() {
        return userService.getAllUsers();
    }

    @GetMapping("/{username}")
    public User getUser(@PathVariable String username) {
        return userService.getUserByUsername(username);
    }
}

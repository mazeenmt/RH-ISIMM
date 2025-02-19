package org.horizon.gestionrh.controller;
import org.horizon.gestionrh.service.UserService;
import org.springframework.web.bind.annotation.*;
import org.springframework.http.ResponseEntity;
import org.springframework.http.HttpStatus;
import org.springframework.beans.factory.annotation.Autowired;


@RestController
@RequestMapping("/auth")
public class EmailConfirmationController {

    @Autowired
    private UserService userService;

    @GetMapping("/confirm-email")
    public ResponseEntity<String> confirmEmail(@RequestParam("token") String token) {
        boolean isConfirmed = userService.verifyEmail(token);

        if (isConfirmed) {
            return ResponseEntity.ok("Votre e-mail a été confirmé avec succès !");
        } else {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Lien invalide ou expiré.");
        }
    }
}


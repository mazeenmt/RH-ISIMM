package org.horizon.gestionrh.controller;
import org.horizon.gestionrh.service.UserService;
import org.horizon.gestionrh.entity.User;
import org.horizon.gestionrh.enums.Role;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.springframework.http.ResponseEntity;
import java.util.Map;


import java.util.List;

@CrossOrigin
@RestController
@RequestMapping("/users")
public class UserController {
    @Autowired
    private UserService userService;

    /*@PostMapping("/create")
    public User createUser(@RequestBody User data){
        return userService.createUser(data.getUsername, data.getEmail, data.getPassword, data.getRole);
    }*/
    @PostMapping("/create")
    public ResponseEntity<String> createUser(@RequestBody Map<String, Object> requestData) {
        // Print the entire request body as received
        System.out.println("Received User Data: " + requestData);

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

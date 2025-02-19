package org.horizon.gestionrh.service;
import org.horizon.gestionrh.entity.User;
import org.horizon.gestionrh.enums.Role;
import org.horizon.gestionrh.token.TokenGenerator;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.horizon.gestionrh.repository.UserRepository;
import org.horizon.gestionrh.token.TokenGenerator;
import java.util.List;
import java.util.Optional;

@Service
public class UserService {
    @Autowired
    private UserRepository userRepository;

    public User createUser(String username, String email, String password, Role role){
        User user = new User(username, email, password, role, false, null);
        return userRepository.save(user);
    }

    public boolean verifyEmail(String token) {
        Optional<User> userOptional = userRepository.findByToken(token);

        if (userOptional.isPresent()) {
            User user = userOptional.get();

            if (!user.isVerified()) {
                user.setVerified(true);
                user.setToken(null); // Remove token after verification
                userRepository.save(user);
                return true;
            }
        }

        return false; // Invalid or expired token
    }

    public String saveTokenToUser(String email) {
        Optional<User> userOptional = userRepository.findByEmail(email);

        if (userOptional.isPresent()) {
            User user = userOptional.get();
            String token = TokenGenerator.generateToken(); // Generate unique token
            user.setToken(token);
            userRepository.save(user); // Save token to user

            return token; // Return the token for email confirmation
        }

        throw new RuntimeException("User not found with email: " + email);
    }


    public List<User> getAllUsers() {
        return userRepository.findAll();
    }

    public User getUserByUsername(String username) {
        return userRepository.findByUsername(username);
    }
}

package org.horizon.gestionrh.service;
import org.horizon.gestionrh.entity.User;
import org.horizon.gestionrh.enums.Role;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.horizon.gestionrh.repository.UserRepository;
import java.util.List;

@Service
public class UserService {
    @Autowired
    private UserRepository userRepository;

    public User createUser(String username, String email, String password, Role role){
        User user = new User(username, email, password, role);
        return userRepository.save(user);
    }

    public List<User> getAllUsers() {
        return userRepository.findAll();
    }

    public User getUserByUsername(String username) {
        return userRepository.findByUsername(username);
    }
}

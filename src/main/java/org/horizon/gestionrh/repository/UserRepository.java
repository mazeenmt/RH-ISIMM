package org.horizon.gestionrh.repository;
import org.horizon.gestionrh.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import java.util.Optional;


public interface UserRepository extends JpaRepository<User, Long>{
    User findByUsername(String username);
    Optional<User> findByToken(String token);
    Optional<User> findByEmail(String email);
}

package org.horizon.gestionrh.repository;
import org.horizon.gestionrh.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

public interface UserRepository extends JpaRepository<User, Long>{
    User findByUsername(String username);
}

package org.horizon.gestionrh.entity;
import org.horizon.gestionrh.enums.Role;
import jakarta.persistence.*;
import java.time.LocalDateTime;
import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;

@Entity
@EntityListeners(AuditingEntityListener.class)
@Table(name= "users")
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @Column(name = "username", nullable=false, unique= true)
    private String username;

    @Column(name = "password", nullable=false)
    private String password;

    @Column(name = "email", nullable=false, unique= true)
    private String email;

    @Column(name = "role", nullable=false)
    private Role role; //Enum

    @Column(nullable=false, updatable=false)
    @CreatedDate
    private LocalDateTime createdAt;

    @Column(name = "verified", nullable=false)
    private boolean verified;

    @Column(name = "token")
    private String token;


    public User(){}

    public User(String username, String email, String password, Role role, boolean verified, String token) {
        this.username = username;
        this.email = email;
        this.password = password;
        this.role = role;
        this.verified = verified;
        this.token = null;
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public Role getRole() {
        return role;
    }

    public void setRole(Role role) {
        this.role = role;
    }

    public LocalDateTime getCreatedAt() {
        return createdAt;
    }

    public boolean isVerified() {
        return verified;
    }

    public void setVerified(boolean verified) {
        this.verified = verified;
    }

    public String getToken() {
        return token;
    }

    public void setToken(String token) {
        this.token = token;
    }
}

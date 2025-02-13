package org.horizon.gestionrh;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.jpa.repository.config.EnableJpaAuditing;

@SpringBootApplication
@EnableJpaAuditing
public class GestionRhApplication {

	public static void main(String[] args) {
		SpringApplication.run(GestionRhApplication.class, args);
	}

}

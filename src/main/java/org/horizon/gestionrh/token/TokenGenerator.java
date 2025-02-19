package org.horizon.gestionrh.token;

import java.util.UUID;

public class TokenGenerator {
    public static String generateToken() {
        return UUID.randomUUID().toString(); // Generates a unique token
    }
}


package com.virtual.calzado.usuarios;

import org.springframework.data.jpa.repository.JpaRepository;

public interface UsuarioRepository extends JpaRepository<Usuario, Long> {
    // Puedes definir consultas personalizadas aquí si es necesario
}

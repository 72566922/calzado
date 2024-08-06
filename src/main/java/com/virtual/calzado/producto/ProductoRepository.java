package com.virtual.calzado.producto;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.List;

public interface ProductoRepository extends JpaRepository<Producto, Long> {

    List<Producto> findByMarcaAndGenero(String marca, String genero);
    List<Producto> findByMarcaAndCodigo(String marca, String codigo);
    List<Producto> findByMarca(String marca);
}

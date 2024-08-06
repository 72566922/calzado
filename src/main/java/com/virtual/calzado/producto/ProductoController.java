package com.virtual.calzado.producto;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import jakarta.validation.Valid;

import java.util.List;

@RestController
@RequestMapping("/api/productos")
public class ProductoController {

    @Autowired
    private ProductoService productoService;

    // Obtener todos los productos
    @GetMapping
    public List<Producto> getAllProductos() {
        return productoService.getAllProductos();
    }

    // Obtener un producto por ID
    @GetMapping("/{id}")
    public ResponseEntity<Producto> getProductoById(@PathVariable Long id) {
        return productoService.getProductoById(id)
                .map(producto -> ResponseEntity.ok().body(producto))
                .orElse(ResponseEntity.notFound().build());
    }

    // Obtener productos por marca
    @GetMapping("/marca/{marca}")
    public List<Producto> getProductosByMarca(@PathVariable String marca) {
        return productoService.getProductosByMarca(marca);
    }

    // Obtener productos por marca y codigo
    @GetMapping("/marca/{marca}/codigo/{codigo}")
    public List<Producto> getProductosByMarcaYCodigo(@PathVariable String marca, @PathVariable String codigo) {
        return productoService.getProductosByMarcaYCodigo(marca, codigo);
    }

    // Obtener productos por marca y género
    @GetMapping("/marca/{marca}/genero/{genero}")
    public List<Producto> getProductosByMarcaYGenero(@PathVariable String marca, @PathVariable String genero) {
        return productoService.getProductosByMarcaYGenero(marca, genero);
    }

    // Crear un nuevo producto
    @PostMapping
    public ResponseEntity<Producto> createProducto(@Valid @RequestBody Producto producto) {
        Producto nuevoProducto = productoService.createProducto(producto);
        return ResponseEntity.ok(nuevoProducto);
    }

    // Actualizar un producto existente
    @PutMapping("/{id}")
    public ResponseEntity<Producto> updateProducto(@PathVariable Long id, @Valid @RequestBody Producto producto) {
        return productoService.updateProducto(id, producto)
                .map(updatedProducto -> ResponseEntity.ok().body(updatedProducto))
                .orElse(ResponseEntity.notFound().build());
    }

    // Eliminar un producto por ID
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteProducto(@PathVariable Long id) {
        if (productoService.deleteProducto(id)) {
            return ResponseEntity.noContent().build();
        } else {
            return ResponseEntity.notFound().build();
        }
    }
}

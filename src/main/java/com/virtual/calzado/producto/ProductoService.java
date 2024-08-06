package com.virtual.calzado.producto;
import org.springframework.stereotype.Service;
import org.springframework.beans.factory.annotation.Autowired;
import java.util.List;
import java.util.Optional;

@Service
public class ProductoService {

    @Autowired
    private ProductoRepository productoRepository;

    public List<Producto> getAllProductos() {
        return productoRepository.findAll();
    }

    public Optional<Producto> getProductoById(Long id) {
        return productoRepository.findById(id);
    }

    public List<Producto> getProductosByMarca(String marca) {
        return productoRepository.findByMarca(marca);
    }

    public List<Producto> getProductosByMarcaYCodigo(String marca, String codigo) {
        return productoRepository.findByMarcaAndCodigo(marca, codigo);
    }

    public List<Producto> getProductosByMarcaYGenero(String marca, String genero) {
        return productoRepository.findByMarcaAndGenero(marca, genero);
    }

    public Producto createProducto(Producto producto) {
        return productoRepository.save(producto);
    }

    public Optional<Producto> updateProducto(Long id, Producto producto) {
        if (productoRepository.existsById(id)) {
            producto.setId(id);
            return Optional.of(productoRepository.save(producto));
        }
        return Optional.empty();
    }

    public boolean deleteProducto(Long id) {
        if (productoRepository.existsById(id)) {
            productoRepository.deleteById(id);
            return true;
        }
        return false;
    }
}

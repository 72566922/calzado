// displayProducts.js
function displayProducts(products, resultContainerId) {
    const resultContainer = document.getElementById(resultContainerId);
    resultContainer.innerHTML = ''; // Limpiar resultados anteriores

    if (products.length > 0) {
        products.forEach(product => {
            const productElement = document.createElement('div');
            productElement.classList.add('product');
            productElement.innerHTML = `
                <h4>${product.codigo}</h4>
                <p>Marca: ${product.marca}</p>
                <p>Distribuidor: ${product.distribuidor}</p>
                <p>Género: ${product.genero}</p>
                <p>Unidades: ${product.unidades}</p>
                <p>Precio: $${product.precio}</p>
                <div class="product-image-container" id="image-${product.codigo}">
                    <p>Imagen:</p>
                    <img src="http://localhost:8080/images/${product.codigo}.png" alt="Imagen de zapatilla">
                </div>
            `;
            resultContainer.appendChild(productElement);
        });
    } else {
        resultContainer.innerHTML = '<p>No se encontraron productos.</p>';
    }
}

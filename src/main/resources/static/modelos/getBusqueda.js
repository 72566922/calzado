// getBusqueda.js
document.addEventListener('DOMContentLoaded', () => {
    const searchButtons = {
        searchNike: 'searchFormNike',
        searchPuma: 'searchFormPuma',
        searchReebok: 'searchFormReebok',
        searchJordan: 'searchFormJordan',
        searchAdidas: 'searchFormAdidas'
    };

    // Función para realizar la búsqueda
    function searchProducts(formId) {
        const form = document.getElementById(formId);
        if (!form) {
            console.error(`Formulario con ID ${formId} no encontrado.`);
            return;
        }

        // Obtener el género seleccionado
        const genderInputs = form.querySelectorAll('input[name="gender"]:checked');
        const gender = genderInputs.length > 0 ? genderInputs[0].value : 'todo';

        // Obtener el código del input correspondiente
        const codeInput = document.getElementById(`code${formId.replace('searchForm', '').charAt(0).toUpperCase() + formId.replace('searchForm', '').slice(1)}`);
        const code = codeInput ? codeInput.value : '';

        // Si se ingresa un código, desmarcar "todo"
        if (code) {
            const todoInput = form.querySelector('input[name="gender"][value="todo"]');
            if (todoInput) {    
                todoInput.checked = false;
            }
        }

        // Construir la URL de búsqueda
        let url;
        if (code) {
            url = `http://localhost:8080/api/productos/marca/${formId.replace('searchForm', '').toLowerCase()}/codigo/${code}`;
        } else if (gender === 'todo') {
            url = `http://localhost:8080/api/productos/marca/${formId.replace('searchForm', '').toLowerCase()}`;
        } else {
            url = `http://localhost:8080/api/productos/marca/${formId.replace('searchForm', '').toLowerCase()}/genero/${gender}`;
        }

        console.log(`Realizando búsqueda con URL: ${url}`);

        fetch(url, {
            method: 'GET'
        })
        .then(response => response.json())
        .then(data => {
            console.log('Resultados de la búsqueda:', data);
            displayProducts(data, `results${formId.replace('searchForm', '').charAt(0).toUpperCase() + formId.replace('searchForm', '').slice(1)}`);

            // Mostrar imagen de zapatilla basada en el código
            if (code) {
                const imageUrl = `http://localhost:8080/images/${code}.png`;
                displayImage(imageUrl);
            }
        })
        .catch(error => {
            console.error('Error en la búsqueda:', error);
        });
    }

    // Función para mostrar la imagen
    function displayImage(imageUrl) {
        const imageContainer = document.getElementById('imageContainer');
        imageContainer.innerHTML = ''; // Limpiar contenido anterior
        const imgElement = document.createElement('img');
        imgElement.src = imageUrl;
        imgElement.alt = 'Imagen de zapatilla';
        imgElement.onerror = () => {
            imageContainer.innerHTML = 'No se encontró la imagen para el código proporcionado.';
        };
        imageContainer.appendChild(imgElement);
    }

    // Limpiar inputs de radio cuando se hace clic en el campo de código
    function setupCodeInputClearRadio(formId) {
        const form = document.getElementById(formId);
        if (!form) return;

        const codeInput = document.getElementById(`code${formId.replace('searchForm', '').charAt(0).toUpperCase() + formId.replace('searchForm', '').slice(1)}`);
        if (codeInput) {
            codeInput.addEventListener('focus', () => {
                // Limpiar todos los inputs de radio
                const radioInputs = form.querySelectorAll('input[name="gender"]');
                radioInputs.forEach(input => {
                    input.checked = false;
                });
            });
        }
    }

    // Limpiar campo de texto de código cuando se selecciona cualquier input de radio
    function setupRadioInputClearCode(formId) {
        const form = document.getElementById(formId);
        if (!form) return;

        const radioInputs = form.querySelectorAll('input[name="gender"]');
        radioInputs.forEach(radio => {
            radio.addEventListener('change', () => {
                // Limpiar campo de texto de código
                const codeInput = document.getElementById(`code${formId.replace('searchForm', '').charAt(0).toUpperCase() + formId.replace('searchForm', '').slice(1)}`);
                if (codeInput) {
                    codeInput.value = '';
                }
            });
        });
    }

    // Añadir event listeners a los botones de búsqueda y configurar los inputs de código y radio
    Object.keys(searchButtons).forEach(btnId => {
        const btn = document.getElementById(btnId);
        if (btn) {
            const formId = searchButtons[btnId];
            btn.addEventListener('click', () => {
                searchProducts(formId);
            });
            setupCodeInputClearRadio(formId);
            setupRadioInputClearCode(formId);
        } else {
            console.error(`Botón con ID ${btnId} no encontrado.`);
        }
    });
});
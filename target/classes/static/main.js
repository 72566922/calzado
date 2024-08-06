
document.getElementById('usuarioForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const formData = {
        nombre: document.getElementById('nombre').value,
        apellido: document.getElementById('apellido').value,
        email: document.getElementById('email').value,
        password: document.getElementById('password').value
    };

    console.log('Datos enviados:', formData);

    fetch('http://localhost:8080/api/users', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
    })
    .then(response => response.json())
    .then(data => {
        console.log('Usuario creado:', data);
    })
    .catch(error => {
        console.error('Error:', error);
    });
});

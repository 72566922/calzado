// events.js
document.addEventListener('DOMContentLoaded', () => {
    const forms = {
        btnNike: 'formNike',
        btnPuma: 'formPuma',
        btnReebok: 'formReebok',
        btnJordan: 'formJordan',
        btnAdidas: 'formAdidas'
    };

    const buttons = Object.keys(forms);

    buttons.forEach(btnId => {
        const btn = document.getElementById(btnId);
        const formId = forms[btnId];

        btn.addEventListener('click', () => {
            buttons.forEach(id => {
                const button = document.getElementById(id);
                const form = document.getElementById(forms[id]);

                if (id === btnId) {
                    form.classList.add('show'); // Mostrar el formulario seleccionado
                    button.classList.add('selected-brand'); // Resaltar el botón de la marca seleccionada
                } else {
                    form.classList.remove('show'); // Ocultar formularios no seleccionados
                    button.classList.remove('selected-brand'); // Quitar el resaltado de otros botones
                }
            });
        }); 
    });
});
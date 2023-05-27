// Obtener elementos del formulario
const formulario = document.getElementById('formulario');

// Agregar evento de envío del formulario
formulario.addEventListener('submit', function(e) {
    e.preventDefault(); // Evitar el envío del formulario

    // Obtener los valores ingresados por el usuario
    const nombreEsposo = document.getElementById('esposo').value;
    const nombreHija = document.getElementById('hija').value;
    const cumpleanos = document.getElementById('cumpleanos').value;

    // Validar los datos ingresados
    if (nombreEsposo === 'Deiby' && nombreHija === 'Gisely' && cumpleanos === '1996-08-23') {
        // Redirigir a la página de dedicatoria si los datos son correctos
        window.location.href = 'dedicatoria.html';
    } else {
        // Mostrar mensaje de error si los datos no coinciden
        const errorMessage = document.createElement('p');
        errorMessage.classList.add('error-message');
        errorMessage.textContent = 'Te equivocaste gordis, escribi bien los datos 😉.';
        formulario.appendChild(errorMessage);
    }
});
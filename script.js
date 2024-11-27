document.getElementById('contact-form').addEventListener('submit', function (event) {
    const nombre = document.getElementById('nombre').value;
    const email = document.getElementById('email').value;

    if (!nombre || !email) {
        alert('Por favor completa todos los campos.');
        event.preventDefault();
    } else if (!email.includes('@')) {
        alert('Por favor ingresa un correo válido.');
        event.preventDefault();
    }
});

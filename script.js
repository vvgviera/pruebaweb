document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Validar usuario y contraseña (esto es solo un ejemplo)
    if (username === 'admin' && password === '1234') {
        window.location.href = 'main.html';
    } else {
        alert('Usuario o contraseña incorrectos.');
    }
});

document.getElementById('logoutButton').addEventListener('click', function() {
    window.location.href = 'index.html'; // Redirige a la página de inicio de sesión
});

// Puedes agregar lógica aquí para la funcionalidad de "Registrar Usuario" en el futuro.


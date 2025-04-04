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


// Array para almacenar usuarios
const users = [];

// Manejar el registro de usuarios
document.addEventListener('DOMContentLoaded', function() {
    const registerForm = document.getElementById('registerForm');
    if (registerForm) {
        registerForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const newUsername = document.getElementById('newUsername').value;
            const newPassword = document.getElementById('newPassword').value;

            // Agregar nuevo usuario al array
            users.push({ username: newUsername, password: newPassword });
            alert('Usuario registrado exitosamente.');

            // Redirigir al login
            window.location.href = 'index.html';
        });
    }
});

// Manejar validación de login
document.getElementById('loginForm')?.addEventListener('submit', function(e) {
    e.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Validar credenciales contra los usuarios registrados
    const userExists = users.some(user => user.username === username && user.password === password);

    if (userExists) {
        window.location.href = 'main.html';
    } else {
        alert('Usuario o contraseña incorrectos.');
    }
});

// Funcionalidad del botón de Log Out
document.getElementById('logoutButton').addEventListener('click', function() {
    window.location.href = 'index.html'; // Redirige a la página de inicio de sesión
});



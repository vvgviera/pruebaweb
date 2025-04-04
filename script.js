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

// Funcionalidad del botón de Log Out
document.getElementById('logoutButton').addEventListener('click', function() {
    window.location.href = 'index.html'; // Redirige a la página de inicio de sesión
});

// Descargar un archivo JSON con usuarios
function downloadUsers(users) {
    const blob = new Blob([JSON.stringify(users, null, 2)], { type: 'application/json' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = 'usuarios.json';
    link.click();
}

// Leer un archivo JSON de usuarios cargado por el usuario
function uploadUsers(file, callback) {
    const reader = new FileReader();
    reader.onload = function(event) {
        try {
            const data = JSON.parse(event.target.result);
            callback(data);
        } catch (error) {
            alert('Error al leer el archivo.');
        }
    };
    reader.readAsText(file);
}

// Array para almacenar usuarios
let users = [];

// Manejar el registro de usuarios
document.addEventListener('DOMContentLoaded', function() {
    const registerForm = document.getElementById('registerForm');
    const fileInput = document.getElementById('fileInput');

    if (registerForm) {
        registerForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const newUsername = document.getElementById('newUsername').value;
            const newPassword = document.getElementById('newPassword').value;

            // Agregar nuevo usuario al array
            users.push({ username: newUsername, password: newPassword });
            alert('Usuario registrado exitosamente.');

            // Descargar el archivo con usuarios actualizados
            downloadUsers(users);

            // Redirigir al login
            window.location.href = 'index.html';
        });
    }

    if (fileInput) {
        fileInput.addEventListener('change', function(e) {
            const file = e.target.files[0];
            uploadUsers(file, function(data) {
                users = data;
                alert('Usuarios cargados correctamente.');
            });
        });
    }
});

// Manejar validación de login
document.getElementById('loginForm')?.addEventListener('submit', function(e) {
    e.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Validar credenciales contra los usuarios cargados
    const userExists = users.some(user => user.username === username && user.password === password);

    if (userExists) {
        window.location.href = 'main.html';
    } else {
        alert('Usuario o contraseña incorrectos.');
    }
});




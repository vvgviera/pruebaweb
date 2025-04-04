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

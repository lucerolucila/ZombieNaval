
document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const username = document.getElementById('username').value.trim();
    
    if (username) {
        // agregar la lógica inicio de sesión
        alert(`¡Bienvenido, ${username}! El apocalipsis zombi naval comienza ahora.`);
        // Redirección o siguiente acción aca
    } else {
        alert('Por favor, introduce un nombre de usuario para iniciar el apocalipsis.');
    }
});

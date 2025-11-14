// Generar partículas
function crearParticulas(contenedorId, cantidad) {
    const contenedor = document.getElementById(contenedorId);
    
    for (let i = 0; i < cantidad; i++) {
        const particula = document.createElement('div');
        particula.classList.add('particula');
        
        // Tamaño aleatorio
        const tamaño = Math.random() * 5 + 1;
        particula.style.width = `${tamaño}px`;
        particula.style.height = `${tamaño}px`;
        
        // Posición aleatoria
        particula.style.left = `${Math.random() * 100}%`;
        particula.style.top = `${Math.random() * 100}%`;
        
        // Animación
        const duracion = Math.random() * 10 + 5;
        particula.style.animation = `flotar ${duracion}s infinite linear`;
        
        contenedor.appendChild(particula);
    }
}

// Generar tablero de demostración
function generarTableroDemo() {
    const tablero = document.getElementById('tablero-demo');
    
    // Limpiar tablero
    tablero.innerHTML = '';
    
    // Crear 100 celdas (10x10)
    for (let i = 0; i < 100; i++) {
        const celda = document.createElement('div');
        celda.classList.add('celda');
        
        // Algunas celdas tendrán zombies (aleatorio)
        if (Math.random() < 0.15) {
            celda.classList.add('zombie');
        }
        
        tablero.appendChild(celda);
    }
}

// Efecto de scroll suave para los enlaces
function inicializarScrollSuave() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Animación para cambiar aleatoriamente las celdas con zombies
function iniciarAnimacionZombies() {
    setInterval(() => {
        const celdas = document.querySelectorAll('.celda');
        celdas.forEach(celda => {
            if (Math.random() < 0.02) {
                celda.classList.toggle('zombie');
            }
        });
    }, 1000);
}

// Inicializar cuando se carga la página
window.addEventListener('DOMContentLoaded', () => {
    crearParticulas('particulas-intro', 50);
    generarTableroDemo();
    inicializarScrollSuave();
    iniciarAnimacionZombies();
});

document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const username = document.getElementById('username').value.trim();
    
    
});
document.addEventListener('DOMContentLoaded', function() {
    const registerForm = document.getElementById('register-form');
    const loginForm = document.getElementById('login-form');
    const showLoginLink = document.getElementById('show-login');
    const showRegisterLink = document.getElementById('show-register');
    const registerBtn = document.getElementById('register-btn');
    const loginBtn = document.getElementById('login-btn');
    const messageDiv = document.getElementById('message');
    const formTitle = document.getElementById('form-title');

    // Alternar entre formularios de registro e inicio de sesión
    showLoginLink.addEventListener('click', function(e) {
        e.preventDefault();
        registerForm.style.display = 'none';
        loginForm.style.display = 'block';
        formTitle.textContent = 'INICIAR SESIÓN';
    });

    showRegisterLink.addEventListener('click', function(e) {
        e.preventDefault();
        loginForm.style.display = 'none';
        registerForm.style.display = 'block';
        formTitle.textContent = 'REGISTRO DE JUGADORES';
    });

    // Manejar el registro de jugadores
    registerBtn.addEventListener('click', function() {
        const player1Username = document.getElementById('player1-username').value.trim();
       
        const player2Username = document.getElementById('player2-username').value.trim();
       

        // Validaciones básicas
        if (!player1Username ||  !player2Username ) {
            showMessage('Todos los campos son obligatorios', 'error');
            return;
        }

        if (player1Username === player2Username) {
            showMessage('Los nombres de usuario deben ser diferentes', 'error');
            return;
        }

        // Guardar en localStorage
        localStorage.setItem('player1-username', player1Username);
       
        localStorage.setItem('player2-username', player2Username);
      

        showMessage('Jugadores registrados exitosamente. Ahora puedes iniciar sesión.', 'success');
        
        // Cambiar al formulario de inicio de sesión después de 2 segundos
        setTimeout(() => {
            loginForm.style.display = 'block';
            registerForm.style.display = 'none';
            formTitle.textContent = 'INICIAR SESIÓN';
            
            // Rellenar automáticamente los campos de inicio de sesión
            document.getElementById('login-player1-username').value = player1Username;
            document.getElementById('login-player2-username').value = player2Username;
        }, 2000);
    });

    // Manejar el inicio de sesión
    loginBtn.addEventListener('click', function() {
        const player1Username = document.getElementById('login-player1-username').value.trim();
       
        const player2Username = document.getElementById('login-player2-username').value.trim();
       
        // Obtener datos guardados
        const storedPlayer1Username = localStorage.getItem('player1-username');
        
        const storedPlayer2Username = localStorage.getItem('player2-username');
      

        // Validar credenciales
        if (!storedPlayer1Username || !storedPlayer2Username) {
            showMessage('No hay jugadores registrados. Regístrate primero.', 'error');
            return;
        }

        if (player1Username !== storedPlayer1Username || player1Password !== storedPlayer1Password ||
            player2Username !== storedPlayer2Username || player2Password !== storedPlayer2Password) {
            showMessage('Credenciales incorrectas. Verifica los datos.', 'error');
            return;
        }

        showMessage('Inicio de sesión exitoso. Redirigiendo al juego...', 'success');
        
        // Redirigir al juego después de 2 segundos
        setTimeout(() => {
            // Aquí puedes redirigir a tu página del juego
            // window.location.href = 'juego.html';
            alert('Redirigiendo al juego...');
        }, 2000);
    });

    // Función para mostrar mensajes
    function showMessage(text, type) {
        messageDiv.textContent = text;
        messageDiv.className = `message ${type}`;
        messageDiv.style.display = 'block';
        
        // Ocultar mensaje después de 5 segundos
        setTimeout(() => {
            messageDiv.style.display = 'none';
        }, 5000);
    }
});
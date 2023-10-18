let registeredUsers = [];

function registerUser() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    if (username && password) {
        // Guarda los usuarios registrados en un array (esto debe ser mejorado con una base de datos)
        registeredUsers.push({ username, password });

        // Limpia los campos de registro
        document.getElementById("username").value = "";
        document.getElementById("password").value = "";

        // Muestra el formulario de inicio de sesión
        document.getElementById("register-form").style.display = "none";
        document.getElementById("login-form").style.display = "block";
    } else {
        alert("Por favor, complete todos los campos de registro.");
    }
}

function loginUser() {
    const loginUsername = document.getElementById("login-username").value;
    const loginPassword = document.getElementById("login-password").value;
    
    // Verifica si el usuario y contraseña coinciden con los registrados
    const user = registeredUsers.find(u => u.username === loginUsername && u.password === loginPassword);

    if (user) {
        // Muestra el control de gastos
        document.getElementById("login-form").style.display = "none";
        document.getElementById("expenses").style.display = "block";
    } else {
        alert("Credenciales incorrectas. Por favor, inténtalo de nuevo.");
    }
}
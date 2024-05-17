const nombre = document.getElementById('nombre');

function login() {
    localStorage.setItem('name', nombre.value);
};
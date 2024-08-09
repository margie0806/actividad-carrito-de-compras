let contadorCarrito = 0;

window.addEventListener('keydown', (e) => {
    if (e.key === '+') {
        agregarAlCarrito();
    } else if (e.key === '-') {
        restarDelCarrito();
    }
});

function agregarAlCarrito() {
    contadorCarrito++;
    actualizarCarrito();
}

function restarDelCarrito() {
    if (contadorCarrito > 0) {
        contadorCarrito--;
    }
    actualizarCarrito();
}

function actualizarCarrito() {
    document.getElementById('contadorCarrito').innerText = contadorCarrito;
}

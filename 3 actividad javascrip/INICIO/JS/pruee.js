window.addEventListener('keydown',(e)=>{
    if(e.key=='+'){
        agregarAlCarrito()

    }else if(e.key=='-'){


        function restarDelCarrito() {
    
            }


let contadorCarrito = 0;

function agregarAlCarrito() {
    contadorCarrito++;
    document.getElementById('contadorCarrito').innerText = contadorCarrito;
}


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
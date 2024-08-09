function llenarAvionPequeno() {
    let capacidadPequeño = 20;
    let pasajerosPequeño = 0;
    let resultado = "Cargando Avión Pequeño:<br>";

    while (pasajerosPequeño < capacidadPequeño) {
        let puesto=parseInt(prompt("ingresar los puestos a comprart"))
        pasajerosPequeño+=puesto;
        resultado += "Pasajero " + pasajerosPequeño + " abordo.<br>";
    }

    resultado += "El avión pequeño está lleno con " + pasajerosPequeño + " pasajeros.<br>";
    document.getElementById("resultado").innerHTML = resultado;
}

function llenarAvionComercial() {
    let capacidadGrande = 120;
    let pasajerosGrande = 0;
    let resultado = "Cargando Avión Grande:<br>";

    while (pasajerosGrande < capacidadGrande ) {
        let puesto=parseInt(prompt("ingresar los puestos a comprart"))
        pasajerosGrande+=puesto;
        if(pasajerosGrande>=120){
            alert("cupo total")
        }
        resultado += "Pasajero " + pasajerosGrande + " abordo.<br>";
    }

    resultado += "El avión grande está lleno con " + pasajerosGrande + " pasajeros.<br>";
    document.getElementById("resultado").innerHTML = resultado;
}


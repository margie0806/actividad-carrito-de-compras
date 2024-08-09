//
    
let suma=0
var numero=parseInt(prompt("escriba 1 para abajo los valores o 2 para arriba"));
while(numero==1){
    var cantidad=parseInt(prompt("ingresa el valor de los sumandos"));
    suma+=cantidad
    alert("cupos"+suma)
    if(suma===20){
        alert("cupos llenos")
        break
    }
      
}


while(numero==2){
    var cantidad=parseInt(prompt("ingresa el valor de los sumandos"));
    suma+=cantidad
    alert("cupos"+suma)
    if(suma>=120){
        alert("cupos llenos")
        break
    }
     
    
}

// Avión pequeño de 20 pasajeros
let pasajerosPequeno = 0;
const capacidadPequeno = 20;

while (pasajerosPequeno < capacidadPequeno) {
    pasajerosPequeno++;
    console.log(`Pasajero ${pasajerosPequeno} abordo en el avión pequeño.`);
}

console.log("El avión pequeño está lleno.\n");

// Avión comercial de 120 pasajeros
let pasajerosComercial = 0;
const capacidadComercial = 120;

while (pasajerosComercial < capacidadComercial) {
    pasajerosComercial++;
    console.log(`Pasajero ${pasajerosComercial} abordo en el avión comercial.`);
}

console.log("El avión comercial está lleno.");


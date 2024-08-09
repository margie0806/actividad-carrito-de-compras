//cinema de abajo de 50 cupos y superior de 80 cupos 


 
   
    
    let suma=0
    var numero=parseInt(prompt("escriba 1 para abajo los valores o 2 para arriba"));
    while(numero==1){
        var cantidad=parseInt(prompt("ingresa el valor de los sumandos"));
        suma+=cantidad
        alert("cupos"+suma)
        if(suma===50){
            alert("cupos llenos")
            break
        }
          
    }
   

    while(numero==2){
        var cantidad=parseInt(prompt("ingresa el valor de los sumandos"));
        suma+=cantidad
        alert("cupos"+suma)
        if(suma>=80){
            alert("cupos llenos")
            break
        }
         
        
    }


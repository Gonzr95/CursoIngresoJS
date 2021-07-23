/*
Autor: Gonzalo Rodriguez
Ejercicio: Parcial 02*/
function mostrar()
{
    var personaUno;
    var personsaDos;
    var pesoUno;
    var pesoDos;
    var suma;
    var promedio;
    var mensaje;

    //personaUno
    personaUno=prompt("Ingrese su nombre");
    pesoUno=prompt("Ingrese su peso");
    pesoUno=parseInt(pesoUno);

    //personaDos
    personsaDos=prompt("Ingrese su nombre");
    pesoDos=prompt("Ingrese su peso");
    pesoDos=parseInt(pesoDos);

    //operaciones
    suma=pesoUno+pesoDos;
    promedio=suma/2;

    //mensajes
    mensaje=("Ustedes se llaman: ")+personaUno;
    mensaje=mensaje+(" y ")+personsaDos;
    mensaje=mensaje+(" y pesan ")+pesoUno+("KG")
    mensaje=mensaje+(" y ")+pesoDos+("KG");
    mensaje=mensaje+(" que sumados son: ")+suma+("KG");
    mensaje=mensaje+(" y el promedio de peso es de: ")+promedio+("KG");

    alert(mensaje);

  
}

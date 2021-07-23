/*
Autor: Gonzalo Rodriguez
Ejercicio: Parcial 03*/
function mostrar()
{
    var precio;
    var descuento;
    var precioConDescuento;
    var mensaje;


    //Datos
    precio=prompt("Ingrese el precio");
    precio=parseInt(precio);
    descuento=prompt("Ingrese su descuento");
    descuento=parseInt(descuento);


    //operacion
    precioConDescuento=precio/100*descuento;
    precioConDescuento=precio-precioConDescuento;


   //mensaje
   mensaje=("Su precio con descuento es de: ")+precioConDescuento;
   document.getElementById('elPrecioFinal').value=mensaje

}

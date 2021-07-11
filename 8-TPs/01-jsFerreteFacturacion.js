/*
Autor: Gonzalo Rodriguez
Ejercicio: TP E/S 1
1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{
    var primerNumero;
    var segundoNumero;
    var tercerNumero;
    var suma;
    var mensaje;

    
    //funcion parseInt
    primerNumero=document.getElementById('txtIdPrecioUno').value;
    primerNumero=parseInt(primerNumero);

    segundoNumero=document.getElementById('txtIdPrecioDos').value;
    segundoNumero=parseInt(segundoNumero);

    tercerNumero=document.getElementById('txtIdPrecioTres').value;
    tercerNumero=parseInt(tercerNumero);

    //suma
    suma=primerNumero+segundoNumero+tercerNumero;

    //mensajes
    mensaje=("La sumatoria de sus productos es de: ");
    mensaje=mensaje+suma;

    alert(mensaje);

}
function Promedio () 
{
    var primerNumero;
    var segundoNumero;
    var tercerNumero;
    var promedio;
    var mensaje;

    
    //funcion parseInt
    primerNumero=document.getElementById('txtIdPrecioUno').value;
    primerNumero=parseInt(primerNumero);

    segundoNumero=document.getElementById('txtIdPrecioDos').value;
    segundoNumero=parseInt(segundoNumero);

    tercerNumero=document.getElementById('txtIdPrecioTres').value;
    tercerNumero=parseInt(tercerNumero);

    //promedio 
    promedio=(primerNumero+segundoNumero+tercerNumero)/3;

    //mensajes
    mensaje=("El valor promedio de sus productos es de: ");
    mensaje=mensaje+promedio;

    alert(mensaje);
}
function PrecioFinal () 
{
    var primerNumero;
    var segundoNumero;
    var tercerNumero;
    var suma;
    var precioConIva;
    var mensaje;

    
    //funcion parseInt
    primerNumero=document.getElementById('txtIdPrecioUno').value;
    primerNumero=parseInt(primerNumero);

    segundoNumero=document.getElementById('txtIdPrecioDos').value;
    segundoNumero=parseInt(segundoNumero);

    tercerNumero=document.getElementById('txtIdPrecioTres').value;
    tercerNumero=parseInt(tercerNumero);

    //suma
    suma=primerNumero+segundoNumero+tercerNumero;

    //IVA
    precioConIva=suma/100;
    precioConIva=precioConIva*21;
    precioConIva=suma+precioConIva;

    //mensajes
    mensaje=("La sumatoria de sus productos + IVA es de: ");
    mensaje=mensaje+precioConIva;

    alert(mensaje);
}
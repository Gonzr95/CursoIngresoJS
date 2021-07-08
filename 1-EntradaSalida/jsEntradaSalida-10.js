/*
Autor: Gonzalo Rodriguez
Ejercicio: 10 bis
Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{
	//variables
	var importe;
	var descuento;
	var resultado;
	var mensaje;

	//pasaje de texto a numero 1
	importe=document.getElementById('txtIdImporte').value;
	importe=parseInt(importe);

	//pasaje texto a numero 2
	descuento=prompt("Ingrese su descuento")
	descuento=parseInt(descuento);

	//operacion de descuento
	resultado=importe/100;
	resultado=resultado*descuento;
	resultado=importe-resultado;

	//seccion de mensajes
	mensaje="El importe con su descuento seleccionado es de: "
	mensaje=mensaje+resultado;

	document.getElementById('txtIdResultado').value=mensaje;

}

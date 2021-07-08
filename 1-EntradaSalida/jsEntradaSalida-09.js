/*
Autor: Gonzalo Rodriguez
Ejercicio: 09 bis
Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{
	//seccion de variables
	var sueldo;
	var aumento;
	var resultado;
	var mensaje;

	//pasajede texto a numero 1
	sueldo=document.getElementById('txtIdSueldo').value;
	sueldo=parseInt(sueldo);

	//pasaje texto a numero 2
	aumento=prompt("Ingrese su aumento");
	aumento=parseInt(aumento);

	//operacion de aumento
	resultado=sueldo/100;
	resultado=resultado*aumento;
	resultado=sueldo+resultado;

	//seccion de mensajes
	mensaje="Su sueldo aumentado sería: ";
	mensaje=mensaje+resultado;

	document.getElementById('txtIdResultado').value=mensaje

}

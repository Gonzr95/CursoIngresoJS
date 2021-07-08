/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
{	
	//variables
	var primerNumero;
	var segundoNumero;
	var suma;
	var mensaje;

	//conversion a numero 1
	primerNumero=document.getElementById('txtIdNumeroUno').value;
	primerNumero=parseInt(primerNumero);

	//conversion a numero 2
	segundoNumero=document.getElementById('txtIdNumeroDos').value;
	segundoNumero=parseInt(segundoNumero);

	//operacion suma
	suma=primerNumero+segundoNumero;

	//mensaje
	mensaje=suma;
	alert(mensaje);

}

function restar()
{
	var primerNumero;
	var segundoNumero;
	var resta;
	var mensaje;

	//conversion a numero 1
	primerNumero=document.getElementById('txtIdNumeroUno').value;
	primerNumero=parseInt(primerNumero);

	//conversion a numero 2
	segundoNumero=document.getElementById('txtIdNumeroDos').value;
	segundoNumero=parseInt(segundoNumero);

	//operacion resta
	resta=primerNumero-segundoNumero;

	//mensajes
	mensaje=resta;
	alert(mensaje);
	
}

function multiplicar()
{ 
	var primerNumero;
	var segundoNumero;
	var multiplicacion;
	var mensaje;

	//conversion a numero 1
	primerNumero=document.getElementById('txtIdNumeroUno').value;
	primerNumero=parseInt(primerNumero);

	//conversion a numero 2
	segundoNumero=document.getElementById('txtIdNumeroDos').value;
	segundoNumero=parseInt(segundoNumero);

	//operacion multiplicacion
	multiplicacion=primerNumero*segundoNumero;

	//mensajes
	mensaje=multiplicacion;
	alert(mensaje);
	
}

function dividir()
{
	var primerNumero;
	var segundoNumero;
	var division;
	var mensaje;

	//conversion a numero 1
	primerNumero=document.getElementById('txtIdNumeroUno').value;
	primerNumero=parseInt(primerNumero);

	//conversion a numero 2
	segundoNumero=document.getElementById('txtIdNumeroDos').value;
	segundoNumero=parseInt(segundoNumero);

	//operacion division
	division=primerNumero/segundoNumero;

	//mensajes
	mensaje=division;
	alert(mensaje);

}


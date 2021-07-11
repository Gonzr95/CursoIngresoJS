/*
Autor: Gonzalo Rodriguez
Ejercicio 08
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resto entre el dividendo y el divisor.
ej.: "El resto es 0 ."*/
function SacarResto()
{
	var primerNumero;
	var segundoNumero;
	var resultado;
	var mensaje;

	//conversion a numero 1
	primerNumero=document.getElementById('txtIdNumeroDividendo').value;
	primerNumero=parseInt(primerNumero);

	//conversion a numero 2
	segundoNumero=document.getElementById('txtIdNumeroDivisor').value;
	segundoNumero=parseInt(segundoNumero);

	//operacion
	resultado=primerNumero%segundoNumero;

	//mensaje
	mensaje="el resto de su division es: ";
	mensaje=mensaje+resultado;
	
	alert(mensaje);



}

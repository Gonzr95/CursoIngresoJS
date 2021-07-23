/*
Autor: Gonzalo Rodriguez
Ejercicio: While 04
al presionar el botón 
pedir un número entre 0 y 9 inclusive.*/
function mostrar()
{
	var numeroIngresado;
	numeroIngresado = prompt("ingrese un número entre 0 y 9 inclusive.");
	numeroIngresado=parseInt(numeroIngresado);

	while(numeroIngresado>10 || numeroIngresado<0)
	{
		numeroIngresado=prompt("Ingrese un numero QUE SI ESTÉ entre 0 y 9 inclusive");
	}
document.getElementById('txtIdNumero').value=numeroIngresado;
}//FIN DE LA FUNCIÓN
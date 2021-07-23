/*
Autor: Gonzalo Rodriguez
Ejercicio: WHILE 06

Al presionar el boton pedir 5 numeros e informar la suma acumulada y el promedio
*/
function mostrar()
{
	var contador;
	var acumulador;
	var numeroIngresado;

	contador=0;
	acumulador=0;

	while(contador<5)
	{
		numeroIngresado=prompt("Ingrese 5 numeros (uno por vez)");  //Pido el numero
		numeroIngresado=parseInt(numeroIngresado); //parseo;
		contador=contador+1 // cada vez que entro en bucle sumo 1 vuelta al contador
		acumulador=acumulador+numeroIngresado;
	}

	txtIdSuma.value=acumulador;
	txtIdPromedio.value=acumulador/5;
}//FIN DE LA FUNCIÓN
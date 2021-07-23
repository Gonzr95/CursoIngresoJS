/*
Autor: Gonzalo Rodriguez
Ejercicio: While 07
Al presionar el botón pedir  números  hasta que el USUARIO QUIERA 
e informar la suma acumulada y el promedio.
*/
function mostrar()
{
	var contador;
	var acumulador;
	var respuesta;
	contador=0;
	acumulador=0;
	respuesta='si';

	while(respuesta=='si')
	{
		numeroIngresado=prompt("Ingrese numeros que desee (uno por vez)");  //Pido el numero
		numeroIngresado=parseInt(numeroIngresado); //parseo;
		contador=contador+1;                      //sumo 1 vuelta al contador
		acumulador=acumulador+numeroIngresado;
		respuesta=prompt("Escriba 'si' o 'no' si desea seguir ingresando numeros, O NO");
	}

	txtIdSuma.value=acumulador;
	txtIdPromedio.value=acumulador/contador;

}//FIN DE LA FUNCIÓN
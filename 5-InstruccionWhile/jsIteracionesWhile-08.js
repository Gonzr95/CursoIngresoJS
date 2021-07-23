/*
Autor: Gonzalo Rodriguez
Ejercicio: While 08
Al presionar el botón pedir  números  hasta que el usuario quiera,
sumar los que son positivos y multiplicar los negativos.*/
function mostrar()
{
	var contador;
	var respuesta;
	var sumaPositivos;
	var multiplicacionNegativos;
	contador=0;
	sumaPositivos=0;
	multiplicacionNegativos=1;
	respuesta='si';

	while(respuesta=='si')
	{
		numeroIngresado=prompt("Ingrese numeros que desee (nagativos tambien)");  //Pido el numero
		contador=contador+1;                      //sumo 1 vuelta al contador (INNECESARIO)
		numeroIngresado=parseInt(numeroIngresado); //parseo;
		if(numeroIngresado<0)  //comparo si es negativo o positivo
		{
			multiplicacionNegativos=multiplicacionNegativos*numeroIngresado;	//multiplico
		}
		else
		{
			sumaPositivos=sumaPositivos+numeroIngresado;
		}
		respuesta=prompt("Escriba 'si' o 'no' si desea seguir ingresando numeros, O NO");
	}

	txtIdSuma.value=sumaPositivos;
	txtIdProducto.value=multiplicacionNegativos;

}//FIN DE LA FUNCIÓN
/*
Autor: Gonzalo Rodriguez
Ejercicio: WHILE 10
Al presionar el botón pedir  números  
hasta que el usuario quiera, mostrar:
1-Suma de los negativos.
2-Suma de los positivos.
3-Cantidad de positivos.
4-Cantidad de negativos.
5-Cantidad de ceros.
6-Cantidad de números pares.
7-Promedio de positivos.
8-Promedios de negativos.
9-Diferencia entre positivos y negativos, (positvos-negativos). */
function mostrar()
{
	//declarar contadores y variables 
	var respuesta;
	var numeroIngresado;
	var sumaNegativos;                //1
	var sumaPositivos;  	          //2
	var acumuladorPositivos;          //3
	var acumuladorNegativos;          //4
	var acumuladorCeros;	          //5
	var acumuladorPares;              //6
	var promedioPositivos;            //7
	var promedioNegativos;            //8
	var diferenciaPositivosNegativos; //9
	var mensaje;

	sumaNegativos=0;
	sumaPositivos=0;
	acumuladorCeros=0;
	acumuladorNegativos=0;
	acumuladorPositivos=0;
	acumuladorPares=0;
	respuesta="si";

	while(respuesta=="si")
	{
		numeroIngresado=prompt("Ingrese un numero positivo o negativo"); //pido numero
		numeroIngresado=parseInt(numeroIngresado); //parseo para poder clasificar
		if(numeroIngresado==0)   
		{
			acumuladorCeros=acumuladorCeros+1; // 5)
		}
		else
		{
			if(numeroIngresado<0)    // 1)
			{
				acumuladorNegativos=acumuladorNegativos+1; //  4)
				sumaNegativos=sumaNegativos+numeroIngresado; // 1)
			}
			else
			{
				acumuladorPositivos=acumuladorPositivos+1;   // 3)
				sumaPositivos=sumaPositivos+numeroIngresado;   // 2)
			}
		
		}
		if(numeroIngresado%2==0)    // 6)
		{
			acumuladorPares=acumuladorPares+1;
		}
		respuesta=prompt("desea continuar? si o no.");
	}//fin del while

	if(acumuladorNegativos==0)
	{
		mensaje="No hubo numeros negativos."
	}
	else
	{
		promedioNegativos=sumaNegativos/acumuladorNegativos;  // 8) ejecuto promedio de negativos una vez que tengo todos los datos
	}

	if(acumuladorPositivos==0)
	{
		mensaje="No hubo numeros positivos";
	}
	else
	{
		promedioPositivos=sumaPositivos/acumuladorPositivos;  // 7) IDEM
	}
	
	diferenciaPositivosNegativos=sumaPositivos+sumaNegativos; //  9)diferencia de suma y negativos.

	document.write("la suma de negativos es :"+sumaNegativos);

}//FIN DE LA FUNCIÓN
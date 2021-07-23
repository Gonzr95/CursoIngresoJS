/*

Al presionar el botón pedir  números  hasta que el usuario quiera,
mostrar el número máximo y el número mínimo ingresado.*/
function mostrar()
{	// declarar variables
	var banderaDelPrimero;
	var numeroIngresado;
	var numeroMaximo;
	var numeroMinimo;
	var respuesta;

	//iniciar variables
	banderaDelPrimero="es el primero";
	respuesta='si';

	numeroIngresado=prompt("Ingrese numeros."); //Pido numero
	numeroIngresado=parseInt(numeroIngresado);  //Parseo

	numeroMaximo=numeroIngresado;
	numeroMinimo=numeroIngresado;

	while(respuesta=="si")
	{
		respuesta=prompt("desea continuar?");       //Rompo bucle o no
		
		numeroIngresado=prompt("Ingrese numeros."); //Pido numero
		numeroIngresado=parseInt(numeroIngresado);  //Parseo

		if(numeroIngresado>numeroMaximo)
		{
			numeroMaximo=numeroIngresado;
		}
		else
		{
			if(numeroIngresado<numeroMinimo)
			{
				numeroMinimo=numeroIngresado;
			}
		}

		
	}

	txtIdMaximo.value=numeroMaximo;
	txtIdMinimmo.value=numeroMinimo;
}//FIN DE LA FUNCIÓN
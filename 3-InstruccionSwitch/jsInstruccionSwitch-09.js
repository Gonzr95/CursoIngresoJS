/*
Autor: Gonzalo Rodriguez
Ejercicio: Switch 09
*/
function mostrar()
{
	var estacion;
	var destino;
	var mensaje;
	var aumento;
	var descuento;
	var precioFinal;
	var precioBase;
	var validador; //AUMENTO - DESCUENTO - NADA

	precioBase=15000;


	estacion=document.getElementById('txtIdEstacion').value;
	destino=document.getElementById('txtIdDestino').value;

	switch(estacion)
	{
		case "Invierno":
			switch(destino)
			{
				case "Bariloche":
					aumento=20;
					validador="aumento";
				break;
				case "Cataratas":
				case "Cordoba":
					descuento=10;
					validador="descuento";
				break;
				case "Mar del plata":
					descuento=20;
					validador="descuento";
				break;
			}                                      // A
		break;
		case "Verano":
			switch(destino)
			{
				case "Bariloche":
					descuento=20;
					validador="descuento";
				break;
				case "Cataratas":
				case "Cordoba":
					aumento=10;
					validador="aumento";
				case "Mar del plata":
					aumento=20;
					validador="aumento";
				break;
			}
		break;                                     // B
		case "Otoño":
		case "Primavera":
			switch(destino)
			{
				case "Bariloche":
				case "Cataratas":
				case "Mar del plata":
					aumento=10;
					validador="aumento";
				break;         
				case "Cordoba":
					descuento=0;
					validador="nada";                   // C
			}
		break;
	}
	switch(validador)
	{
		case "aumento":
			precioFinal=precioBase+precioBase/100*aumento;
			mensaje="Se ha aplicado recargo. Su precio final es de: $"+precioFinal;
		break;
		case "descuento":
			precioFinal=precioBase-precioBase/100*descuento;
			mensaje="se ha aplicado un descuento. Su precio final es de: $"+precioFinal;
		break;
		default:
			precioFinal=precioBase;
			mensaje="Su precio final es de: $"+precioFinal;
		break;
	}

	alert(mensaje);	

}    ////// cambiar el signo del descuento o aumento para no generar 2 variables de operacion final.
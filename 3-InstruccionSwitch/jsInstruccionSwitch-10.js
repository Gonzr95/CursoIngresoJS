/*
Autor: Gonzalo Rodriguez
Ejercicio: Switch 10
*/
function mostrar()
{
	var estacion;
	var destino;
	var mensaje;

	estacion=document.getElementById('txtIdEstacion').value;
	destino=document.getElementById('txtIdDestino').value;

	switch(estacion)
	{
		case "Invierno":
			switch(destino)
			{
				case "Bariloche":
					mensaje="Se viaja";
				break;
				default:
					mensaje="No se viaja";
				break;                                    // A
			}
		break;
		case "Verano":
			switch(destino)
			{
				case "Mar del plata":
				case "Cataratas":
					mensaje="Se viaja";
				break;
				default:
					mensaje="No se viaja";
				break;
			}
		break;
		case "Otoño":
			mensaje="Se viaja"
		break;
		case "Primavera":
			switch(destino)
			{
				case "Bariloche":
					mensaje="No se viaja"
				break;
				default:
					mensaje="Se viaja";
				break;
			}
		break;
	}
	alert(mensaje)

}//FIN DE LA FUNCIÓN
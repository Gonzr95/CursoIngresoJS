/*
Autor: Gonzalo Rodriguez
Ejercicio: Switch 02
*/
function mostrar()
{
	var mes;
	var mensaje;

	mes=document.getElementById('txtIdMes').value;

	switch(mes)
	{
		case "Julio":
		case "Agosto":
			mensaje="Abrigate, hace frio";
		break;
		case "Abril":
		case "Mayo":
		case "Junio":
			mensaje="Falta para el invierno."
		break;
		default:
			mensaje="Ya pasamos el frio, ahora calor."
		break;
	}

	alert(mensaje);

}//FIN DE LA FUNCIÓN
/*
Autor: Gonzalo Rodriguez
Ejercicio: Switch 08
*/
function mostrar()
{
	var destinoIngresado;
	var mensaje;

	destinoIngresado=document.getElementById('txtIdDestino').value;

	switch(destinoIngresado)
	{
		case "Cataratas":
			mensaje="Calor";
		break;
		case "Bariloche":
		case "Mar del plata":
		case "Ushuaia":
			mensaje="Frio";
		break;
	}
	alert(mensaje)

}//FIN DE LA FUNCIÓN
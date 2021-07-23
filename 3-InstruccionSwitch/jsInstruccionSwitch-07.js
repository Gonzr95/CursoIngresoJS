/*
Autor: Gonzalo Rodriguez
Ejercicio: Switch 07
*/
function mostrar()
{
	var destinoIngresado;
	var mensaje;

	destinoIngresado=document.getElementById('txtIdDestino').value;

	switch(destinoIngresado)
	{
		case "Cataratas":
			mensaje="Norte";
		break;
		case "Bariloche":
		case "Mar del plata":
		case "Ushuaia":
			mensaje="Sur";
		break;
	}
	alert(mensaje)

}//FIN DE LA FUNCIÓN
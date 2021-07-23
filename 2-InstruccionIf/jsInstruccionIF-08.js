/*
Autor: Gonzalo Rodriguez
Ejercicio IF 08
*/
function mostrar()
{
	var edadIngresada;
	var estadoCivilIngresado;
	var mensaje;

	edadIngresada=document.getElementById('txtIdEdad').value;
	edadIngresada=parseInt(edadIngresada);

	estadoCivilIngresado=document.getElementById('estadoCivil').value;

	if(edadIngresada>17 && estadoCivilIngresado == "Soltero")
	{
		mensaje=("Usted no es menor y es soltero");
	}

alert(mensaje);

}
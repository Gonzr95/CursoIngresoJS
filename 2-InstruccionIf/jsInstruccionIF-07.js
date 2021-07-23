/*
Autor: Gonzalo Rodriguez
Ejercicio IF 07
*/
function mostrar()
{
	var edadIngresada;
	var estadoCivilIngresado;
	var mensaje;

	//Ingreso de edad y Parseo
	edadIngresada=document.getElementById('txtIdEdad').value;
	edadIngresada=parseInt(edadIngresada);
	
	estadoCivilIngresado=document.getElementById('estadoCivil').value;

	if(edadIngresada<18 && estadoCivilIngresado!="Soltero")
	{
		mensaje=("Es muy pequeño para no estar soltero");
	}

	alert(mensaje);

}//FIN DE LA FUNCIÓN
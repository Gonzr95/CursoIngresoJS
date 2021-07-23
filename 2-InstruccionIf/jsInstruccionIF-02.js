/*
Autor: Gonzalo Rodriguez
Ejercicio: IF 02*/
function mostrar()
{
	var edad;
	var mensaje;

	edad=document.getElementById('txtIdEdad').value;
	edad=parseInt(edad);

	if(edad>17)
	{
		mensaje=("Usted es mayor")
	}
	alert(mensaje);

	/*
	if(edad<18)
	{
		alert("Es menor")
	}
	else
	{
		alert("Es  mayor")
	}
	*/


}//FIN DE LA FUNCIÓN
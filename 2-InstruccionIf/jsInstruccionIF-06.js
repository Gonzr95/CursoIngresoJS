/*
Autor: Gonzalo Rodriguez
Ejercicio: IF 06*/
function mostrar()
{
	var edad;
	var mensaje;

	edad=document.getElementById('txtIdEdad').value;
	edad=parseInt(edad);

	//mayores
	if(edad>17)
	{
		mensaje="Usted es mayor";
	}
	else
	{
		if(edad>12)
		{
		mensaje="Usted es adolescente";
		}
		else
		{
			mensaje="Usted es menor";
		}
	}
	alert(mensaje);

	
}//FIN DE LA FUNCIÓN
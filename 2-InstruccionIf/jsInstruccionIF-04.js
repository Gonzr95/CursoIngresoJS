/*
Autor: Gonzalo Rodriguez
Ejercicio: IF 04*/
function mostrar()
{
	var edad;
	var mensaje;

	edad=document.getElementById('txtIdEdad').value;
	edad=parseInt(edad);

	if(edad<18 && edad>12)
	{
		mensaje=("Usted es adolescente");
	}
alert(mensaje)





	/*
	if(edad<18)
	{
		alert("Es menor")
		if(edad>13)
		{
			alert("Es adolescente")
		}
	}
	*/

}//FIN DE LA FUNCIÓN
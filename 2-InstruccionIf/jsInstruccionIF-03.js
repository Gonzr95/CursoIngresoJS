/*
Autor: Gonzalo Rodriguez
Ejercicio: IF 03*/
function mostrar()
{
	var edad;
	var mensaje;

	//toma y conversion de datos
	edad=document.getElementById('txtIdEdad').value;
	edad=parseInt(edad);

	if(edad>17)
	{
		mensaje=("Usted es mayor");
	}
	else
	{
		mensaje=("Usted es menor");
	}
alert(mensaje);
}//FIN DE LA FUNCIÓN
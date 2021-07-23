/*
Autor: Gonzalo Rodriguez
Ejercicio: IF 01*/
function mostrar()
{
	var edad;
	var mensaje;

	edad=document.getElementById('txtIdEdad').value;
	edad=parseInt(edad);

	if(edad==15)
	{
		mensaje=("Niña bonita")
	}
	
	alert(mensaje);
	
	/*mal hecho
	if(edad==15); aqui no se correra el codigo ya que con el ; se termina la sentencia IF
	{
		alert("Niña bonita")
	}
	*/

}//FIN DE LA FUNCIÓN
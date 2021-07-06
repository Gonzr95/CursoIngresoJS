/* 
Autor: Gonzalo Rodriguez
Ejercicio: 04
Debemos lograr tomar un dato por 'PROMPT' 
y lo muestro por 'ID' al presionar el botón 'mostrar'
*/
function mostrar()
{
	var nombre;
	var mensaje;

	nombre=prompt("Ingrese su nombre");

	mensaje = "Su nombre es: " + nombre;

	document.getElementById("txtIdNombre").value=mensaje;

	// esto esta bien pero podria estar separado : 
	//document.getElementById('txtIdNombre').value="Su nombre es: "+nombre; 


}


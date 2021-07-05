/*
Debemos lograr tomar un nombre con 'prompt' 
y luego mostrarlo por 'alert' al presionar el botón  'mostrar'*/
function mostrar()
{
	let nombre;
	let apellido;

	nombre=prompt("Ingrese su nombre");
	apellido=prompt("Ingrese su apellido")

	alert("Sr "+ nombre+ " su apellido es "+ apellido);

} 


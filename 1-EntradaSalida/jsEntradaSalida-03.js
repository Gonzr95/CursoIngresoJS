/*
Autor: Gonzalo Rodriguez
Ejercicio: 03
Debemos lograr tomar un dato por 'ID'
y luego mostrarlo por 'Alert' al presionar el botón  'mostrar'*/
function mostrar()
{
	var nombreIngresado;

	nombreIngresado=txtIdNombre.value;
	
	nombreIngresado=document.getElementById('txtIdNombre').value;

	alert("El nombre ingresado fue: "+nombreIngresado);

}


//nombreIngresado=txtIdNombre.value;
//var edadIngresadaPorElUsuario; lower camel case tipo de escritura con primera minus y restante 
//nombreIngresado=document.getElementById('txtidNombre').value; //document get element nos trae un documento, by id por el nombre, introducimos el nombre y luego de los partentesis le pedimos el valor
/*
Autor: Gonzalo Rodriguez
Ejercicio: While 03
al presionar el botón pedir la CLAVE (ayuda: es utn750)*/
function mostrar()
{
	var claveIngresada;
	claveIngresada=prompt("ingrese la CLAVE."); //1pido clave

	while(claveIngresada!="utn750")
	{
		claveIngresada=prompt("La clave ingresada es incorrecta, intente nuevamente")
	}
	alert("Bienvenido");
	
}//FIN DE LA FUNCIÓN

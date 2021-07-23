/*
Autor: Gonzalo Rodriguez
Ejercicio: IF 10
*/
function mostrar()
{
	var notaRandom;
	var mensaje;

	//generacion notaRandom
	notaRandom=Math.floor(Math.random()*10)+1;

	//IFs
	if(notaRandom>8)
	{
		mensaje=("EXCELENTE");
	}
	else
	{
		if(notaRandom>3)
		{
			mensaje=("APROBÓ");
		}
		else
		{
			mensaje=("Vamos, la próxima se puede");
		}
	}

	alert(mensaje);
}//FIN DE LA FUNCIÓN
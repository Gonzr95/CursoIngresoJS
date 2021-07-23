/*
Autor: Gonzalo Rodriguez
Ejercicio: While 05
Al presionar el botón pedir un sexo
'f' para femenino, 'm' para masculino.*/
function mostrar()
{
	var sexoIngresado;
	sexoIngresado=prompt("ingrese f o m segun su sexo");	

	while(sexoIngresado!="f" && sexoIngresado!="m")  //en el while siempre vamos a  buscar lo incorrecto.
	{            // con      || no se puede hacer ya que todas las letras son distintas la f es distinta a m
		sexoIngresado=prompt("Ingrese unicamente f o m");
	}

	document.getElementById('txtIdSexo').value=sexoIngresado;
}
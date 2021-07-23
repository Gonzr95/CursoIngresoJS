/*En esta oportunidad el juego evaluará tus
 aptitudes a partir de la cantidad de intentos, 
 por lo cual se informará lo siguiente:
1° intento: “usted es un Psíquico”.
2° intento: “excelente percepción”.
3° intento: “Esto es suerte”.
4° intento: “Excelente técnica”.
5° intento: “usted está en la media”.
Desde  6 Intentos hasta 10:”falta técnica”
Más de 10 intentos: “afortunado en el amor!!”.*/

var numeroSecreto; 
var contadorIntentos;
var numeroIngresado;
var mensaje;

function comenzar()
{
	numeroSecreto=Math.floor(Math.random()*100)+1; //genero numero random
	contadorIntentos=0;
	alert(numeroSecreto);
	document.getElementById('txtIdIntentos').value=contadorIntentos+" intentos";
}

function verificar()
{
	contadorIntentos=contadorIntentos+1;               //sumo 1 al contador
	document.getElementById('txtIdIntentos').value=contadorIntentos+" intentos"; //lo muestro en pantalla
	numeroIngresado=document.getElementById('txtIdNumero').value; //traigo el numero ingresado
	numeroIngresado=parseInt(numeroIngresado);         //Parseo

	if(numeroIngresado==numeroSecreto)
	{
		switch(contadorIntentos)
		{
			case 1:
				mensaje="Usted es un Psiquico";
			break;
			case 2:
				mensaje="Excelente percepcion";
			break;
			case 3:
				mensaje="Esto es suerte";
			break;
			case 4:
				mensaje="Excelente tecnica";
			break;
			case 5:
				mensaje="Usted esta en la media";
			break;
			case 6:
			case 7:
			case 8:
			case 9:
			case 10:
				mensaje="Falta tecnica";
			break;
			default:
				mensaje="Afortunado en el amor!!";
			break;
		}
	}
	else
	{
	}
	alert(mensaje);

}
/*Al comenzar el juego generamos un número 
secreto del 1 al 100, en la pantalla del juego
 dispondremos de un cuadro de texto para ingresar
  un número y un botón “Verificar”, si el número 
  ingresado es el mismo que el número secreto se dará 
  por terminado el juego con un mensaje similar a este: 
“Usted es un ganador!!! y en solo X intentos”.
de no ser igual se debe informar si “falta…”  para llegar al número secreto  o si “se pasó…”  del número secreto.
*/
var numeroSecreto; 
var contadorIntentos;
var numeroIngresado;
var mensaje;
var operacion;

function comenzar()
{
  numeroSecreto=Math.floor(Math.random()*100)+1; //preparo un numero random.

  contadorIntentos=0;  //Inicializo contador. (como cada vez que yo le de a COMENZAR, la cantidad de intentos 
  //verificados va a ser 0, lo debo dejar asi.)
	
  mensaje="Se ha generado el numero secreto";

  alert(mensaje); //aca tambien podria envez de poner el mensaje poner el valor del numero secreto para luego
  //poder veriificar los numeros en el siguiente paso

}

function verificar()
{
  contadorIntentos=contadorIntentos+1; //le suemo 1 al contador de intentos ya que pulsé VERIFICAR

  document.getElementById('txtIdIntentos').value=contadorIntentos; // muestro los intentos.

  numeroIngresado=document.getElementById('txtIdNumero').value
  numeroIngresado=parseInt(numeroIngresado); //traigo el numero y parseo

  if(numeroIngresado==numeroSecreto)  //Comparo resultado
  {
    mensaje="Usted es un ganador!!! y en tan solo "+contadorIntentos+" intentos.";
  }
  else
  {
    if(numeroIngresado>numeroSecreto)
    {
      mensaje="Se ha pasado";
    }
    else
    {
      mensaje="Le falta para llegar al numero secreto"
    }
  }
  alert(mensaje);

}
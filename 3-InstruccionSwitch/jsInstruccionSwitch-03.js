/*
Autor: Gonzalo Rodriguez
Ejercicio: Switch 03
*/
function mostrar()
{
	var mes;
	var mensaje;

	mes=document.getElementById('txtIdMes').value;

	switch(mes)
	{
		case "Febrero":
			mensaje="Este mes no tiene mas de 29 dias.";
		break;
		default :
			mensaje="Este mes tiene 30 dias o mas.";
		break; 
	}	
	alert(mensaje);
	
	


}//FIN DE LA FUNCIÓN
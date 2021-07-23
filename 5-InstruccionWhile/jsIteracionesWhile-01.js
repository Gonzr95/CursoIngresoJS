/*
Autor: Gonzalo Rodriguez
Ejercicio: While 01
al presionar el botón mostrar 10 repeticiones 
con números ASCENDENTE, desde el 1 al 10.*/
function mostrar()
{
	var contador;
	
	contador=0; // 1 Inicializamos variable. SIEMPRE INICIALIZAMOS EN 0 al menos que indique que el contador sea descendente

	while(contador<10) // 2COMPARACIONmientras que el contador sea menor a 3 se continuara ejecutando el bucle.
	{
		contador=contador+1   //MODIFICACION PARA PODER SALIR DEL WHILE 
		console.log(contador); //para inicializar en 0 cambiamos el console log y lo ponemos encima del contador es decir linea 12
	}


	/*var edad;

	edad=15; //1 Inicializar la variable.


	while(edad<18) //2 evalua
	{
		
		edad=prompt("Ingrese edad."); // 3 cambia la logica para evitar que entre en bucle y asi trabar todo.
		edad=parseInt(edad);
		console.log("no es mayor a 18"); 
	}
	alert('iteración while');*/
}
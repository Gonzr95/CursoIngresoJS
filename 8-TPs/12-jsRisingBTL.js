/*
Autor: Gonzalo Rodriguez
Ejercicio: BTL Censo o TP n°12
RISING BTL. Empresa dedicada a la toma de datos para realizar estadísticas y censos nos pide realizar 
una carga de datos validada e ingresada por ventanas emergentes solamente (para evitar hacking y cargas 
maliciosas) y luego asignarla a cuadros de textos. 
12.   Los datos requeridos son los siguientes:
A.	Edad, entre 18 y 90 años inclusive.
B.	Sexo, “M” para masculino y “F” para femenino
C.	Estado civil, 1-para soltero, 2-para casados, 3-para divorciados y 4-para viudos
D.	Sueldo bruto, no menor a 8000.
E.	Número de legajo, numérico de 4 cifras, sin ceros a la izquierda.
F.	Nacionalidad, “A” para argentinos, “E” para extranjeros, “N” para nacionalizados.
 */
function ComenzarIngreso () 
{
 	//definicion de variables
 	var edadIngresada;
 	var sexoIngresado;
 	var estadoCivilIngresado;
	var sueldoBrutoIngresado;
	var legajoIngresado;
	var nacionalidadIngresada;
	var mensaje;

	edadIngresada=prompt("Ingrese su edad (debe tener entre 18 y 90)"); // A) EDAD entre 18 y 90 inclusive
	edadIngresada=parseInt(edadIngresada);
	while(edadIngresada<18 || edadIngresada>90)
	{
		edadIngresada=prompt("Ingrese su edad (debe tener entre 18 y 90)"); // A) EDAD entre 18 y 90 inclusive
		edadIngresada=parseInt(edadIngresada);
	}
	document.getElementById('txtIdEdad').value=edadIngresada; // A) Muestro validacion

	sexoIngresado=prompt("Ingrese su sexo, use (F) o (M)."); // B) SEXO F O M
	while(sexoIngresado!="F" && sexoIngresado!="M")
	{	
		sexoIngresado=prompt("Ingrese su sexo, use (F) o (M)."); // B) SEXO F O M
	}
	if(sexoIngresado=="F")
	{
		sexoIngresado="Femenino";
	}
	else
	{
		sexoIngresado="Masculino";
	}
	document.getElementById('txtIdSexo').value=sexoIngresado;

	estadoCivilIngresado=prompt("Ingrese su estado civil. (1) para soltero, (2) para casado, (3) para divorciado, o (4) para viudo"); // C) 1 2 3 O 4
	estadoCivilIngresado=parseInt(estadoCivilIngresado);
	while(estadoCivilIngresado<1 || estadoCivilIngresado>4 )
	{
		estadoCivilIngresado=prompt("Ingrese su estado civil. (1) para soltero, (2) para casado, (3) para divorciado, o (4) para viudo"); // C) 1 2 3 O 4
		estadoCivilIngresado=parseInt(estadoCivilIngresado);
	}
	switch(estadoCivilIngresado)
	{
		case 1:
			mensaje="Soltero";
		break;
		case 2:
			mensaje="Casado";
		break;
		case 3:
			mensaje="Divorciado";
		case 4:
			mensaje="Viudo";
		break;
	}
	document.getElementById('txtIdEstadoCivil').value=mensaje;;


	sueldoBrutoIngresado=prompt("Ingrese su sueldo bruto"); // D) SUELDO no menor a 8000.
	while(sueldoBrutoIngresado<8000)
	{
		sueldoBrutoIngresado=prompt("Ingrese su sueldo bruto (8000 mínimo)"); // D) SUELDO no menor a 8000.
	}
	document.getElementById('txtIdSueldo').value=sueldoBrutoIngresado;


	legajoIngresado=prompt("Ingrese su legajo"); // E) LEGAJO 4 numeros sin 0 a la izq.
	while(legajoIngresado<1000 || legajoIngresado>9999)
	{
		legajoIngresado=prompt("Ingrese su legajo, sin ceros a la izquierda."); // E) LEGAJO 4 numeros sin 0 a la izq.
	}
	document.getElementById('txtIdLegajo').value=legajoIngresado;


	nacionalidadIngresada=prompt("Ingrese su nacionalidad. Utilice: (A) para argentino, (E) para extranjero o (N) para nacionalizado."); // F) NACIONALIDAD A/E/N.
	while(nacionalidadIngresada!="A" && nacionalidadIngresada!="E" && nacionalidadIngresada!="N")
	{
		nacionalidadIngresada=prompt("Asegúrese de utilizar: (A) para argentino, (E) para extranjero o (N) para nacionalizado."); // F) NACIONALIDAD A/E/N.
	}
	switch(nacionalidadIngresada)
	{
		case "A":
			mensajeNacionalidad="Argentino";
		break;
		case "E":
			mensajeNacionalidad="Extranjero";
		break;
		case "N":
			mensajeNacionalidad="Nacionalizado";
		break;
	}

document.getElementById('txtIdNacionalidad').value=mensajeNacionalidad;
alert("Gracias por participar en el censo.");
}



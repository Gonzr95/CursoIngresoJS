/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar()
{
	var primerNumero;
	var segundoNumero;
	var suma;
	var mensaje;

	primerNumero=document.getElementById('txtIdNumeroUno').value;
	primerNumero=parseInt(primerNumero);

	segundoNumero=document.getElementById('txtIdNumeroDos').value;
	segundoNumero=parseInt(segundoNumero);


	//primerNumero=document.getElementById('txtIdNumeroUno').value;
	//segundoNumero=document.getElementById('txtIdNumeroDos').value;
	//primerNumero=6;
	//segundoNumero=66;
	
	suma=primerNumero+segundoNumero;
	
	mensaje="la suma es :"+ suma;

	alert(suma);


	



}


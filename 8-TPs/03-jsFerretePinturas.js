/*Autor: Gonzalo Rodriguez
Ejercicio: TP 3
/*3.	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
*/
function FahrenheitCentigrados () 
{
 
    var fahrenheit;
    var centigrados;
    var mensaje;

    fahrenheit=document.getElementById('txtIdTemperatura').value;
    fahrenheit=parseInt(fahrenheit);

    centigrados=fahrenheit-32;
    centigrados=centigrados/1.8;

    mensaje=fahrenheit;
    mensaje=mensaje+("°F equivalen a ");
    mensaje=mensaje+centigrados;
    mensaje=mensaje+("°C");
    
    alert(mensaje);
	
}

function CentigradosFahrenheit () 
{
	var centigrados;
    var fahrenheit;
    var mensaje;

    centigrados=document.getElementById('txtIdTemperatura').value;
    centigrados=parseInt(centigrados);

    fahrenheit=centigrados*1.8;
    fahrenheit=fahrenheit+32;

    mensaje=centigrados;
    mensaje=mensaje+("°C equivalen a ");
    mensaje=mensaje+fahrenheit;
    mensaje=mensaje+("°F");
    
    alert(mensaje);
}

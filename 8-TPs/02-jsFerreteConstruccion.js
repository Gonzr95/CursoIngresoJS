/*
Autor: Gonzalo Rodriguez
Ejercicio: TP 2*/
/*2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{
    var largoTerreno;
    var anchoTerreno;
    var perímetro;
    var alambrado;
    var mensaje;

    //conversion a numeros
    largoTerreno=document.getElementById('txtIdLargo').value;
    largoTerreno=parseInt(largoTerreno);

    anchoTerreno=document.getElementById('txtIdAncho').value;
    anchoTerreno=parseInt(anchoTerreno);

    //perímetro
    perímetro=(largoTerreno*2)+(anchoTerreno*2);

    //alambrado
    alambrado=perímetro*3;

    //mensajes
    mensaje="Para alambrar su terreno usted necesita: "+alambrado;
    alert(mensaje);

}
function Circulo () 
{
	var radio;
    var perimetro;
    var alambrado;
    var mensaje;

    //conversion a numero
    radio=document.getElementById('txtIdRadio').value;
    radio=parseInt(radio);

    perimetro=2*radio*3.14;

    alambrado=perimetro*3;

    mensaje="Para alambrar su terreno circular usted necesita: "+alambrado;
    mensaje=mensaje+" metros de alambre.";

    alert(mensaje);

}

function Materiales () 

{

    var largoTerreno;
    var anchoTerreno;
    var area;
    var cemento;
    var cal;
    var mensaje;

    //conversion a numero
    largoTerreno=document.getElementById('txtIdLargo').value;
    largoTerreno=parseInt(largoTerreno);

    anchoTerreno=document.getElementById('txtIdAncho').value;
    anchoTerreno=parseInt(anchoTerreno);

    //area de terreno
    area=anchoTerreno*largoTerreno;

    //bolsas
    cemento=2*area;
    cal=3*area;

    //mensaje
    mensaje=("Necesita comprar ");
    mensaje=mensaje+cemento;
    mensaje=mensaje+(" bolsas de cemento");

    mensaje=mensaje+(" y ");
    mensaje=mensaje+cal;
    mensaje=mensaje+(" bolsas de cal");

    alert(mensaje);
	
}
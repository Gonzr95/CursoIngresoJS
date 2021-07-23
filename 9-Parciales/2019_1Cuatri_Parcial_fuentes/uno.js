
/*
Autor: Gonzalo Rodriguez
Ejercicio: Parcial 01*/
function mostrar()
{
    var baseTriangulo;
    var ladoTriangulo;
    var perimetroTriangulo;
    var mensaje;

    //Ingreso de datos y parseo
    baseTriangulo=prompt("Ingrese la base de su triangulo equilatero");
    baseTriangulo=parseInt(baseTriangulo)

    ladoTriangulo=prompt("Ingrese el lado de su triangulo equilatero");
    ladoTriangulo=parseInt(ladoTriangulo);

    //operacion
    perimetroTriangulo=baseTriangulo+ladoTriangulo+ladoTriangulo;

    //mensaje
    mensaje=("El perimetro de su triangulo es de: ")+perimetroTriangulo+("cm.");
    alert(mensaje);

}

function mostrar()
{
    var numeroUno;
    var numeroDos;
    var mensaje;
    var resultadoResta;
    var resultadoSuma;

    numeroUno=prompt("Ingrese un numero");
    numeroDos=prompt("Ingrese el mismo u otro numero");
    
    if(numeroUno==numeroDos)
    {
        mensaje=numeroUno+numeroDos;
        alert(mensaje);
    }
    else
    {
        numeroUno=parseInt(numeroUno);
        numeroDos=parseInt(numeroDos);
        if(numeroUno>numeroDos)
        {
            resultadoResta=numeroUno-numeroDos;
            mensaje=resultadoResta;
        }
        else
        {
            resultadoSuma=numeroUno+numeroDos;
            mensaje=resultadoSuma;
        }
    }
    if(resultadoResta>10)
    {
        mensaje=("La resta es: ")+resultadoResta+(" y superó el 10.");
    }
    alert(mensaje);

} 


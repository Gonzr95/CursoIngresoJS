/*
Autor Gonzalo Rodriguez
Ejercicio: TP 04
/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo ocnsumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

 */
function CalcularPrecio () 
{
    var lamparitaPrecioUnitario;
    var cantidad;
    var descuento;
    var mensaje;
    var precioFinal;
    var marca;
    var valorDescontado;
    var IIBB;
    var IIBBcalculado;
    var validador;     // descuento noDescuento

    lamparitaPrecioUnitario=35;
    valorDescontado=0;
    IIBB=10;

    cantidad=document.getElementById('txtIdCantidad').value;
    cantidad=parseInt(cantidad)
    marca=document.getElementById('Marca').value;

     /*if(cantidad>5)     // A     VERSION SOLO IF
     {
         descuento=50;
     }
     else
     {
         if(cantidad == 5 )              //B
         {
             if(marca == "ArgentinaLuz")
             {
                descuento=40;
             }
             else
             {
                 descuento=30; 
             }
         }
         else
         {
             if(cantidad == 4)                                  // C
             {
                if(marca == "ArgentinaLuz" || marca == "FelipeLamparas")
                {
                    descuento=25;
                }
                else
                {
                    descuento=20;
                }
             }
             else
             {
                 if(cantidad == 3)                                      // D
                 {
                     if(marca == "ArgentinaLuz")
                     {
                         descuento=15
                     }
                     else
                     {
                         if(marca == "FelipeLamparas")                // E
                         {
                             descuento=10;
                         }
                         else
                         {
                             descuento=5;
                         }
                     }

                 }
             }
         }
         
     }
     
     //valor descontado
     valorDescontado=lamparitaPrecioUnitario/100*descuento;

     //Importe final
     precioFinal=(lamparitaPrecioUnitario-valorDescontado)*cantidad;

     //IIBB                      E
     if(precioFinal>120)
     {
         IIBBcalculado=precioFinal/100*IIBB;
         precioFinal=precioFinal+IIBBcalculado;
         mensaje=("El valor final es de: ")+precioFinal+("$, esto incluye el IIBB de: ")+IIBBcalculado+("$.");
     }
     else //Mensaje sin IIBB
     {
        mensaje="El importe final es de: "+precioFinal+("$.");
     }
     
     //Final
     document.getElementById('txtIdprecioDescuento').value=mensaje;
     */
 
                            //VERSION SOLO SWITCH  impuesto acordarse del impuesto va con if

    /*
    Autor: Gonzalo Rodriguez
    Ejercicio: TP 04 (SOLO SWITCH)
    */
    switch(cantidad)
    {
        case 1:
        case 2:
            descuento=0;
        break;
        case 3:
            switch(marca)
            {
                case "ArgentinaLuz":
                    descuento=15;
                break;
                case "FelipeLamparas":
                    descuento=10;
                break;
                default:
                    descuento=5;
                break;
            }
        break;
        case 4:
            switch(marca)
            {
                case "ArgentinaLuz":
                case "FelipeLamparas":
                    descuento=25;
                break;
                default:
                    descuento=20
                break;
            }
        break;
        case 5:
            switch(marca)
            {
                case "ArgentinaLuz":
                    descuento=40;
                break;
                default:
                    descuento=30;
                break;
            }
        break;
        default:
            descuento=50;
        break;
    }

    //Precios
    valorDescontado=lamparitaPrecioUnitario*cantidad/100*descuento;
    precioFinal=(lamparitaPrecioUnitario*cantidad)-valorDescontado;

    //IIBB
    if(precioFinal>120)
     {
         IIBBcalculado=precioFinal/100*IIBB;
         precioFinal=precioFinal+IIBBcalculado;
         mensaje=("El valor final es de: ")+precioFinal+("$, esto incluye el IIBB de: ")+IIBBcalculado+("$.");
     }
     else //Mensaje sin IIBB
     {
        mensaje="El importe final es de: $"+precioFinal;
     }
     document.getElementById('txtIdprecioDescuento').value=mensaje;
}


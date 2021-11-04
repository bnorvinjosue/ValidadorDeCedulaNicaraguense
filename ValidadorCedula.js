'use strict';
/*
 *  Validador de Número de Cédula Nicaragüense
 *  Copyright (C) 2021 Norvin Bustamante <norving@butamante.rocks>
*/

/*Funcion para validar Fecha de Cedula*/
function validarFecha(codigo)
{
    let res = false;
    let day = codigo.substr(3,2);
    let mounth =codigo.substr(5,2);
    /*Valida si el mes es verdadero*/
    if(mounth<=12)
    {
        /*Valida si contiene los 31 dia del año, llega hasta el 7 porque despues de julio agosto tambien tiene 31 dias en el*/
        if(mounth<=7){
            /*Valida si es impar*/
            if(mount& 1)
            {
                if(day<=31 && day>=1)
                {
                    res=true;
                    return res;
                }else{
                    return res;
                }
            }else
            {
                if (mount==2)
                {
                    /*Valida si es otro mes que febrero*/
                    if(day<=29 && day>=1)
                    {
                        res=true;
                        return res;
                    }
                    else
                    {
                        return res;
                    }
                }
                else
                {
                    if(day<=30 && day>=1)
                    {
                        res=true;
                        return res;
                    }
                    else
                    {
                        return res;
                    }
                }
            }
        }
        else
        {
            if (mounth%2 == 0)
            {
                if(day<=31 && day>=1)
                {
                    res=true;
                    return res;
                }else{
                    return res;
                }
            }
            else
            {
                if(day<=30 && day>=1)
                {
                    res=true;
                    return res;
                }
                else
                {
                    return res;
                }

            }
        }
    }
    else
    {
        return res;
    }
}
/*Funcion para validar Letra*/
function validarletra(cedula,letras="ABCDEFGHJKLMNPQRSTUVWXY")
{
    let letraCedula = cedula.replaceAll(/-/g,'').substr('-1','1');
    let numero = parseInt(cedula);
    let letra = numero-Math.floor(numero/23)*23
    if(letras.substr(letra,1)==letraCedula){
        return true;
    }else
    {
        return false
    }

}
function validarCedula(cedula)
{
    /*Declaración de variables*/
    let  res = false;
    let letras = 'ABCDEFGHJKLMNPQRSTUVWXY';
    let expresion = /[0-9]{13}[A-Za-z]{1}/g;
    let codigo = cedula.replaceAll(/-/g,'');
    let test = expresion.test(codigo);
    /*Valida si contiene todos los digitos de la cedula de lo contrario regresa un falso*/
    if(test){
        /*Valida la fecha de nacimiento*/
        if(validarFecha(codigo))
        {
            /*Valida la letra y devuelve la respuesta final con un true o false*/
            return validarletra(codigo);
        }
        else
        {
            return  res;
        }
    }
    else
    {
        return res;
    }
}

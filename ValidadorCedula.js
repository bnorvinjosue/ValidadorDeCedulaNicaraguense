'use strict';
/*
 *  Validador de Número de Cédula Nicaragüense
 *  Copyright (C) 2021 Norvin Bustamante
*/

/* Función para validar Fecha de Cédula */
function validarFecha(codigo) {
    const day = parseInt(codigo.substr(3, 2), 10);
    const month = parseInt(codigo.substr(5, 2), 10);

    if (month < 1 || month > 12) return false;

    // Cantidad de días por mes (sin validar bisiesto porque la cédula lo permite hasta 29 en febrero)
    const diasPorMes = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

    return day >= 1 && day <= diasPorMes[month - 1];
}

/* Función para validar Letra */
function validarLetra(cedula, letras = "ABCDEFGHJKLMNPQRSTUVWXY") {
    const codigo = cedula.replace(/-/g, '');
    const letraCedula = codigo.slice(-1); // Último carácter
    const numero = parseInt(codigo.slice(0, -1), 10);

    const indice = numero % 23;
    return letras[indice] === letraCedula;
}

/* Función para validar Cédula completa */
function validarCedula(cedula) {
    const letras = 'ABCDEFGHJKLMNPQRSTUVWXY';
    const expresion = /^[0-9]{13}[A-Za-z]$/;
    const codigo = cedula.replace(/-/g, '');

    if (!expresion.test(codigo)) return false;
    if (!validarFecha(codigo)) return false;

    return validarLetra(codigo, letras);
}


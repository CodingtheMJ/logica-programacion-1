//Este es el script de JS para que funcione en consola, primer intento, exitoso con pruebas.

import promptSync from 'prompt-sync';
const prompt = promptSync();

function ordenarnumeros() {
    let num1 = Number(prompt("Ingresar un primer número: "));
    let num2 = Number(prompt("Ingresar un segundo número: "));
    let num3 = Number(prompt("Ingresar un tercer numero: "));

    let numeroMayor;
    if (num1 >= num2 && num1 >= num3)
        numeroMayor = num1;
    else if (num2 >= num1 && num2 >= num3)
        numeroMayor = num2;
    else if (num3 >= num2 && num3 >= num1)
        numeroMayor = num3;
    else {
        numeroMedio = num1;}

    let numeroMenor;
    if (num1 <= num2 && num1 <= num3)
        numeroMenor = num1;
    else if (num2 <= num1 && num2 <= num3)
        numeroMenor = num2;
    else if (num3 <= num2 && num3 <= num1)
        numeroMenor = num3;
    else {
        numeroMedio = num3;}

    let numeroMedio;
    if (num1 !== numeroMayor && num1 !== numeroMenor)
        numeroMedio = num1;
    else if (num2 !== numeroMayor && num2 !== numeroMenor)
        numeroMedio = num2;
    else if (num3 !== numeroMayor && num3 !== numeroMenor)
        numeroMedio = num3;
    else {
    numeroMedio = num2;}
    
    console.log("El orden de los números de mayor a menor es: " + numeroMayor + ", " + numeroMedio + ", " + numeroMenor);
    console.log("El orden de los números de menor a mayor es: " + numeroMenor + ", " + numeroMedio + ", " + numeroMayor);

    if (num1 === num2 && num2 === num3) {
        console.log("Los tres números son iguales.");
        return;
    }
}

ordenarnumeros();
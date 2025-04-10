//Este es el intento de Script para unirlo con el HTML. Empecé con el HTML, y luego empecé a llamarlo al JS con .getElementbyID

function ordenarnumeros() {
    let num1 = Number(document.getElementById("primernumero").value);
    let num2 = Number(document.getElementById("segundonumero").value);
    let num3 = Number(document.getElementById("tercernumero").value);

    let sonIguales = document.getElementById("sonIguales");
    let resultadoMayorMenor = document.getElementById("mayorAmenor");
    let resultadoMenorMayor = document.getElementById("menorAmayor");

    if (num1 === num2 && num2 === num3) {
        sonIguales.textContent = "Los tres números son iguales";
        return;
    }

    let numeroMayor;
        if (num1 >= num2 && num1 >= num3){
            numeroMayor = num1;}
        else if (num2 >= num1 && num2 >= num3){
            numeroMayor = num2;}
        else{
            numeroMayor = num3;}

    let numeroMenor;
        if (num1 <= num2 && num1 <= num3){
            numeroMenor = num1;}
        else if (num2 <= num1 && num2 <= num3){
            numeroMenor = num2;}
        else {
            numeroMenor = num3;}

    let numeroMedio;
        if ((num1 !== numeroMayor && num1 !== numeroMenor)) {
            numeroMedio = num1;}
        else if ((num2 !== numeroMayor && num2 !== numeroMenor)) {
            numeroMedio = num2;} 
        else if ((num3 !== numeroMayor && num3 !== numeroMenor)) {
            numeroMedio = num3;} 
        else {
            if (num1 !== numeroMayor && num1 !== numeroMenor) {
                numeroMedio = num1;} 
            else if (num2 !== numeroMayor && num2 !== numeroMenor) {
                numeroMedio = num2;}
            else {
                numeroMedio = numeroMenor;}
            }
            
resultadoMayorMenor.textContent = "Orden de mayor a menor: " + numeroMayor + ", " + numeroMedio + ", " + numeroMenor;
resultadoMenorMayor.textContent = "Orden de menor a mayor: " + numeroMenor + ", " + numeroMedio + ", " + numeroMayor;
}

//Quedó largo, pero funciona jaja. Yyy ya sabemos usar nuevas cositas :3 (.textcontent)

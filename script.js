function somar(num1, num2) {
    return num1 + num2;
}

function subtrair(num1, num2) {
    return num1 - num2;
}

function multiplicar(num1, num2) {
    return num1 * num2;
}

function dividir(num1, num2) {
    return num1 / num2;
}

function potencia(num1, num2) {
    return Math.pow(num1, num2);
}

function raiz(num1) {
    return Math.sqrt(num1);
}

function calcular(operacao) {
    var num1 = parseFloat(document.getElementById("num1").value);
    var num2 = parseFloat(document.getElementById("num2").value);
    var resultado;

    if (operacao === "somar") {
        resultado = somar(num1, num2);
    } else if (operacao === "subtrair") {
        resultado = subtrair(num1, num2);
    } else if (operacao === "multiplicar") {
        resultado = multiplicar(num1, num2);
    } else if (operacao === "dividir") {
        resultado = dividir(num1, num2);
    } else if (operacao === "potencia") {
        resultado = potencia(num1, num2);
    } else if (operacao === "raiz") {
        resultado = raiz(num1);
    }
    document.getElementById("resultado").innerText = "Resultado: " + resultado;
}



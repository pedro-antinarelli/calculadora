const operacoes = {
    somar: function (num1, num2) {
        return num1 + num2;
    },
    subtrair: function (num1, num2) {
        return num1 - num2;
    },
    multiplicar: function (num1, num2) {
        return num1 * num2;
    },
    dividir: function (num1, num2) {
        return num1 / num2;
    },
    potencia: function (num1, num2) {
        return Math.pow(num1, num2);
    },
    raiz: function (num1) {
        return Math.sqrt(num1);
    }
}

function calcular(operacao) {
    var num1 = parseFloat(document.getElementById("num1").value);
    var num2 = parseFloat(document.getElementById("num2").value);
    var resultado;

    if (operacoes.hasOwnProperty(operacao)) {
        resultado = operacoes[operacao](num1, num2);
    } else {
        console.log("Operação inválida");
    }
    document.getElementById("resultado").innerText = "Resultado: " + resultado;
}



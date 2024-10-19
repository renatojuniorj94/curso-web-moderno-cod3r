//01) Crie uma função que dado dois valores (passados como parâmetros) mostre no console a soma, subtração,multiplicação e divisão desses valores.

function Operadores(a, b) {
    console.log(a + b)
    console.log(a - b)
    console.log(a * b)
    console.log(a / b)
}

Operadores(4, 5)

//Correto! :D
//Outra maneira de fazer...

function calcularOperacoes (operador1, operador2) {
    console.log(operador1+operador2, operador1-operador2, operador1*operador2, operador1/operador2);
}

calcularOperacoes(1, 2)
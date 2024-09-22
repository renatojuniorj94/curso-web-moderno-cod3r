//'function' é palavra reservada de JS para determinar uma função
//função sem retorno
function imprimirSoma(a, b) {
    console.log(a + b)
}

imprimirSoma(2, 3)
imprimirSoma(2) //NaN (Not a number)
imprimirSoma(2, 10, 4, 5, 6) //Ele vai somar o dois primeiros números e ignorar os demais
imprimirSoma() //NaN

function soma(a, b = 0) { //Se não for passado nenhum valor a váriavel 'b', ele retornar como padrão '0'
    return a + b
}


console.log(soma(2, 3))
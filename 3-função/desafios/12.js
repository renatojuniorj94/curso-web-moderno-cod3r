//12)​ Faça um algoritmo que calcule o fatorial de um número.

function fatorial(num) {
    let texto = `!${num}`
    let fat = num
    if (num == 0 || num == 1) {
        return '!' + 1
    } else if (num >= 2) {
        for (let c = num; --c; c >= 1) {
            texto += ` x ${c}`
            fat *= c
        }
    }
    return texto + ' = ' + fat
}

console.log(fatorial(10))

//Correto! :D
//Outra maneira de fazer...

function fatorial (numero) {
    if(numero == 0){
        return 1
    } else {
        return numero * fatorial(numero - 1)
    }
}

console.log(fatorial(10))
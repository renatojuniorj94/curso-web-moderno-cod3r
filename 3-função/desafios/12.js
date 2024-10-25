//12)​ Faça um algoritmo que calcule o fatorial de um número.

function fatorial(num) {
    let texto = `!${num}`
    if (num == 0 || num == 1) {
        return 1
    } else if (num >= 2) {
        for (let c = num; --c; c >= 1) {
            texto += ` x ${c}`
        }
    }
    return texto
}

console.log(fatorial(10))
//Hoisting (içamento) é um conceito em que a variavael é usada depois de ter sido usada
//Não funciona com let e const
console.log('a =', a)
var a = 2
console.log('a =', a)

function teste() {
    console.log('b =', b)
    var b = 2
    console.log('b =', b)
}

teste()
console.log('b =', b)
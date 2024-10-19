function restoDivisao(dividendo, divisor) {
    return dividendo % divisor
}

console.log(restoDivisao(43, 6))

//Correto! :D
//Outra maneira de fazer...

function divisao (dividendo, divisor) {
    console.log("Resultado: " + Math.floor(dividendo/divisor));
    console.log(`Resto: ${dividendo % divisor}`)
}

divisao(11, 4)
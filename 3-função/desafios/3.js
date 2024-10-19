function Base(base, expoente) {
    const resultado = base ** expoente
    console.log(`Base = ${base}, expoente = ${expoente} e o resultado é ${resultado}`)
}

Base(2, 3)

//Correto! :D
//Outra maneira de fazer...

function expoente (base, expoente) {
    //Podemos fazer de 2 modos
    //Método antigo:
    let resultado = Math.pow(base, expoente)
    //Método novo:
    resultado = base ** expoente

    return resultado
}

console.log(expoente(2, 3))
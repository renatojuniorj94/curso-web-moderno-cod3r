function getInteiroAleatioEntre(min, max) {
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

let opcao = -1

//Do while é a única expressão que é declarada no final

do {
    opcao = getInteiroAleatioEntre(-1, 10)
    console.log(`Opção escolhida foi ${opcao}`)
} while (opcao != -1)

console.log('Até a proxima!')
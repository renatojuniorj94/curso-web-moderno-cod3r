function getInteiroAleatioEntre(min, max) {
    const valor = Math.random() * (max - min) + min
    console.log(Math.random())
    console.log(valor)
    return Math.floor(valor)
}

let opcao = 0

while (opcao != -1) {
    opcao = getInteiroAleatioEntre(-1, 10)
    console.log(`Opção escolhida foi ${opcao}`)
}

console.log('Até a proxima!')
const { functions } = require("lodash")

function esperarPor(tempo = 2000) {
    return new Promise(function(resolve) {
        setTimeout(() => resolve(), tempo)
    })
}

/* esperarPor()
    .then(() => console.log('Executando promise 1...'))
    .then(esperarPor)
    .then(() => console.log('Executando promise 2...'))
    .then(esperarPor)
    .then(() => console.log('Executando promise 3...')) */

function retornarValor() {
    return new Promise(resolve => {
        setTimeout(() => resolve(10), 5000)
    })
}

async function retornarValorRapido() {
    return 20
}

//A mesma função abaixo com asyn/await:

async function executar() {
    /* let valor = await retornarValor() */
    let valor = await retornarValorRapido()

    await esperarPor(1500)
    console.log(`Asynx/await ${valor}...`)
    
    await esperarPor(1500)
    console.log(`Asynx/await ${valor}...`)
    
    await esperarPor(1500)
    console.log(`Asynx/await ${valor}...`)

    return valor + 3
}

executar()
/* executar().then(console.log) */ //retornando a função com 'return valor + 3'

async function executarDeVerdade() {
    const resposta = await executar()
    console.log(resposta)
}

executarDeVerdade()
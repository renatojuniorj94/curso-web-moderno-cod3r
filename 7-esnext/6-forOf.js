//Enquanto o for intera em cima de índica o forOf ele intera em cima de valores
for (let letra of "Cod3r") {
    console.log(letra)
}

const assuntosEcma = ['Map', 'Set', 'Promise']

for(let i in assuntosEcma) {
    console.log(i)
}

for(let assunto of assuntosEcma) {
    console.log(assunto)
}

const assuntoMap = new Map([
    ['Map', { abordado: true}],
    ['Set', { abordado: true}],
    ['Promise', { abordado: false} ]
])

for(let assunto of assuntoMap) {
    console.log(assunto)
}

for (let chave of assuntoMap.keys()) {
    console.log(chave)
}

for (let chave of assuntoMap.values()) {
    console.log(chave)
}
console.log('\n')

//Entries(entradas) com destructuring([chave, valor])
for (let [chave, valor] of assuntoMap.entries()) {
    console.log(chave, valor)
}

//Set()
const set = new Set(['a', 'b', 'c'])
for (let letra of set) {
    console.log(letra)
}
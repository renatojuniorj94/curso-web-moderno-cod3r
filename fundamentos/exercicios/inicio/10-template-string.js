const nome = 'Renato'
const concatenacao = 'Olá ' + nome + '!' //Aqui não pode haver quebra de linha.
console.log(concatenacao)

const template = `
    Olá
    ${nome}!`;
console.log(concatenacao, template)

//Expressões
console.log(`1 + 1 = ${1 + 1}`)

//Arrow function
const up = texto => texto.toUpperCase()
console.log(`Ei... ${up('cuidado')}!`)
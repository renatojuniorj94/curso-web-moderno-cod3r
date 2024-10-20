/* 
capitalInicial: 100 (R$ 100,00)
taxaDeJuros: 10/100 (10% ao mês, convertido para decimal: 0,10)
tempoDeAplicacao: 2 meses
*/

function jurosSimples(capitalInicial, taxaDeJuros, tempoDeAplicacao) {
    const resultado = capitalInicial + (capitalInicial * taxaDeJuros * tempoDeAplicacao)
    const numeroFormatado = 'R$ ' + resultado.toLocaleString('pt-BR')
    return console.log(`Capital inicial = R$ ${capitalInicial.toLocaleString('pt-BR')}`),
    console.log(`Taxa de juros (% ao mês) = ${taxaDeJuros}`),
    console.log(`Templo de aplicação (meses) = ${tempoDeAplicacao}`),
    console.log(`Resultado = ${numeroFormatado}`)
}

function jurosCompostos(capitalInicial, taxaDeJuros, tempoDeAplicacao) {
    const resultado = capitalInicial * (1 + taxaDeJuros) ** tempoDeAplicacao
    const resultadoFormatado = 'R$ ' + resultado.toLocaleString('pt-BR')
    return console.log(`Capital inicial = R$ ${capitalInicial.toLocaleString('pt-BR')}`),
    console.log(`Taxa de juros (% ao mês) = ${taxaDeJuros}`),
    console.log(`Tempo de aplicação (meses) = ${tempoDeAplicacao}`),
    console.log(`Resultado = ${resultadoFormatado}`)
}

jurosSimples(100, 10/100, 2)
console.log()
jurosCompostos(100, 10/100, 2)

//Correto! :D
//Outra maneira de fazer...

function jurosSimples (capitalInicial, taxa, tempo) {
    return capitalInicial + (capitalInicial * taxa * tempo)
}

function jurosCompostos (capitalInicial, taxa, tempo) {
    return capitalInicial * (1 + taxa) ** tempo
}

console.log(jurosSimples(100, 10/100, 2));
console.log(jurosCompostos(100, 10/100, 2));
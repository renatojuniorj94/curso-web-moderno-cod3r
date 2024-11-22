/*
Escreva uma função que receba a idade de uma pessoa em anos e retorne a mesma idade em dias.
OBS: Considere que um ano tem 365 dias. Desconsidere anos bissextos (com 366 dias) e desconsidere também dias decorridos desde o último aniversário.
Exemplos:
converterIdadeEmAnosParaDias(25) // retornará 9125
converterIdadeEmAnosParaDias(70) // retornará 25550
*/

function anosEmDias(idade) {
    return console.log(idade * 365)
}

const idadeAnos = function(idade) {
    return console.log(idade * 365)
}

const anosParaDias = idade => console.log(idade * 365)

anosEmDias(25)
idadeAnos(30)
anosParaDias(70)

//Correto! :D
//Outra maneira de fazer...

function converterIdadeEmAnosParaDias(idadeEmAnos) { 
const diasDoAno = 365 
return diasDoAno * idadeEmAnos 
}
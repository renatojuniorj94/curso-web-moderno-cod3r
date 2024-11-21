/* 
Crie uma função que retorna a string "Olá, " concatenada com um argumento text (a ser passado para a função) e com ponto de exclamação "!" no final.

Exemplos:
cumprimentar("Renato") // retornará "Olá, Renato!"
*/

function saudacao(nome) {
    console.log(`Olá, ${nome}!`)
}
saudacao('Marizinha')

//Com arrow function
const cumprimento = nome => `Olá, ${nome}!`
console.log(cumprimento('Renato'))
/*
Como definir uma string:
Asplas duplas ""
Asplas simples ''
Crase `` (Template string)
*/

const escola = "Cod3r"
console.log(escola.charAt(4)) //Exibe o quarto caractere da string
console.log(escola.charAt(5))
console.log(escola.charCodeAt(3))
console.log(escola.indexOf('3'))

console.log(escola.substring(1))
console.log(escola.substring(0, 3))

console.log('Escola '.concat(escola).concat("@2"))
let meuTime = "Flamengo"
console.log(`Hoje é dia de ${meuTime}`)
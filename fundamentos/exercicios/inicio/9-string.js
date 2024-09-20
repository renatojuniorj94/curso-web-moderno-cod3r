/*
Como definir uma string:
Asplas duplas ""
Asplas simples ''
Crase `` (Template string)
*/

const escola = "Cod3r"
console.log(escola.charAt(4)) //Exibe o quarto caractere da string
console.log(escola.charAt(5)) //Se solicitar uma string que não existe, ele não apresenta erro, retorna um valor vazio
console.log(escola.charCodeAt(3)) //charCodeAt() retorna o Unicode do caractere em uma posição especificada em uma string.
console.log(escola.indexOf('3')) //Pesquisa se existe um determinado número ou caractere, e retorna sua posição, nesse caso seria o número '3'

console.log(escola.substring(1)) //extrai uma parte de uma string, nesse caso retorna 'od3r'
console.log(escola.substring(0, 3)) //Vai do indice 0 até o 3, sem incluir o 3, nesse caso ele retornar 'Cod'

//Concatenação
console.log('Escola '.concat(escola).concat("!"))
//Ou
console.log('Escola ' + escola + "!")


console.log(escola.replace(3, 'e')) // replace() pesquisa um valor em uma string e retorna uma nova string com o(s) valor(es) especificado(s) substituído(s)
console.log(escola.replace(/\w/g, 'e')) //Utilazando ReGex(Expressões regulares)
console.log('Ana,Maria,Pedro'.split(',')) //split() divide uma string em uma array de substrings e retorna a array

/* console.log('Escola '.concat(escola).concat("@2"))
let meuTime = "Flamengo"
console.log(`Hoje é dia de ${meuTime}`) */
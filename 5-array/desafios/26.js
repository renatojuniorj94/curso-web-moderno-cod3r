/* 
Desenvolva uma função que receba uma frase como parâmetro e retorne essa string somente com as consoantes, 
ou seja, sem as vogais.
Exemplos:
removerVogais("Cod3r") // retornará "Cd3r" 
removerVogais("Fundamentos") // retornará "Fndmnts"
*/

function removerVogais(string) {
    let vogais = ['a', 'A', 'e', 'E', 'i', 'I', 'o', 'O', 'u', 'U']
    
    vogais.forEach(vogal => string = string.replace(vogal, ''))

    return string
}

console.log(removerVogais("Cod3r"))
console.log(removerVogais("Fundamentos"))
console.log(removerVogais("Renato"))
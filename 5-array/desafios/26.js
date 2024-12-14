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

//Correto! :D
//Outra maneira de fazer:

//Resolução 1:
function removerVogais(frase) { 
  const vogais = ["a", "A", "e", "E", "i", "I", "o", "O", "u", "U"] 
   
  vogais.forEach( vogal => frase = frase.replace(vogal, '') ) 
 
  return frase 
}

//Resolução 2:
function removerVogais(frase) { 
  return frase.replace(/[aeiou]/ig, '') 
}

/* 
2.1. Primeiro argumento: /[aeiou]/ig
Isso é uma expressão regular (regex). Vamos desmembrar:

/[aeiou]/: Os colchetes indicam um conjunto de caracteres. Aqui, está dizendo para encontrar qualquer letra que seja uma vogal (a, e, i, o, u).
i: É uma flag que torna a busca case-insensitive, ou seja, ela encontra tanto maiúsculas quanto minúsculas (ex.: "A", "e").
g: É a flag global, que faz a busca se aplicar a todas as ocorrências na string, não apenas à primeira.
2.2. Segundo argumento: ''
É a string que substituirá as correspondências encontradas pela regex.
Aqui, é uma string vazia (''), o que significa que as vogais encontradas serão removidas.

As barras / / em JavaScript são usadas para definir expressões regulares (regex), que são padrões utilizados para realizar buscas, correspondências ou substituições em strings.

As barras / / delimitam o início e o fim da expressão regular.
Entre as barras, você especifica o padrão que deseja buscar.
Após as barras, você pode incluir flags que modificam o comportamento da busca.
*/
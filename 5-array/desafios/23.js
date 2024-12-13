/* 
Criar uma função que receba uma string como parâmetro e conte quantas palavras tem nela.
📕Considere que todas as palavras só são separadas por um espaço.
Exemplos:
contarPalavras("Sou uma frase") // retornará 3 
contarPalavras("Me divirto aprendendo a programar") // retornará 5
*/

function contarPalavra(frase) {
    let recebeValor = frase
    let resultado = recebeValor.split(' ').length
    return resultado
}

console.log(contarPalavra("Sou uma frase"))
console.log(contarPalavra("Me divirto aprendendo a programar"))

//Arrow function
const contarPalavra2 = (frase) => frase.split(' ').length

console.log(contarPalavra2("Sou uma frase"))
console.log(contarPalavra2("Me divirto aprendendo a programar"))

//Correto! :D
//Outra maneira de fazer:

//Resolução:
function contarPalavras(frase){ 
  const palavras = frase.split(" ") 
  return palavras.length 
}
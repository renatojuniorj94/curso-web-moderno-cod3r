/* 
Elabore uma função que recebe um número como parâmetro e retorne uma string com o símbolo "+"  na 
quantidade especificada no parâmetro.
Exemplos:
simboloMais(2) // retornará "++" 
simboloMais(4) // retornará "++++"
*/

function simboloMais(repetições) {
    let resultado = []
    for(i = 1; i <= repetições; i++) {
        resultado.push('+')
    }
    return console.log(resultado.join(""))
}

simboloMais(2)
simboloMais(4)
simboloMais(10)

//Correto! :D
//Outra maneira de fazer:

//Resolução 1:
function simboloMais(quantidade) { 
 let resultado = '' 
 
  for(let i = 0; i < quantidade; i++) 
    resultado += '+' 
 
  return resultado 
}

//Resolução 2:
function simboloMais(quantidade) { 
  return Array(quantidade).fill('+').join('') 
}

//Resolução 3:
function simboloMais(quantidade) { 
  return "+".repeat(quantidade) 
}
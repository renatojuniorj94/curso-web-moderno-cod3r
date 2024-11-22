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
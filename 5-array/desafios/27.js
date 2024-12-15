/* 
Desenvolva uma função que recebe um objeto como parâmetro e retorne um outro objeto que corresponde ao ao 
objeto recebido como parâmetro, porém com as posições das chaves e valores invertidas, conforme exemplo a 
seguir:
Exemplo:
inverter({ a: 1, b: 2, c: 3}) // retornará { 1: "a", 2: "b", 3: "c"}
*/

//Resolução 1:
function inverter(objeto) { 
  const objetoInvertido = {} 
 
  Object.entries(objeto).forEach( parChaveValor => { 
    const chave = 0, 
          valor = 1 
 
    objetoInvertido[ parChaveValor[valor] ] = parChaveValor[chave] 
  }) 
 
  return objetoInvertido 
}

//Resolução 2:
function inverter(objeto) { 
  const paresDeChaveValorInvertidos = Object.entries(objeto) 
          .map( parChaveValor => parChaveValor.reverse() ) 
 
  return Object.fromEntries(paresDeChaveValorInvertidos) 
}

console.log(inverter({ a: 1, b: 2, c: 3}))
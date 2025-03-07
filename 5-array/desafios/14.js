/* 
Desenvolva uma função que recebe como parâmetro um objeto e retorne um array de arrays, em que cada 
elemento é um array formado pelos pares chave/valor que corresponde a um atributo do objeto. Observe os 
exemplos abaixo para um melhor entendimento:
Exemplos:
objetoParaArray({ 
  nome: "Maria", 
  profissao: "Desenvolvedora de software" 
}) // irá retornar [["nome", "Maria"], ["profissao", "Desenvolvedora de Software"]] 
 
objetoParaArray({ 
  codigo: 11111, 
  preco: 12000 
}) // irá retornar [["codigo", 11111], ["preco", 12000]]
*/

function objetoParaArray(objeto) {
  const resultado = []
  for (let chave in objeto) {
    // Adicionar pares [chave, valor] ao array
    resultado.push([chave, objeto[chave]])
  }
  console.log(resultado) // Apenas exibe o resultado
  return resultado // Retorna o array com os pares
}

objetoParaArray({
  nome: "Maria",
  profissao: "Desenvolvedora de software"
})

//Correto! :D
//Outra maneira de fazer:

//Resolução 1:
function objetoParaArray(objeto) {
  const resultado = []

  for (let chave in objeto)
    resultado.push([chave, objeto[chave]])

  return resultado
}

//Resolução 2:
function objetoParaArray(objeto) {
  const chaves = Object.keys(objeto)
  const resultado = chaves.map(chave => [chave, objeto[chave]])

  return resultado
}

//Resolução 3:
function objetoParaArray(objeto) {
  return Object.entries(objeto)
}
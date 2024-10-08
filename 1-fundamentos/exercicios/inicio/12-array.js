const valores = [7.7, 8.9, 6.3, 9.2]
console.log(valores[0], valores[3])
console.log(valores[5]) //Se não existir o item, ele retorna 'undefined'

//Adicionando um item em um array
valores[4] = 10
console.log(valores)

//Adicionando em uma determinada posição
valores[10] = 11
console.log(valores) //[ 7.7, 8.9, 6.3, 9.2, 10, <5 empty items>, 11 ]
console.log(valores.length)

//Adicionando item no final de um array
valores.push({id: 3}, false, null, 'teste')
console.log(valores)

//Removendo o último item de um array
console.log(valores.pop())
console.log(valores)
//Outra maneira de remover: (So remove o valor, mas mantem um espaço na memoria da array)
delete valores[0]
console.log(valores)

console.log(typeof valores) //object
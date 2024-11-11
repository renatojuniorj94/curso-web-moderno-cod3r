//Object.preventExtensions > Você não consegue adicionar novos atributos ao objeto, pode até excluir, mas não consegue criar novos atributos.
const produto = Object.preventExtensions({
    nome: 'Qualquer', preco: 1.99, tag: 'promoção'
})

// isExtensible > testa se um objeto pode ser extendido
console.log('Extensível', Object.isExtensible(produto)) // Extensível false

produto.nome = 'Borracha'
produto.descricao = 'Borracha escolar branca'
delete produto.tag
console.log(produto)

//Object.seal > Fecha o objeto, não pode adicionar e não pode excluir atributos, somente modificar os atributos já existentes.
const pessoa = {nome: 'Juliana', idade: 35}
Object.seal(pessoa)
console.log('Selado:', Object.isSealed(pessoa)) //Selado: true
delete pessoa.nome
pessoa.sobrenome = 'Silva'
pessoa.idade = 29
console.log(pessoa)

//Object.freeze = selado + valores constantes
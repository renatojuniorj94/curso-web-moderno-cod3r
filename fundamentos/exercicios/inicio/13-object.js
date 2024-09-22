//Object não é a mesma coisa que json(JavaScript object notation)

const prod1 = {} //{} representa um objeto

//Adicionando chave(nome) e valor('Celular Ultra Mega')
prod1.nome = 'Celular Ultra Mega'
prod1.preco = 4998.90
prod1['Desconto legal'] = 0.40 //Evitar atributos com espaços

console.log(prod1)

//Criando chave e valor dentro da propria declaração de objeto
const prod2 = {
    nome: 'Camisa polo',
    preco: 79.90,
    obj: { //Objeto dentro de objeto
        tenis: 'Nike AIR',
        tipo1: 150.00,
        obj: {
            cor: 'preto',
            tamanho: [39, 40, 41]
        }
    }
}

//json
'{ "nome": "Camisa polo", "preco": 79.90 }'

console.log(prod2)
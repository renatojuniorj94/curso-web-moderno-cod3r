//Usando objeto literal
const obj1 = {}
console.log(obj1) // {}

//Object em JS
console.log(typeof Object, typeof new Object) //function
const obj2 = new Object
console.log(obj2) // {}

//Funções construtoras
function Produto(nome, preco, desc) {
    this.nome = nome //this torna a variavel pública (global)
    this.getPrecoComDesconto = () => {
        return 'R$ ' + (preco * (1 - desc)).toFixed(2).replace('.', ',')
    }
}

const p1 = new Produto('Caneta', 7.99, 0.15)
const p2 = new Produto('Notebook', 2998.99, 0.25)
console.log(p1.getPrecoComDesconto(), p2.getPrecoComDesconto())

//Função factory
function criarFuncionario(nome, salarioBase, faltas) {
    return {
        nome,
        salarioBase,
        faltas,
        getSalario() {
            return (salarioBase / 30) * (30 - faltas)
        }
    }
}

const f1 = criarFuncionario('João', 7980, 4) //6916
const f2 = criarFuncionario('Maria', 11400, 1) //11020
console.log(f1.getSalario(), f2.getSalario())

//Object.create3
const filha = Object.create(null)
filha.nome = 'Marizinha'
console.log(filha)
console.log(filha.nome)

//Uma função famosa que retorna Objeto...
const fromJSON = JSON.parse('{"info": "Sou um JSON"}')
console.log(fromJSON.info) //Sou um JSON
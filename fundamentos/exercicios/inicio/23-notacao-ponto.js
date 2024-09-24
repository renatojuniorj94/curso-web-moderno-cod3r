console.log(typeof console) //object
console.log(Math.ceil(6.1))

const obj1 = {}
obj1.nome = 'Bola'
//Ou
obj1['nome'] = 'Bola2' //Subscrevendo a atribuição acima.
console.log(obj1)
console.log(obj1.nome)

function Obj(nome) {
    this.nome = nome
    this.exec = function() {
        console.log('Exec...')
    }
}

const obj2 = new Obj('Cadeira') //Atribuindo 'Cadeira' a 'nome'
const obj3 = new Obj('Mesa')
console.log(obj2.nome)
console.log(obj3.nome)
obj3.exec()
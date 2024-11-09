function meuObjeto() {}
console.log(meuObjeto.prototype) // {}

const obj1 = new meuObjeto
const obj2 = new meuObjeto
console.log(obj1.__proto__ === obj2.__proto__) // true
console.log(meuObjeto.prototype === obj1.__proto__) // true

meuObjeto.prototype.nome = 'Anônimo'
meuObjeto.prototype.falar = function() {
    console.log(`Bom dia! Meu nome é ${this.nome}`)
}

obj1.falar() // Bom dia! Meu nome é Anônimo

obj2.nome = 'Renato'
obj2.falar() // Bom dia! Meu nome é Renato

const obj3 = {}
obj3.__proto__ = meuObjeto.prototype
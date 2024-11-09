//Cadeia de protótipos (prototype chain)

Object.prototype.attr0 = 'Z'
const avo = { attr1: 'A'} //Avô tem como protótipo Object.prototype
const pai = {__proto__: avo, attr2: 'B'} //Pai tem como protótipo o avô
const filho = {__proto__: pai, attr3: 'C'} //Filho tem como protótipo o pai
console.log(filho.attr1) // A
console.log(filho.attr0) // Z (se não for definido, retorna 'undefined')

const carro = {
    velAtual: 0,
    velMax: 200,
    acelerarMais(delta) {
        if (this.velAtual + delta <= this.velMax) {
            this.velAtual += delta
        } else {
            this.velAtual = this.velMax
        }
    },
    status() {
        return `${this.velAtual}Km/h de ${this.velMax}`
    }
}

const ferrari = {
    modelo: 'F40',
    velMax: 324 // shadowing
}

const volvo = {
    modelo: 'V40',
    status() {
        return `${this.modelo}: ${super.status()}` //'super' funciona como 'this' só que é usado para referenciar protótipos
    }
}
/* class Pessoa {
    constructor(nome) {
        this.nome = nome //Tornando a variavel publica
    }

    falar() {
        console.log(`Meu nome é ${this.nome}`)
    }
}

const p1 = new Pessoa('João')
p1.falar() */

//Tranformar em uma função contrutora

function Pessoa(nome) {
    //this.nome = nome

    this.falar = function() {
        console.log(`Meu nome é ${nome}`)
    }
}
const p1 = new Pessoa('João')
p1.falar()
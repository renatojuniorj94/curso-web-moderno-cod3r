function Carro(velocidadeMaxima = 200, delta = 5) { //delta = 5> vai acelerar de 5 em 5.
    //Atributo privado, pertence somente a essa função
    let velocidadeAtual = 0

    //Metodo publico
    this.acelerar = function() { //this > é responsavel por tornar o metodo publico
        if (velocidadeAtual + delta <= velocidadeMaxima) {
            velocidadeAtual += delta
        } else {
            velocidadeAtual = velocidadeMaxima
        }
    }

    //metodo publico
    this.getVelocidadeAtual = function() {
        return velocidadeAtual
    }
}

const uno = new Carro
uno.acelerar()
console.log(uno.getVelocidadeAtual())

const ferrari = new Carro(350, 20)
ferrari.acelerar()
ferrari.acelerar()
ferrari.acelerar()
console.log(ferrari.getVelocidadeAtual())

console.log(typeof Carro)
console.log(typeof uno)
console.log(typeof ferrari)
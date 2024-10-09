//Função tradicional
let dobro = function(a) {
    return 2 * a
}

//Arrow function
dobro = (a) => {
    return 2 * a
}

//Arrow function em uma única linha, retorno implícito
//('dobro' = nome da função, 'a' = parâmetro da função, '=>' arrow function, '2 * a' = corpo da função)
dobro = a => 2 * a
console.log(dobro(Math.PI))

let ola = function() {
    return 'Olá'
}

//Arrow function sem parâmetros pré definidos (Usamos '()' vazio ou '_')
ola = () => 'Olá'
ola = _ => 'Olá'
console.log(ola())
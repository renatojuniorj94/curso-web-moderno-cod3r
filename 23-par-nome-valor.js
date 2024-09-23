// par Nome/Valor
const saudacao = 'Olá!' //contexto léxico 1

function exec() {
    const saudacao = 'Fala' //contexto léxico 2
    return saudacao
}

//Objetos são grupos aninhados de pares nome/valor
const cliente = {
    nome: 'Renato',
    idade: 30,
    peso: 88.4,
    endereco: {
        logradouro: 'Rua Muito legal',
        numero: 123,
        bairro: 'Felicidade'
    }
}

console.log(saudacao)
console.log(exec())
console.log(cliente)
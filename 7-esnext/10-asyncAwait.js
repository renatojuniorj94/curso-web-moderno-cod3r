//https://www.w3schools.com/js/js_async.asp
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function

const http = require('http')

const getTurma = (letra, callback) => {
    const letraMaiuscula = letra.toUpperCase()
    const url = `http://files.cod3r.com.br/curso-js/turma${letraMaiuscula}.json`
    return new Promise((resolve, reject) => {
        http.get(url, resposta => {
            let resultado = ''

            resposta.on('data', dados => {
                resultado += dados
            })

            resposta.on('end', () => {
                try {
                    resolve(JSON.parse(resultado))
                } catch (erro) {
                    reject(erro)
                }
            })
        })
    })
}

//Recurso do ES8
//Objetivo de simplicar o uso de promises...
//A palavra reservada 'await' só vai funcionar quando usarmos outra palavra reservada 'async'.
let obterAlunos = async () => {
    const turmaA = await getTurma('a')
    const turmaB = await getTurma('b')
    const turmaC = await getTurma('c')
    return [].concat(turmaA, turmaB, turmaC)
} //retorna um objeto AsyncFunction

obterAlunos()
    .then(alunos => alunos.map(alunos => alunos.nome))
    .then(nomes => console.log(nomes))

console.log(obterAlunos)
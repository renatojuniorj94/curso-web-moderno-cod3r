//Refatorando callback para promises
//Com promise...

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

/* let nomes = []
getTurma('a').then(alunos => {
    //console.log(alunos[0].nome)
    nomes = nomes.concat(alunos.map(a => `A: ${a.nome}`))
    console.log(nomes)
    getTurma('b').then(alunos => {
        nomes = nomes.concat(alunos.map(a => `B: ${a.nome}`))
        console.log(nomes)
        getTurma('c').then(alunos => {
            nomes = nomes.concat(alunos.map(a => `C: ${a.nome}`))
            console.log(nomes)
        })
    })
}) */

Promise.all([getTurma('a'), getTurma('b'), getTurma('c')])
    .then(turmas => [].concat(...turmas))
    .then(alunos => alunos.map(aluno => aluno.nome))
    .then(nomes => console.log(nomes))
    .catch(erro => console.log(erro.message))

getTurma('d').catch(erro => console.log(erro.message))
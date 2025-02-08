//Sem promise...

const http = require('http')
/* const { toLower, toUpper } = require('lodash') */
const getTurma = (letra, callback) => {
    const letraMaiuscula = letra.toUpperCase()
    const url = `http://files.cod3r.com.br/curso-js/turma${letraMaiuscula}.json`
    http.get(url, resposta => {
        let resultado = ''

        resposta.on('data', dados => {
            resultado += dados
        })

        resposta.on('end', () => {
            callback(JSON.parse(resultado))
        })
    })
}

let nomes = []
getTurma('a', alunos => {
    /* console.log(alunos[0].nome) */
    nomes = nomes.concat(alunos.map(a => `A: ${a.nome}`))
    console.log(nomes)
    getTurma('b', alunos => {
        nomes = nomes.concat(alunos.map(a => `B: ${a.nome}`))
        console.log(nomes)
        getTurma('c', alunos => {
            nomes = nomes.concat(alunos.map(a => `C: ${a.nome}`))
            console.log(nomes)
        })
    })
})
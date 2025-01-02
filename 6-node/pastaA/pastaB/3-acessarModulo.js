const moduloA = require('../../1-moduloA') //Se coloca em letra minuscula ('../../1-moduloa') não vai funcionar no linux
//Outra maneira de passar o caminho do arquivo, é clicando com botão direiro em cima do arquivo > copy path (copiar caminho). Mas não é a melhor pratica.
console.log(moduloA)
console.log(moduloA.ola)

//Importando arquivo node_modules > saudacao > index.js
const saudacao = require('saudacao')
console.log(saudacao.ola)

const mensagem = require('mensagem/msg')
console.log(mensagem)

const C = require('./pastaC')
console.log(C.ola2)

/* const http = require('http')
http.createServer((req, res) => {
    res.write('Bom dia!')
    res.end()
}).listen(8080) //Ao executar o código, digitar "localhost:8080" */
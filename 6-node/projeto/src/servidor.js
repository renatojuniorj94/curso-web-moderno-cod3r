const porta = 3003

const express = require('express')
const app = express()
const bancoDeDados = require('./bandoDeDados')

app.get('/produtos', (req, res, next) => {
    console.log('Middleware 1...')
    next()
})

app.get('/produtos', (req, res, next) => {
    //Antes > res.send({ nome: 'Notebook', preco: 123.45}) //O metódo send vai converter o objeto para JSON
    res.send(bancoDeDados.getProdutos(req.params.id))
})

app.get('/produtos/:id', (req, res, next) => {
    res.send(bancoDeDados.getProduto())
})

app.post('/produtos', (req, res, next) => {
    const produto = bancoDeDados.salvarProduto({
        nome: req.body.name,
        preco: req.body.preco
    })
    res.send(produto)
})

app.listen(porta, () => {
    console.log(`Servidor está executando na porta ${porta}.`)
})
const bodyParser = require('body-parser')
const express = require('express')
const app = express()

app.use(express.static('.'))
//As duas linhas abaixo, por enquanto não estão sendo usadas.
app.use(bodyParser.urlencoded({ extended: true }))
app.get('/teste', (req, res) => res.send(new Date)) //Função middleware

app.listen(8080, () => console.log('Executando...'))
app.listen(8080, () => console.log('Executando...'))
app.listen(8080, () => console.log('Executando...'))
app.listen(8080, () => console.log('Executando...'))
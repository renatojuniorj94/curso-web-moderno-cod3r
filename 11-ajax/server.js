const bodyParser = require('body-parser')
const express = require('express')
const app = express()

app.use(express.static('.'))
app.use(bodyParser.json())

app.get('/teste', (req, res) => res.send(new Date)) //Função middleware
app.listen(8080, () => console.log('Executando...'))

console.log(bodyParser)
console.log(app)
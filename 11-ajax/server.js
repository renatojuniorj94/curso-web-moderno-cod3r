const bodyParser = require('body-parser')
const express = require('express')
const app = express()

app.use(express.static('.'))
app.use(bodyParser.json())

app.get('/teste', (req, res) => res.send('Ok')) //Função middleware
app.listen(8080, () => console.log('Executando...'))
const bodyParser = require('body-parser')
const express = require('express')
const app = express()

app.use(express.static('.'))
//As duas linhas abaixo, por enquanto não estão sendo usadas.
app.use(bodyParser.urlencoded({ extended: true }))
app.get('/teste', (req, res) => res.send(new Date)) //Função middleware

const multer = require('multer')

const storage = multer.diskStorage({
    destination: function (req, file, callback) {
        callback(null, './upload')
    },
    filename: function (req, file, callback) {
        callback(null, `${Date.now()}_${file.originalname}`)
    }
})

const upload = multer({ storage }).single('arquivo')

app.post('/upload', (req, res) => {
    upload(req, res, err => {
        if (err) {
            return res.end('Ocorreu um erro')
        }

        res.end('Concluído com sucesso!')
    })
})

app.listen(8080, () => console.log('Executando...'))
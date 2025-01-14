const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json'
const axios = require('axios')

axios.get(url).then(response => {
    const funcionarios = response.data
    console.log(funcionarios)
})

/* 
Desafio:
Exibir mulher chinesa com o menor salario.
dica:
Podemos usar map, filter e reduce.
*/
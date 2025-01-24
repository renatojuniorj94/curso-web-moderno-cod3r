const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json'
const axios = require('axios')

axios.get(url).then(response => {
    const funcionarios = response.data
    //console.log(funcionarios)
})

/* 
Desafio:
Exibir mulher chinesa com o menor salario.
dica:
Podemos usar map, filter e reduce.
*/

async function encontrarMenorSalario() {
    try {
        // Faz a requisição HTTP para obter os dados
        const response = await fetch(url);
        const funcionarios = await response.json();

        // Filtrar mulheres chinesas
        const mulheresChinesas = funcionarios.filter(f => f.pais === "China" && f.genero === "F");

        // Encontrar a mulher chinesa com o menor salário
        const mulherComMenorSalario = mulheresChinesas.reduce((menor, atual) => {
            return atual.salario < menor.salario ? atual : menor;
        });

        // Exibir o resultado
        //console.log("A mulher chinesa com o menor salário é:");
        //console.log(mulherComMenorSalario);
    } catch (error) {
        console.error("Erro ao obter os dados:", error.message);
    }
}

// Chamar a função
encontrarMenorSalario();
/* 
Desafio:
Exibir mulher chinesa com o menor salario em um arquivo json.
dica:
Podemos usar map, filter e reduce.
*/

const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json'
const axios = require('axios')

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
        console.log("A mulher chinesa com o menor salário é:");
        console.log(mulherComMenorSalario);
    } catch (error) {
        console.error("Erro ao obter os dados:", error.message);
    }
}

// Chamar a função
encontrarMenorSalario();

//Correto! :D
//Resolução do curso:

const chineses = funcionarios => funcionarios.pais === 'China'
const mulheres = funcionarios => funcionarios.genero === 'F'
const menorSalario = (funcionario, funcionarioAtual) => {
    return funcionario.salario < funcionarioAtual.salario ? funcionario : funcionarioAtual
}

axios.get(url).then(response => {
    const funcionarios = response.data
    /* console.log(funcionarios) */

    //mulher chinesa com menor salário?
    const func = funcionarios
        .filter(chineses)
        .filter(mulheres)
        .reduce(menorSalario)

    console.log(func)
})
/* 
17)​ Um funcionário irá receber um aumento de acordo com o seu plano de 
trabalho, de acordo com a tabela abaixo:  
Plano  Aumento 
A  10% 
B  15% 
C  20% 
Faça uma função que leia o plano de trabalho e o salário atual de um funcionário e calcula e imprime o seu 
novo salário. Use a estrutura switch e faça um caso default que indique que o plano é inválido. 
*/

function planoDeAumento(plano, salario) {
    switch(plano){
        case 'a':
            return `R$ ${10 * (salario / 100) + salario}`
        case 'b':
            return `R$ ${15 * (salario / 100) + salario}`
        case 'c':
            return  `R$ ${20 * (salario / 100) + salario}`
        default:
            return 'O plano informado é inválido!'
    }
}

console.log(planoDeAumento('a', 2800))
console.log(planoDeAumento('b', 2800))
console.log(planoDeAumento('c', 2800))
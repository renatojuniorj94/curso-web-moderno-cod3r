/* 
21)​ Criar um programa para identificar o valor a ser pago por um plano de saúde dada a idade do conveniado 
considerando que todos pagam R$ 100 mais um adicional conforme a seguinte tabela: 1) crianças com menos 
de 10 anos pagam R$80; 2) conveniados com idade entre 10 e 30 anos pagam R$50; 3) conveniados com 
idade acima de  30 e até 60 anos pagam R$ 95; e 4) conveniados acima de 60 anos pagam R$130
*/

function planoDeSaude(idade) {
    let valor = 100
    if (idade > 0 && idade <= 10) {
        valor += 80
    } else if (idade > 10 && idade <= 30) {
        valor += 50
    } else if (idade > 30 && idade <= 60) {
        valor += 95
    } else if (idade > 60) {
        valor += 130
    }
    return `Valor do plano = R$ ${valor}`
}

console.log(planoDeSaude(5))
console.log(planoDeSaude(18))
console.log(planoDeSaude(45))
console.log(planoDeSaude(80))

//Correto! :D
//Maneira feita no curso:

function calcularPreco (idade) {
    if(idade < 10){
        return 180
    } else if(idade < 30) {
        return 150
    } else if (idade < 60) {
        return 195
    } else {
        return 230
    }
}

console.log(calcularPreco(8));
console.log(calcularPreco(15));
console.log(calcularPreco(35));
console.log(calcularPreco(52));
console.log(calcularPreco(80));
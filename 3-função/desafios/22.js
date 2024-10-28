/* 
22)​ Criar uma função para calcular o valor a ser pago de anuidade de uma associação. A função recebe como 
parâmetro um inteiro que representa o mês (1 - janeiro, 2 - fevereiro...) que foi paga e o valor da anuidade. A 
anuidade deve ser paga no mês de janeiro. Por mês, é cobrado 5% de juros (sob o regime de juros 
compostos). O retorno deve ser o valor a ser pago para o respectivo mês escolhido.
*/

//Maneira feita no curso:

function calcularValor(mes, valor){
    if(mes > 0 && mes < 13) {
        atraso = mes - 1
        return (valor * ((1 + (5/100))**atraso)).toFixed(2)
    } else {
        return 'Mês inválido.'
    }
}

console.log(calcularValor(4, 100))

//Explicação chatGPT:

function calcularJurosCompostos(principal, taxa, periodos) {
    // Calcule o montante final usando a fórmula
    const montante = principal * (1 + taxa) ** periodos;
    return montante;
}

// Exemplo de uso:
const principal = 1000;   // Valor inicial (por exemplo, R$1000)
const taxa = 0.05;        // Taxa de juros (5% ou 0.05)
const periodos = 12;      // Número de períodos (por exemplo, 12 meses)

const resultado = calcularJurosCompostos(principal, taxa, periodos);
console.log("Montante final:", resultado.toFixed(2)); // Resultado formatado para 2 casas decimais

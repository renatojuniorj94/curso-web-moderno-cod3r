const alunos = [
    {nome: 'João', nota: 7.3, bolsista: false},
    {nome: 'Maria', nota: 9.2, bolsista: true},
    {nome: 'Pedro', nota: 9.8, bolsista: false},
    {nome: 'Ana', nota: 8.7, bolsista: true}
]

//Desafio 1: Todos os alunos são bolsistas?
const todosSaoBolsistas = (resultado, bolsista) => resultado && bolsista
console.log(alunos.map(a => a.bolsista).reduce(todosSaoBolsistas))

//Desafio 2: Algum aluno é bolsista?
const temAlgumBolsista = (resultado, bolsista) => resultado || bolsista
console.log(alunos.map(a => a.bolsista).reduce(temAlgumBolsista))


/* 
Conversa com chatGPT:

poderia me explicar o seguinte codigo?
const todosSaoBolsistas = (resultado, bolsista) => resultado && bolsista
console.log(alunos.map(a => a.bolsista).reduce(todosSaoBolsistas))

Claro! Vamos entender esse código passo a passo:

1. O que o código está tentando fazer?
Ele verifica se todos os alunos de um array chamado alunos são bolsistas (ou seja, se a propriedade bolsista de cada aluno é true).

2. Componentes do código
a. alunos.map(a => a.bolsista)

- Aqui, o método .map() cria um novo array contendo apenas o valor da propriedade bolsista de cada objeto no array alunos.
- Exemplo de alunos:
const alunos = [
    { nome: "João", bolsista: true },
    { nome: "Maria", bolsista: true },
    { nome: "Pedro", bolsista: false }
];

Depois do .map(a => a.bolsista), o resultado seria:
[true, true, false]

b. reduce(todosSaoBolsistas)
O método .reduce() combina os valores de um array em um único valor, aplicando uma função para acumular os resultados.

c. todosSaoBolsistas
É a função passada para o .reduce():
const todosSaoBolsistas = (resultado, bolsista) => resultado && bolsista;
resultado: o valor acumulado até o momento.
bolsista: o valor atual do array.
resultado && bolsista retorna true somente se ambos os valores forem true. Caso contrário, retorna false.

3. Como o .reduce() funciona nesse caso?
Ele percorre o array [true, true, false] e verifica se todos os valores são true. A cada iteração, ele aplica a função todosSaoBolsistas:

1. Primeiro valor: resultado = true (valor inicial do acumulador).
2. Primeiro par (primeiro resultado e primeiro bolsista): true && true = true.
3. Próximo par (resultado acumulado e próximo bolsista): true && true = true.
4. Próximo par (resultado acumulado e último bolsista): true && false = false.

O valor final é false, porque há pelo menos um aluno que não é bolsista.

4. Console Output
Com base no exemplo acima:
console.log(alunos.map(a => a.bolsista).reduce(todosSaoBolsistas));

O resultado será:
false

Resumindo:
O código verifica, usando .map() e .reduce(), se todos os alunos são bolsistas. Caso um dos valores seja false, o resultado final será false.
*/
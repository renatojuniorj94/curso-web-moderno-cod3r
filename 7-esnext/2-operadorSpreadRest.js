//operador ... rest(juntar)/spread(espalhar)
//Usar rest como parâmetro de função

//Usar spread com objeto
const funcionario = { nome: 'Maria', salario: 12348.99 }
const clone = { ativo: true, ...funcionario}
console.log(clone)

//Usar spread com array
const grupoA = ['Renato', 'Marizinha', 'Renata']
const grupoFinal = ['Cristina', 'Ana Clara', 'Junior', ...grupoA]
console.log(grupoFinal)
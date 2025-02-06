//Não aceita repetição/não indexada

const times = new Set()
times.add('Flamengo')
times.add('São Paulo')
//Podemos fazer também da seguinte maneira:
times.add('Cruzeiro').add('Internacional').add('Flamengo') //Flamengo foi ignorado por ser repetido

console.log(times)
console.log(times.size)
console.log(times.has('flamengo')) //É sensitivo a letras maiúsculas e minúsculas
console.log(times.has('Flamengo'))
times.delete('São Paulo')
console.log(times)
console.log(times.has('São Paulo')) //false

const nomes = ['Renato', 'Cristina', 'Renata', 'Junior', 'Marizinha', 'Cristina']
console.log(nomes)
const setNomes = new Set(nomes)
console.log(setNomes)
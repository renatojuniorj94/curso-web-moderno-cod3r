//Promise retorna apenas 1 valor. Se o objetivo for apresentar mais de 1, devemos criar um objeto(nesse exemplo x e y) ou array
let prom = new Promise(function (cumprirPromessa) {
    /* cumprirPromessa({
        x: 3,
        y: 4
    }) */
    cumprirPromessa(['Marizinha', 'Junior', 'Renata', 'Cristina', 'Renato', 'Ana Clara'])
})

/* prom.then(function (valor) {
    console.log(valor.x) //Resposta de objeto
    console.log(valor[0]) //Resposta de array
}) */

prom
    .then(valor => valor[0]) //'Marizinha'
    .then(primeiro => primeiro[0]) //M
    .then(letra => letra.toLowerCase())
    .then(letraMinuscula => console.log(letraMinuscula))

//Outra maneira:

function primeiroElemento(array) {
    return array[0]
}

function primeiraLetra(string) {
    return string[0]
}

const letraMinuscula = letra => letra.toLowerCase()

prom
    .then(primeiroElemento)
    .then(primeiraLetra)
    .then(letraMinuscula)
    .then(console.log(letraMinuscula))

//Outra maneira:

new Promise(function (cumprirPromessa) {
    cumprirPromessa(['Marizinha', 'Junior', 'Renata', 'Cristina', 'Renato', 'Ana Clara'])
})
    .then(primeiroElemento) //'Marizinha'
    .then(primeiraLetra) //M
    .then(letraMinuscula) //tranformando em letra minúscula com toLowerCase()
    .then(console.log) //m
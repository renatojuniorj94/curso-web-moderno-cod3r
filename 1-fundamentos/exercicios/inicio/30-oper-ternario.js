//Funciona como uma estrutura condicional, resumida em 3 partes (condição ? expr1 : expr2)

/* const resultado = nota => nota >= 7 ? 'Aprovado' : 'Reprovado' */

//Ou

const resultado = nota => {
    return nota >= 7
    ? 'Aprovado'
    : 'Reprovado'
} 

console.log(resultado(8))
console.log(resultado(6.99))
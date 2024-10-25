/* 10) ​Crie uma função que verifica se um número inteiro passado como parâmetro é divisível por 3 e retorne true 
ou false. */

function numeroInteiro(num) {
    if (Number.isInteger(num)) {
        if (num % 3 === 0) {
            return console.log(true)
        } else {
            return console.log(false)
        }
    } else {
        console.log(`O número ${num} é do tipo "float" e não se aplica a condição "Boolean"`)
    }
        
}

numeroInteiro(9)
numeroInteiro(10)
numeroInteiro(9.1)
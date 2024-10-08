/*
No JavaScript, o escopo de uma variável declarada com a palavra-chave let é limitado ao bloco, instrução ou expressão em que é usada. Isso significa que, por exemplo, se uma variável let for declarada dentro de um if(), switch() ou for(), ela só será visível dentro desse bloco de código. 
*/

let numero = 1
{
    let numero = 2 // O escopo menor tem preferencia
    console.log('dentro = ', numero)
}

console.log('fora = ', numero)
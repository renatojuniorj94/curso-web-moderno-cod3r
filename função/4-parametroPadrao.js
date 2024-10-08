//Estrategia 1 para gerar valor padrão
function soma1(a, b, c) {
    a = a || 1 //a recebe a ou 1
    b = b || 1 //""
    c = c || 1 //""
    return a + b + c
}

console.log(soma1(), soma1(3), soma1(1, 2, 3), soma1(0, 0, 0)) //0 retorna 'false' e passa a valer o valor padrão.

//Estrategia 2, 3 e 4 para gerar valor padrão
function soma2(a, b, c) {
    a = a !== undefined ? a : 1 //Se 'a' for estritamente diferente de 'undefined' ele recebe o próprio valor de 'a', se 'a' for igual a 'undefined', 'a' recebe 1 
    b = 1 in arguments ? b : 1 //Se dentro de 'arguments' existir o valor '1', pegue o valor de 'b', se não existir, 'b' recebe '1'
    c = isNaN(c) ? 1 : c //Se 'c' for 'isNaN', 'c' recebe '1' como padrão, caso 'c' seja um número, retorne 'c' (Se não puder a versão do ES2015, essa seria a mais segura.)
    return a + b + c
}

console.log(soma2(), soma2(3), soma2(1, 2, 3), soma2(0, 0, 0))

//Novo valor padrão de ES2015
function soma3(a = 1, b = 1, c = 1) {
    return a + b + c
}

console.log(soma3(), soma3(3), soma3(1, 2, 3), soma3(0, 0, 0))
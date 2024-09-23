//Dica: Fuja de variavel com escopo global
//Uma variavel global pode subescrever a outra no decorrer do código gerando bugs

//var é de escopo global
var numero = 1
{
    var numero = 2
    console.log('dentro =', numero)
}

console.log('fora = ', numero)
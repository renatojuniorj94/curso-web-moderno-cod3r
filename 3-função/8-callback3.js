//Exemplo de callback no browser (testar no console do navegador)

document.getElementsByTagName('body')[0].onclick = function(evento) {
    console.log('O evento ocorreu!')
} //[0] > Ao primeiro body da página (Na maior do casos só tem 1, exceto quando houver iframe por exemplo)
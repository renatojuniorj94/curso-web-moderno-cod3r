//A variavel abaixo não pode ser acessada em outro modulo.
let a = 2

//O objeto abaixo poder ser acessado em outro modulo
module.exports = {
    bomDia: 'Bom dia',
    boaNoite() {
        return 'Boa noite'
    }
}
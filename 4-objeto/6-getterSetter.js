/* 
Em JavaScript, uma chave em um objeto que começa com um sublinhado (_) é uma convenção de nomenclatura frequentemente usada para indicar que essa propriedade é privada ou protegida. Essa convenção é mais uma questão de estilo e boas práticas de codificação do que uma regra sintática do JavaScript, já que, de fato, não existe um mecanismo nativo no JavaScript para criar propriedades realmente privadas em objetos (embora o JavaScript moderno tenha introduzido campos privados com a notação # em classes).
*/

/* 
- Getters e setters são especialmente úteis quando você deseja adicionar lógica de negócios ou restrições ao acesso ou à modificação de propriedades de um objeto.
- Embora getters e setters ofereçam uma maneira de encapsular a lógica, é importante não abusar deles para não tornar o código confuso.
*/

const sequencia = {
    _valor: 1, //Convenção (convenciona outros programadores que essa variavel com underline deve ser acessada internamente)
    get valor() { return this._valor++ },
    set valor(valor) {
        if (valor > this._valor) {
            this._valor = valor
        }
    }
}

console.log(sequencia.valor, sequencia.valor)
sequencia.valor = 1000
console.log(sequencia.valor, sequencia.valor)
sequencia.valor = 900
console.log(sequencia.valor, sequencia.valor) //1002 1003
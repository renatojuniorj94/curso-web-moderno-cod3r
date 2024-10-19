//IIFE -> Immediately Invoked Function Expression > é uma função em JavaScript que é executada assim que definida. Esse tipo de função foge do escopo global

(function() {
    console.log('Será executado na hora!')
    console.log('Foge do escopo mais abrangente')
})() // () > Está invocando uma função anonima
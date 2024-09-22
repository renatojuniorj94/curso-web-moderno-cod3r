{
    {
        {
            {var sera = 'Será?'}
        }
    }
}
console.log(sera) //O escopo de var é global

function teste() {
    var local = 123
    console.log(local)
}

teste()
console.log(local) //Apresentar erro porque está dentro de uma função
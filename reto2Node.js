function cuadrado (number){
    return Math.pow(number,2)
}

function randomNumber(number){
    let resultado = Math.floor((Math.random()*number))
    console.log(resultado)
    return resultado;
}


function compose(a,b){
    return function (x) { 
       return a(b(x))
    }
}

console.log(compose(cuadrado,randomNumber)(7))

let miFuncion= compose(cuadrado,randomNumber);
console.log(miFuncion(5))
let myResult = miFuncion(3)
console.log(myResult)
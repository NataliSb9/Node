function a() {
  console.log("Hola desde a");
}

function b() {
  console.log("Hola desde b");
}

function main(func) {  
    console.log("Hola desde el main");
  func();
}
console.log("con parametro a:");
main(a);
main(b);
console.log("declarando la funcion:");
main(a);
main(b);
console.log("con el parametro Main:");
//main(main);

/*
Cuando llamo a main y declaro la funcion lo que pasa es que el flujo de ejecución es el que hemos establecido ¿Por que?
Cuando paso la funcion como parametro lo que paso es la DEFINICION.
*/

//console.log(a())
//console.log(b())

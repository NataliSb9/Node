//Muestra "after 1 second" ina vez haya pasado 1 seg.

//Muestra despues de que haya pasado 1 seg "last process after finish the loop"

//tomando como base lo anterior "initial loop event"

setTimeout(function() {
    console.log("after 1 second")
    process.nextTick(function() {
        console.log("last process after finish the loop")
    });
    setImmediate(function(){
        console.log("initial loop event")
    });
}, 1000);


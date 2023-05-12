

// Ejercicio 11

function subtotal(msj1,msj2){
    let val= parseFloat(prompt(`${msj1}`));
    let cant=parseInt(prompt(`${msj2}`));
    return val*cant
}

/*
SUELDO=14000
COMISION=0.16

let ventas= subtotal("Ingrese el valor del artículo.","Ingrese la cantidad vendida.")

console.log(`El vendedor cobrará ${ventas*COMISION+SUELDO}`)

*/

// Ejercicio 12

function verifica(limmin,limmax,msj){
    n=parseInt(prompt(`${msj}`))
    while (n<limmin || n>limmax) {
        n=parseInt(prompt(`ERROR. ${msj} `))
    }
    return n
}

function ingreseGenero(){
    gen=(prompt(`Ingrese su género (F o M)`))
    while (gen!="F" && gen!="f" && gen!="M" && gen!="m") {
        gen=prompt(`ERROR. Ingrese su género (F o M)`)
    }
    return gen;
}
/*
let edad= verifica (1,120,"Ingrese su edad.")
let genero= ingreseGenero()

if (edad>=65) {
    console.log(`Está en edad de jubilarse.`)
} else if (edad>=60 && ( genero=="F" || genero=="f")) {
    console.log(`Está en edad de jubilarse.`)
} else {
    console.log(`No está en edad de jubilarse.`)
}

*/

// Ejercicio 13


function continuar(){
    opcion=(prompt("¿Deseás ingresar otro artículo? [S/N]"))
    while (opcion!="S" && opcion!="s" && opcion!="N" && opcion!="n") {
        opcion=prompt(`ERROR.¿Deseás ingresar otro artículo? [S/N])`)
    }
    return opcion;
}

let acum=0
let venta= subtotal("Ingrese el valor del artículo.","Ingrese la cantidad vendida.")
acum+=venta
sigue=continuar()
while (sigue!="n" && sigue!="N") {
    venta= subtotal("Ingrese el valor del artículo.","Ingrese la cantidad vendida.")
    acum+=venta
    sigue=continuar()
}
console.log(`El total es de ${acum}`)
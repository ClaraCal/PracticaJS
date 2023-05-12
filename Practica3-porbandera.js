/*
EJERCICIO 10

nota=parseInt(prompt("Ingrese una nota entre 0 y 10"))
while (nota<0 || nota>10) {
    nota=parseInt(prompt("ERROR. Ingrese otra nota"))
}

EJERCICIO 11

nota=parseInt(prompt("Ingrese una nota notas válidas (deberá ser el 2 o en el rango comprendido entre el 4 y el 10)"))
while (nota<=1 || nota>10 || nota==3) {
    nota=parseInt(prompt("ERROR. Ingrese otra nota"))
}

EJERCICIO 12

opcion=prompt("¿Deseás continuar? [S/N]");

while (opcion!="S" && opcion!="N" && opcion!="s" && opcion!="n") {
    opcion=prompt("ERROR.Ingrese una opción válida. ¿Deseás continuar? [S/N]")  
}


do {
    opcion=prompt("¿Deseás continuar? [S/N]");
} while (opcion!="S" && opcion!="N" && opcion!="s" && opcion!="n");

EJERCICIO 13

num=parseInt(prompt("Ingrese un número.(0 para cortar.)"))
let numMax=num
let numMin=num
while (num!=0) {
    if (numMax<num) {
        numMax=num
    }
    if (numMin>num) {
        numMin=num
    }
    num=parseInt(prompt("Ingrese otro número.(0 para cortar.)"))  
}

console.log(`El máximo fue el ${numMax} y el mínimo ${numMin}`)

EJERCICIO 14: VISTO EN CLASE

EJERCICIO 15

let acum=0
let cont=0

do {
    num=parseInt(prompt("Ingrese un número."));
    cont++
    acum+=num
    console.log(`Promedio actual ${acum/cont}`)
} while ((acum/cont)<20);
    
console.log(`Se leyeron ${cont} valores.`)

EJERCICIO 16

let cont=0;
let pares=0;

do {
    num=parseInt(prompt("Ingrese un número"))
    cont++
    if (num%2 == 0) {
    pares++
    } 
    opcion=prompt("¿Deseás ingresar otro número? [S/N]")

    while (opcion!="S" && opcion!="N" && opcion!="s" && opcion!="n") {
    opcion=prompt("ERROR.Ingrese una opción válida. ¿Deseás ingresar otro número? [S/N]")  
    }

} while (opcion!="N" && opcion!="n");

console.log(`Los números pares fueron el ${pares/cont*100}%.`)

EJERCICIO 17

let acum=0

do {
    num=parseInt(prompt("Ingrese la cantidad"))
    precio=parseFloat(prompt("Ingrese el precio"))
    acum=acum+(num*precio)
    opcion=prompt("¿Deseás ingresar otro artículo? [S/N]")

    while (opcion!="S" && opcion!="N" && opcion!="s" && opcion!="n") {
    opcion=prompt("ERROR.Ingrese una opción válida. ¿Deseás ingresar otro artículo? [S/N]")  
    }

} while (opcion!="N" && opcion!="n");

console.log(`El total es de ${acum}`)



EJERCICIO 18

let acum=0
let cont=1

sueldo=parseInt(prompt(`Ingrese el sueldo correspondiente al mes 1`))

while (sueldo>=0 && cont<=12) {
    cont++
    acum+=sueldo
    console.log(acum)
    sueldo=parseInt(prompt(`Ingrese el sueldo correspondiente al mes ${cont}`))
}

console.log(`El sueldo acumulado fue de ${acum}`)

EJERCICIO 19 

USUARIO="admin"
CONTRASENIA="123456"
let valida;
cont=0

user=prompt("Ingrese su usuario")
pass=prompt("Ingrese su contraseña")

do {
    if (user==USUARIO){
        if (pass==CONTRASENIA) {
            valida=true
            console.log("Acceso concedido")
        } else {
            valida=false
            cont++
            console.log(`Credencial incorrecta. Intentos restantes ${3-cont}`)
            user=prompt("Ingrese su usuario")
            pass=prompt("Ingrese su contraseña")
        }
    } else{
        valida=false
        cont++
        console.log(`Credencial incorrecta. Intentos restantes ${3-cont}`)
        user=prompt("Ingrese su usuario")
        pass=prompt("Ingrese su contraseña")
    }

} while (valida!=true && cont<2);

if (valida!=true) {
    console.log("Se ha bloqueado la cuenta")
}


EJERCICIO 20 (SIN TERMINAR!!!!)

ancho=parseInt(prompt("Ingrese el ancho de la matriz"))
alto=parseInt(prompt("Ingrese el alto de la matriz"))
contAlto=1

while (contAlto<=alto) {
for (let contAncho= 1; contAncho  <= alto; contAncho++) {
    console.log(" x ");  
}
contAlto++
}

EJERCICO 21

*/



min=parseInt(prompt(`Ingrese una cantidad de minutos`))
mm=0

while (mm<min) {
for (let ss = 0; ss < 60; ss++) {
    if (mm<10) {
        if (ss<10) {
            console.log(`0${mm}:0${ss}`)
         } else {
            console.log(`0${mm}:${ss}`) 
         }         
    } else {
        if (ss<10) {
            console.log(`${mm}:0${ss}`)
         } else {
            console.log(`${mm}:${ss}`) 
         }     
    }
 
    
}
mm++    
}

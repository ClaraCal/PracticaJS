// Ejercicio 1

function esPar(n){
    return (n % 2 == 0 )
}

// Ejercicio 2

function obtenerResto(n1,n2){
    return (n1-(parseInt(n1/n2))*n2)
} 

/*

// Ejercicio 3

function imprimirSimbolo(s,n){
    for (let cont = 1; cont <= n; cont++) {
        console.log(`${s}`)
    }
}

// Ejercicio 4

function esVocal(x) {
    if (x == "a" || x == "A" || x == "e" || x == "E" ||
        x == "i" || x == "I" || x == "o" || x == "O" || x == "u" || x == "U") 
        {
        return true;
    }else {
        return false;
    }
}
*/

// Ejercicio 5

function mostrarSucesion(a,b){
    for (let cont = a; cont <=b ; cont++){
        console.log (`${cont}`)
    }
}

// Ejercicio 6

function esMultiplo(n1,n2){
    return n1%n2==0
}

// Ejercicio 7

function cantDivisores(n){
    if(n<0){
        n=-n;
    }
    let cant=2
    for (let cont = 2; cont < n; cont++){
    if (n % cont==0) {
        cant++;
    }    
  }
  return cant;
}

// Ejercicio 8

function esPrimo(n){
    return cantDivisores(n)==2;

}

// Ejercicio 9

function mostrarNprimos(n){
let cont=2; //arranca en 2 porque el 1 no se considera primo
let cantidadPrimos=0;
    while (cantidadPrimos<n) {
        if (esPrimo(cont)==true) {
        console.log(`${cont} ,`)
        cantidadPrimos++
        }
    cont++
    }
}

// Ejercicio 10

function esNumeroPerfecto(n){
    let acum=0;
    for (let cont = 1; cont < n; cont++) {
        if (n % cont ==0) {
        acum+=cont;            
        }
    }
    return acum==n;
}
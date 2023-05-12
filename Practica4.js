
function esPar(n){
    return (n % 2 == 0 )
}

function obtenerResto(n1,n2){
    return (n1-(parseInt(n1/n2))*n2)
} 

/*

function imprimirSimbolo(s,n){
    for (let cont = 1; cont <= n; cont++) {
        console.log(`${s}`)
    }
}


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


function mostrarSucesion(a,b){
    for (let cont = a; cont <=b ; cont++){
        console.log (`${cont}`)
    }
}


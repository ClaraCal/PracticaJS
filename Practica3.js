/*
EJERCICIO 6
cant=parseInt(prompt("Cuántas ventas va a ingresar?"));
ventasAcumuladas=0;

for (let cont = 1; cont <= cant; cont++) {
    ventas=parseInt(prompt(`Ingrese la venta ${cont} realizada por el vendedor`));
    ventasAcumuladas=ventasAcumuladas+ventas;
}

console.log(`Las ventas fueron de $ ${ventasAcumuladas}`);

EJERCICIO 1 

const LIMITE=100;

for (let i = 1; i <= LIMITE; i++) {
  console.log (i);
    }

for (let i = LIMITE; i >= 1; i) {
        console.log (i);
          } 

EJERCICIO 2

num1=parseInt(prompt("Ingrese un número entero"));
num2=parseInt(prompt(`Ingrese un número entero mayor o igual a ${num1}`));

console.log("A-Incluyendo");
for (let i = num1; i <= num2; i++) {
    console.log(i);        
}

console.log("B-Excluyendo");
for (let i = num1+1; i < num2; i++) {
    console.log(i);        
}

EJERCICIO 3

MIN=1
MAX=10
n=parseInt(prompt(`Ingrese un número del ${MIN} al ${MAX}`));

for (let cont = 1; cont <= 10; cont++){
    console.log(`${n} x ${cont} = ${n*cont}`);
}

EJERCICIO 4

n=parseInt(prompt("Ingrese cuántos múltiplos de 3 pero no de 5 quiere mostrar"));
acum=0;

for (let i = 1; acum < n; i++) {
    if (i % 3 === 0 && i % 5 !=0) {
    acum+=1    
    console.log(i)   
    }
}

EJERCICIO 7

cant=parseInt(prompt("Cuántos jugadores va a ingresar?"));
altAcum=0;

for (let cont = 1; cont <= cant; cont++) {
    altura=parseFloat(prompt(`Ingrese la altura del jugador ${cont}`));
    altAcum+=altura;
}

console.log(`La altura promedio es de ${altAcum/cant}`);

EJERCICIO 8

cant=parseInt(prompt("Cuántos números quiere analizar?"));
mayor=0;
pos=0;
num=0;

for (let cont = 1; cont <=cant ; cont++){
    num=parseInt(prompt(`Ingrese el número ${cont}`));
    if (num>mayor) {
        mayor=num;
        pos=cont;
    }
}
console.log(`El mayor número fue el ${mayor} que apareció ${pos}`);




*/
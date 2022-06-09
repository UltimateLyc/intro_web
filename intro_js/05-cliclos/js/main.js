/** Ciclo while */
/* let miArray = ['a', 'b', 'c'];
i = 0;

while(i < 3);
{
    document.write(miArray[i]);
    i++;
} */

/** Ciclo for */

/* let pokemons = ['pika', 'ditto', 'moltres', 'zapdos', 'lijia']

for (let index = 0; index < pokemons.length; index++) {
    document.write (pokemons[index]);
} */

/**
 * Ejercicio:
 *  Crea un programa que pregunte al usuario un número. Mostrar los números que son múltiplos de 5 desde 1 hasta el número introducido por el usuario.
 */

let num;
let multi;
let cont;


do
{
    num = Number(prompt('Ingrese un numero'));
}
while(isNaN (num));

multi = num/5;

for (let i = 1; i <= multi; i++ )
{
    cont = 5 * i;
    /* document.write('\tLa multiplicacion es de 5 x ' + i + 'es igual a: '+ multi +'\n'); */
    document.write('\n'+cont); 
}
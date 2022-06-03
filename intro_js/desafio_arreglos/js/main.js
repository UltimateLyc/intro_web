/* Desafio:

ok    0. Solicitar nombre y apellido al usuario y crear un array con esos datos.
ok    1. Solicitar los nombres compelos de los miembres de la familia separados por (,)
ok    2. Convertir esos nombres a un array de nombres de la familia y mostrarlo en la consola
ok    3. Combinar los dos arrays en uno solo y re-ordenarlo de atras hacia adelante y los vamos a mostar al usuario
    4. Agregar las validacones que crean necesarias

*/

/* variables */
let nombreUsuario = []; //Definirla como un array // Pregiuntar al profe como crear un array desde strin unico
let nombreFamilia;
let arregloFamiliaCompleta;
let arrayOrdenado;


/* logica */

nombreUsuario.push(prompt('Ingresa tu nombre completo')); //0
console.log(nombreUsuario);

nombreFamilia = prompt('Ingrese nombre completo de la familia separado por comas uto si no lo haces :3'); //1
console.log(nombreFamilia);

arrayFamilia = nombreFamilia.split(',');//2 //Se convierte el string "nombreFamilia" a un array gracias al split
console.log(arrayFamilia);

arregloFamiliaCompleta = arrayFamilia.concat(nombreUsuario);
console.log(arregloFamiliaCompleta);

/* arrayOrdenado = arregloFamiliaCompleta.sort();
console.log(arrayOrdenado); */

arregloFamiliaCompleta.reverse();
document.write(arregloFamiliaCompleta);
/* alert(arregloFamiliaCompleta); */
console.log(arregloFamiliaCompleta);
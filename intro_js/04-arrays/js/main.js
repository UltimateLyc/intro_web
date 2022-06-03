//Variables 
let miArray = [];

/* mostrar cantidad de elementos en el array */

console.log(miArray.length) // Muestra la cantidad de elementos en mi arreglo

/* agregamos valores a mi array */
miArray.push(prompt('Ingresa el nombre de una fruta')); //Agrega un elemento al arreglo de forma consecutiva
console.log(miArray);
miArray.push(prompt('Ingresa el nombre de otra una fruta'));
console.log(miArray);

/* agregar elemnto al inicio del arreglo */ 
miArray.unshift('Mandarina')
console.log(miArray);


/* vamos a eleiminar el ultimo elemento  */
miArray.pop();
console.log(miArray);

/** Vamos a eliminar el primer elemento */
miArray.shift();
console.log(miArray);

/** Extraer palabras de un string y convertirlas en un array */
let nombreCompleto = 'Rafael Nivardo Ramos Garcia';
let arregloNombre = nombreCompleto.split(' ');
console.log(arregloNombre);

/** Eliminar elementos de un array apartir de su indice */
let arregloApellidos = arregloNombre.slice(2);
console.log(arregloApellidos);

let arregloPrimerApellid = arregloNombre.slice(2,2);
console.log(arregloPrimerApellid);

/** Agregar elementos al array en una posicion especifica y remplazar si queremos */
arregloApellidos.splice(1,1,arregloNombre);
console.log(arregloApellidos);

/** Ordenar los elementos de un array alfabeticamente */
let arrayOrdenado = arregloNombre.sort();
console.log(arrayOrdenado);


/** Ordenar los elementos del un arrat alfabeticamente pero en reversa */
arrayOrdenado.reverse();
console.log(arrayOrdenado);

let arregloConcatenado = arregloNombre.concat(arrayOrdenado, arregloApellidos);
console.log(arregloConcatenado);
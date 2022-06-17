//Declarar un array vacio 
let myArray = [];

//Declarar un array con 5 elementos del mismo tipo
const otherArray = ["Gerardo", "Nava", "Pereda", "mascota", "27"];

// Obtener la longitud de mi array
console.log(otherArray.length);

// Obtener el primer elemento o indice
console.log(otherArray[0]);
console.log(otherArray.shift());

//Obtener el elemento de mas enmedio del array
console.log(otherArray[Math.round((otherArray.length - 1) / 2)]);

//Declarar una variable con un arreglo que se llama tecnologias web

const tecnologiasWeb =[
    "HTLM",
    "CSS",
    "JavaScript",
    "React",
    "Angular",
    "Vue",
    "NodeJS",
    "Ruby on Rails",
];

//Agregar al final
tecnologiasWeb.push("Redux");
//unshift

//Quitar al final 
tecnologiasWeb.pop()
//shift

const indexReact =  tecnologiasWeb.indexOf("React"); // Si el indice no existe te regresa -1
tecnologiasWeb.splice(indexReact,1); // Te permite eliminar cierta cantidad de posiciones de donde se marque

//Comprobar si existe un elemento en el array de tecnologias
console.log(tecnologiasWeb.includes("React"));

//Unir
console.log(tecnologiasWeb.join(', '));

//revertir o voltear
console.log(tecnologiasWeb.reverse().join(', '));

//Ordenar
console.log(tecnologiasWeb.sort());

const arrayDeNumeros = [1, 236, 12, 555, 5000, 1234556, 65, 953, 476, 769, 869];
console.log(arrayDeNumeros.sort())
console.log(arrayDeNumeros.sort((a,b)=> a- b)); //

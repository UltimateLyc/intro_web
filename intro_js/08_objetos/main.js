const gato = {
    nombre: 'Alfa',
    alias: 'peluchin',
    apodo: 'gato bola',
    raza: 'Siames',
    edad: 6,
    color: ['blanco', 'gris'],
    vacunas: {
        tripedelina: 'true',
        rabia: 'false',
    },
};

console.log(gato.edad);
console.log(gato['edad']);

console.log(gato.vacunas.tripedelina.toUpperCase()); // aqui se obtiene el valor de true
console.log(gato?.vacunas?.tripedelina?.toLocaleUpperCase());

//Destructuracion
const {nombre,alias,apodo,raza,edad,color,vacunas} = gato; //tener cuidado con poner let por que entra en tema de inmutabilidad

//Esto es lo mismo de arriba solo diferente sintaxis
/* const nombre = gato.nombre;
const alias = gato.alias;
const apodo = gato.apodo;
const raza = gato.raza;
const edad = gato.edad;
const color = gato.color;
const vacunas = gato.vacunas; */

console.log(nombre);
console.log(alias);
console.log(apodo);
console.log(raza);
console.log(edad);
console.log(color);
console.log(vacunas);




const miArray = ['string', 4, [], {}]; // en el array se pueden meter diferentes tipos de valores

//Arreglo de strings
const razas = ['siames', 'bengala', 'carey', 'persa', 'bombay', 'ejipcio'];

//Arreglo de numeros
const pesos = [5, 2, 1 , 4, 3];
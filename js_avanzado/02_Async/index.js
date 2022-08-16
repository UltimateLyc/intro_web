console.log("02 Asincronicidad")

//Codigo secuencuencial (sincrono)

console.log(1)
console.log(2)
console.log(3)
console.log("************************")
//Callback function

let alumnos = 
[
    "Sebastian",
    "Aracely",
    "Carlos",
    "Mabel",
    "Rene"
]

function funcionpara (elemento,indice,arreglo)
{
    console.log(elemento);
}

alumnos.forEach (funcionpara);

/* alumnos.forEach((elemento,indice,arreglo) => {
    console.log(elemento)
}) */

console.log("************************")

const primerafuncion = () => {
    console.log('Esta es la primera funcion');
}

const segundafuncion = () => {
    primerafuncion();
    console.log('Esta es la segunda funcion');
}

const terceraafuncion = () => {
    segundafuncion();
    console.log('Esta es la tercera funcion');
}

terceraafuncion();

console.log("************************")

const uno = () =>
{
    return 50;
}

const dos = () =>
{
    return 40;
}

const sumaFunciones = (funcion1, funcion2) => {
    const suma = funcion1() + funcion2();
    return suma;
}
console.log(sumaFunciones(uno,dos))


//settimeout es para ejecutar  una funcion despues de un tiempo
console.log("Antes del settime")

setTimeout(()=>
{
    console.log("************************")
},4000)
console.log("Rdolfo")

//Simulacion de cuello de botella

console.log("Rene");
setTimeout(()=>{
	return console.log("flor");
},4000)

for(let i=0; i < 9999999999; i++);

console.log("final");


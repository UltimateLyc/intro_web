/* Create */ 

function persona(nombre)
{
    this.nombre = nombre;
}

let persona1 = Object.create(persona);
let persona2 = Object.create(persona1)

class personaClass
{
    constructor(name)
    {
        this.name = name;
    }
}

let test = new persona("juan");
console.log( test)
let test_2 = new personaClass("Ruben");
console.log( test_2)



/* Prototipo  */

function persona3(nombre)
{
    this.nombre = nombre;
}

persona3.prototype.saluda = function()
{
    console.log(`Hola soy ${this.nombre}`)
}

let test_4 = new persona3("Pedro")
test_4.saluda();
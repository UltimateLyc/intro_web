//Declarar un objeto
const perro = {
    nombre: "choco",
    patas: 4,
    color: "chocolate",
    edad: 6,
    ladrar: function()
    {
        console.log("gua gua");
        return 0;
    }

}

console.log(perro.nombre)//imprime nombre

perro.nombre = "chocolate";
console.log(perro.nombre);

//Agregar una propiedad a un objeto ya existente
perro.id = 0;

console.log(perro.ladrar);
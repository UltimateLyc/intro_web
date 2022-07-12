/**
1. Hacer superclase Maestro y subclases Maestro de Física y 
   Maestro de Música y a cada uno asignarle su materia y 
   calcular su promedio de grupo a partir de calificaciones	 
   (puedes usar arreglos). 

El maestro de física tiene un 
   atributo "antigüedad" que guarda un valor numérico, 
   mientras que el maestro de música tiene un atributo "edad"
   también guardando un valor numérico.

 */

   class Maestro //superclase, clase padre
   {
    constructor(materia)
    {
        this.materia = materia
        this.promedioGrupo
        this.calificaciones = [] 
    }
    
    asignarCalificaciones(...calificaciones)
    {
        this.calificaciones = this.calificaciones.concat(calificaciones)
    }
    
    calcularPromedio()
    {
        let suma = 0
        let promedio = 0
        for(let i = 0; i < this.calificaciones.length; i++)
        {
            suma += this.calificaciones[i];
            //console.log("🚀 ~ file: ejercicio_1.js ~ line 35 ~ suma", suma)
            
        }
        this.promedioGrupo = suma / this.calificaciones.length
        return this.promedioGrupo
    }
}

class MaestroFisica extends Maestro
{//subclase o clase hijo
    constructor(antiguedad)
    {
        super("Física") //super().materia = "Física"
        this.antiguedad = antiguedad
    }
    
    saludar()
    {
        console.log(`Hola soy maestro de ${this.materia} y mi antiguedad es de ${this.antiguedad} `);
    }
}

class MaestroMusica extends Maestro
{//subclase o clase hijo
    constructor(edad)
    {
        super("Música")
        this.edad = edad
    }
}

let pedro = new MaestroFisica(10)

pedro.asignarCalificaciones(10,8,9,2)
pedro.calificaciones
//console.log(pedro.calificaciones)
pedro.asignarCalificaciones(7,8)
pedro.calificaciones
//console.log(pedro.calificaciones)
console.log(pedro.calcularPromedio())
pedro.saludar()

let sofia = new MaestroMusica(29)
console.log("🚀 ~ file: ejercicio_1.js ~ line 78 ~ sofia", sofia)


/* Esto no se puede porque saludar no está definido en estas clases
sofia.saludar()
let maria = new Maestro("Inglés")
maria.saludar()
*/
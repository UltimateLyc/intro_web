/**
2.- Crear la clase construcción que hereda a otras dos 
    clases "casa" y "edificio". 
    a. Sus atributos son: numPuertas, numVentanas, numPisos,
       direccion, altura, largo y ancho del terreno.
    b. Cada uno tiene un método que regresa los metros 
       cuadrados
    c. Un método debe regresar la direccion
    d. Un método debe permitir modificar la direccion
    e. Buscar la mejor manera de aprovechar la herencia

 */

class Construccion //Clase Padre
{
    constructor(vivienda, direccion)
    {
        this.vivienda = vivienda;
        this.numPuertas = 0;
        this.numVentanas = 0;
        this.numPisos = 0;
        this.direccion = direccion;
        this.altura = 0;
        this.largo = 0;
        this.ancho = 0;  
    }

    metrosCuadrados()
    {
        let metrosCuadrados = 0;
        metrosCuadrados = this.largo * this.ancho; 
        console.log (`Los metros cuadrados son: ${metrosCuadrados} mts^2`);
    }

    printDireccion()
    {
        console.log(`La direccion es: ${this.direccion}`);
    }
}

class casa extends Construccion
{
    constructor()
    {
        super("Casa");//super().vivienda = "Casa"
    }
}

let test = new casa();
test.direccion = "Juan kepler 4065 - 9";
test.ancho = 2;
test.largo = 5;
//console.log("🚀 ~ file: ejercicio_2.js ~ line 37 ~ test", test);
//test.metrosCuadrados();
//test.printDireccion();

class departamento extends Construccion
{
    constructor()
    {
        super("Departamento");
    }
}

let test_2 = new departamento();
test_2.direccion = "Av Aviacion 5051 nave 5";
console.log("🚀 ~ file: ejercicio_2.js ~ line 66 ~ test_2", test_2);

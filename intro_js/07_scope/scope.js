// Variable Globales 

var hola = 'hola'; //scope funcion

//Scope bloque
let hi = 'hi';
const bounjour = 'bounjour';

//funcion
function saludar (nombre)
{
    console.log(`Hola ${nombre} desde la funcion`)
    
    for (let index = 0; index < 5; index++) {
        console.log(index)
        console.log(`Hola ${nombre} desde el for`)

        if (condition) 
        {
            
        }
        
    }
}
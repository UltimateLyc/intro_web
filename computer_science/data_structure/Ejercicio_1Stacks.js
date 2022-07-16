/** 
 Escribe una función “reemplazar” que tenga como parámetros una pila de elementos de tipo Number, y dos valores de tipo Number “nuevo” y “viejo”, de forma que si el segundo valor aparece en algún lugar de la pila, sea reemplazado por el primero (Solo la primera vez), y hará pop de los elementos más nuevos.
 */

class Stack 
{
    constructor()
    {
        this.items = [];
    }

    push(...item) //Agregar //spread operator
    {
        this.items.push(...item);//Si aqui no coloco el spread operator me crea un solo array dentro del array [[1,2,3,4,5]] :. hay q colocarlo para que lo cargue como un array unico [1,2,3,4,5]
    }

    pop() //Quitar
    {
        return this.items.pop();
    }

    peek() //retorna el ultimo
    {
        return this.items[this.items.length-1];
    }

    size()//Tamaño
    {
        return this.items.length;
    }

    print()//imprimir
    {
        console.log(this.items);
    }

}

let stack_1 = new Stack();
let stack_2 = new Stack();
stack_1.push(3,2,3,4,6,8,1,2,5,5);

//Function arrow
const remplazar = (datos,datos_2) =>
{
    let nuevo = 7;
    let viejo = 0;
    
    do
    {
        if(datos.peek() === 2)
        {
            datos.pop();
            datos.push(nuevo);//Sustituimos el 2 por un 7
        }
        else
        {
            viejo = datos.pop() //Guardamos el valor del array para no perderlo 
            datos_2.push(viejo); //Se lo asignamos a un nuevo array 
        }

    }while(datos.size() != 0)//lo usamos para saber cuando nos acabamos todo un stack y ya fue almacenado en otro 

    console.log(`Estos son el arreglo cambiado `)//mera paja 
    datos_2.print()//Impimimos el nuevo stack
    
}

stack_1.print(); //Ver el stack antes del cambio 
//stack_2.print();
remplazar(stack_1,stack_2); //Realizar el cambio del primer stack al segundo y remplazar los valores 
remplazar(stack_2,stack_1); //regresamos todo al stack primario y lo acomodamos como lo teniamos.
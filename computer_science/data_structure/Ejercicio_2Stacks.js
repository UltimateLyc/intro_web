/**
 *  1.- Hacer una función que reciba como parámetros una pila, y un número.
    La función debe retornar tantos elementos como diga el número (segundo parámetro), de arriba para abajo.

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

let stack = new Stack ();
let stack_auxiliar = new Stack();
stack.push('Manzana','Cebolla','Apio','Naranja','Papaya','Sandía','Melón');
stack.print();

const retornar = (pila,numero) =>
{
    let contenedor_auxiliar;

    for (let i = 0; i < numero; i++)
    {
        contenedor_auxiliar = pila.pop();
        stack_auxiliar.push(contenedor_auxiliar);
    }

    stack_auxiliar.print()
}

retornar(stack,4);
stack.print();
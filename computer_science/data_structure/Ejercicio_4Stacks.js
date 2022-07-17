/* 
4.-  Un almacén tiene capacidad para apilar “n” contenedores. Cada contenedor tiene una posición. Cuando se desea retirar un contenedor específico, deben retirarse primero los contenedores que están encima de él y colocarlos en otra pila, efectuar el retiro y regresarlos a su respectivo lugar.
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

let stack = new Stack();
let stack_auxiliar = new Stack();
stack.push (3,2,3,4,8,1,2,5,5);
stack.print();

const montacargas = (pila,numero) =>
{
    let secureContainer = 0;
    let principalContainer;

    for (let i=0; i <= numero; i++)
    {
        //console.log(pila.size());
        if (pila.size()-1 === numero)
        {
            principalContainer = pila.pop();
        }
        else
        {
            secureContainer = pila.pop();
            stack_auxiliar.push(secureContainer);
        }
    }

    for (let i=0; i < numero; i++)
    {
        secureContainer = stack_auxiliar.pop();
        pila.push(secureContainer);
    }

    console.log(`El stack deseado es: ${principalContainer}`);
    pila.print()
    //stack_auxiliar.print()
}

montacargas(stack,4);

/**
 *  3.- Un conductor maneja de un pueblo origen a un pueblo destino, pasando por varios
    pueblos. Una vez en el pueblo destino, el conductor debe regresar a casa por el mismo
    camino. Muestre el camino recorrido tanto de ida como de vuelta. 
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

stack.push("Pueblo Origen", "Pueblo 1", "Pueblo 2","Pueblo 3","Pueblo 4","Pueblo 5","Pueblo 6", "Destino");
console.log('primer viaje');
stack.print();

const viajeIdaYVuelta = (pila, pila2) =>
{
    //let auxLength = stack.size();
    let puebloOrigren = "Pueblo Origen";
    let destino = "Destino";
    let container;

    do
    {
        if (pila.peek() === "Destino" )
        {
            pila.pop()
            pila2.push(puebloOrigren);
        }
        else if (pila.peek() === "Pueblo Origen")
        {
            pila.pop()
            pila2.push(destino);
        }
        else
        {
            container = pila.pop();
            pila2.push(container)
        }
    }
    while(pila.size() !== 0)

    pila2.print()
}

console.log('segundo viaje');
viajeIdaYVuelta(stack,stack_auxiliar);
//stack.print();
console.log('tercer viaje');
viajeIdaYVuelta(stack_auxiliar,stack);
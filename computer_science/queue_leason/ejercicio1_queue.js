/* 
1.- Se tiene una cola de colores y se tiene que dividir en dos colas, respetando el orden y alternando a partir de su índice.
*/

class Queue {
    constructor() {
        this.items = []
    }
    
    enqueue(...item) {
        this.items.push(...item)
    }
    
    dequeue() {
        return this.items.shift()
    }
    
    peek() {
        return this.items[0]
    }
    
    size() {
        return this.items.length
    }
    
    isEmpty() {
        /* if(this.size() == 0) {
            return "esta vacio"
        } else {
            "no esta vacio"
        } */
        return this.size() == 0
    }
    
    front() {
        return this.peek()
    }
    
    back() {
        return this.items[this.items.length - 1]
    }
    
    print() {
        console.log(this.items)
    }
    
}

let cola = new Queue();
let cola_auxiliar = new Queue ();
cola.enqueue('amarillo', 'rojo', 'azul', 'morado', 'rosa', 'verde', 'negro', 'blanco','lila');
cola.print();

const dividirQueue = (dato, dato_2) =>
{
    let divisor = 0;
    let contenedor;
    divisor = dato.size()/2;
    //console.log(divisor);
    for (let i=0; i < divisor; i++)
    {
        contenedor = dato.dequeue();
        dato_2.enqueue(contenedor);
    }

    dato.print();
    dato_2.print();

}

dividirQueue(cola, cola_auxiliar);
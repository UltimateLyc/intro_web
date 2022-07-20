/* 
2.- Se tiene una cola en la cual se han repartido tickets con el orden de atención. Sin embargo, llegada la hora de inicio hay muchos “colados”, es por esto que se le ordena al vigilante que retire a todos aquellos que no tienen ticket. Muestra la cola inicial, qué elementos fueron retirados de la cola y la cola final.
*/
class Queue {
    constructor() {
        this.items = []
    }
    
    enqueue(item) {
        this.items.push(item)
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

let queue = new Queue();

queue.enqueue({ user:'User1', ticket:true   })
queue.enqueue({ user:'User2', ticket:true   })
queue.enqueue({ user:'User3', ticket:false  })
queue.enqueue({ user:'User4', ticket:true   })
queue.enqueue({ user:'User5', ticket:false  })
queue.enqueue({ user:'User6', ticket:false  })
queue.enqueue({ user:'User7', ticket:true   })
queue.enqueue({ user:'User8', ticket:true   })
queue.enqueue({ user:'User9', ticket:true   })
queue.enqueue({ user:'User10', ticket:false })
queue.enqueue({ user:'User11', ticket:true  })

console.log("La fila");
queue.print();
//console.log(queue.peek().ticket); // aqui podemos ver el valor del objeto almaceno una de sus partes

const sinColados = data =>
{
    let colados = new Queue();
    let noColados = new Queue();
    let container;

    let length = data.size()

    for (let i = 0; i < length; i++)
    {
        if (data.peek().ticket == true)
        {
            container = data.dequeue();
            noColados.enqueue(container)
        }
        else
        {
            container = data.dequeue();
            colados.enqueue(container)
        }
    }
    
    console.log("Los no colados");
    noColados.print();

    console.log("Los colados");
    colados.print();
}

sinColados(queue);
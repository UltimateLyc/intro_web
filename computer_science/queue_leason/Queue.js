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

cola.enqueue(1,2,3,4,5,6,7,8);
cola.print();
cola.dequeue();
cola.print();
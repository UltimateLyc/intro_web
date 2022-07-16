 class Stack 
 {
    constructor()
    {
        this.items = [];
    }

    push (...item) //Agregar
    {
        this.items.push(...item);//Si aqui no coloco el spread operator me crea un solo array dentro del array [[1,2,3,4,5]] :. hay q colocarlo para que lo cargue como un array unico [1,2,3,4,5]
    }

    pop () //Quitar
    {
        return this.items.pop();
    }

    peek () //retorna el ultimo
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

 let s = new Stack();
s.push(1,2,3,4,5,6);
//s.print();
//console.log(s.size());
//s.pop();
s.print();
//console.log(s.peek());
//console.log(s.size());

let s2 = new Stack();
s2.print()
let v = s.pop();
console.log (`Esta es una prueba de V = ${v}`);
s2.push(v);
s2.print();

v = s.pop();
console.log (`Esta es una prueba 2 de V = ${v}`);
s2.push(v);
s2.print();

let s3 = new Stack();
v = s2.pop();
s3.push(v);
s3.print();

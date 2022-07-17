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
stack.push (3,2,3,4,8,1,2,5,25,35);
stack.print();

const montacargas = (pila,numero) =>
{
    let secureContainer = 0;
    let principalContainer;
    let auxLength = pila.size();
    let iterador = 0;

    for(let i = 0; i < auxLength; i++)//Con esto volteamos el stack
    {
        secureContainer = pila.pop();
        stack_auxiliar.push(secureContainer)
    }

    do
    {
        iterador++; //jejejej solo cambie donde inicia el iterado :3
        if (iterador === numero)
        {
            //console.log("entere")
            principalContainer = stack_auxiliar.pop();
        }
        else
        {
            secureContainer = stack_auxiliar.pop();
            pila.push(secureContainer);
        }
        
    }while(stack_auxiliar.size() !== 0)

    console.log(`El stack deseado es: ${principalContainer}`);
    pila.print()
    //stack_auxiliar.print()
}

montacargas(stack,4);
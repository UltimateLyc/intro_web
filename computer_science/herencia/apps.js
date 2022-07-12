//Calse
class Animal
{
    constructor()
    {
        this.brain = true;
        this.legs = 0;
    }
}

class Human extends Animal
{
    constructor(nombre)
    {
        //super() = Animal.this
        super().legs = 2;
        this.nombre = nombre;
    }

    //Metodo
    tiene_cerebro()
    {
        return this.brain
    }

    presentar()
    {
        console.log(`Hola me llamo ${this.nombre}`)
    }
}

class Pet extends Animal
{
    constructor()
    {
        super().legs = 4;
        this.fleas = 0;
    }

    //Metodo


    banar ()
    {
        this.fleas = 0;
    }
}

class Dog extends Pet
{
    constructor()
    {
        super().fleas = 8;
    }
}

class Cat extends Pet
{
    constructor()
    {
        super().fleas = 4;
    }
}


let test_human = new Human("Rafael");
console.log(test_human);
let test_pet = new Pet();
console.log(test_pet);
let test_pet_dog = new Dog;
console.log(test_pet_dog);
let test_pet_cat = new Cat;
console.log(test_pet_cat);

test_pet_dog.banar();
console.log(test_pet_dog);

test_human.presentar();
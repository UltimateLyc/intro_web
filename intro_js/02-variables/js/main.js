//Primer paso: Definir las variables 
let fullName; // let es la lo mismo que var
let actualYear, year_of_birth;
let age;

//Segundo paso: pedir los datos 

fullName = prompt ('Digita tu nombre');
actualYear = prompt ('Digita el año actual');
year_of_birth = prompt ('Digite el año de su nacimiento');

//Tercer paso: desarrollo de la logica

age = Number(actualYear) - Number(year_of_birth); // Number se usa para cambiar la variable a numero

//Cuarto paso: mostrar datos
document.write('Hola ' + fullName + ', tu edad aproximada es: ' + age);

typeof(age);
typeof(fullName);
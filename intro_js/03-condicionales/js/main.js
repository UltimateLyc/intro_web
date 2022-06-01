//Primer paso: Definir las variables 
let fullName; // let es la lo mismo que var
let actualYear, year_of_birth;
let age;
let resultado;

//Segundo paso: pedir los datos 

fullName = prompt ('Digita tu nombre');
actualYear = Number(prompt ('Digita el año actual')) ;
year_of_birth = Number(prompt ('Digite el año de su nacimiento')) ;

//Tercer paso: desarrollo de la logica
/* if (typeof(actualYear) === 'number' && typeof(year_of_birth) === 'number') 
{
    age = actualYear - year_of_birth;

    resultado = `Hola ${fullName}, tu edad aproximada es ${age}`;
}
else
{
    resultado = `Por favor ingrese años vañidos`;
} */

if (isNaN (actualYear) || isNaN (year_of_birth)) // isNaN sirve para evaluar si el numero es numero o no lo es mediante un true o un false
{

    resultado = `Por favor ingrese años validos`;

}
else
{

    age = actualYear - year_of_birth;

    resultado = `Hola ${fullName}, tu edad aproximada es ${age}`;

}

document.write(resultado);
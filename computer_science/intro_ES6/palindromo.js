/* Funcion normal */
/* function palindrome(palabra)
{
    //Usamos el método split() para devolver un nuevo arreglo separado String "hola" split() = ["h", "o", "l", "a"]
    //Usamos el método reverse() para invertir el nuevo arreglo creado reverse() = ["a", "l", "o", "h"]
    //Usamos el método join() para unir todos los elementos del arreglo en una cadena join() = aloh
    
    // replace(/ /g,""); quita los espacios a nivel global si solo usas replace(" ","") solo quitara el primero que se encuentre
    let noSpace =  palabra.replace(/ /g,"");

    noSpace = noSpace.toLowerCase();
    console.log(noSpace);

    let words = noSpace.split("").reverse().join(""); 
    if (noSpace == words)
    {
        return "Este es un palindromo";
    }
    else
    {
        return "Este no es un palindromo";
    }
} */

/*  Function arrow */ 

const palindrome = (palabra) =>
{
    let noSpace =  palabra.replace(/ /g,"");

    noSpace = noSpace.toLowerCase();

    let words = noSpace.split("").reverse().join(""); 
    if (noSpace == words)
    {
        return "Este es un palindromo";
    }
    else
    {
        return "Este no es un palindromo";
    }
}
 
console.log(palindrome("Anita Lava la Tina"));
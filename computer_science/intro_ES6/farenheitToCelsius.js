/* Funcion tradicional */
/* function farenheitToCelsius(grados)
{
    return ((grados-32)*(5/9));

}
 */

/* Function arrow */
/* const farenheitToCelsius = (grados) =>
{
    return ((grados-32)*(5/9));
} */

/* Function arrow azucar sintetica */
const farenheitToCelsius = grados => (grados-32)*(5/9);


/**
 * Impresion en consola
 */
console.log(farenheitToCelsius(60));
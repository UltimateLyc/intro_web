const paises = ["México", "Panamá", "Estados Unidos de Norte America", "Guatemala", "El Salvador"]

/* Funcion tradicional */
/* function longestCountry(arreglo)
{
    let longest = 0;
    let container = 0;
    
    for (let i=0; i < paises.length; i++)
    {
        if (longest < paises[i].length)
        {
            longest = paises[i].length;
            container = i;
        }
    }

    return paises[container];
} */

/* Function arrow */
const longestCountry = (arreglo) =>
{
    let longest = 0;
    let container = 0;
    
    for (let i=0; i < paises.length; i++)
    {
        if (longest < paises[i].length)
        {
            longest = paises[i].length;
            container = i;
        }
    }

    return paises[container];
}

console.log(longestCountry(paises));
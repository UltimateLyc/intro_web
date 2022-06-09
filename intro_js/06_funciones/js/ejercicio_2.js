//cuente el numero de vocales en un string (cadena de caracteres)

const vocales = ['a', 'e', 'i', 'o', 'u'];

/* const miNombre = 'Gerardo Nava Pereda';
miNombre.length; */

const contarVocales = function(string)
{
    let contadorDeVocales = 0;
    const arregoDeMiNombre = string.split('');

    for(let i = 0; i < arregoDeMiNombre.length; i++ )
    {
        if(vocales.includes(arregoDeMiNombre[i]))
        {
            contadorDeVocales ++;
        }
    }
    return contadorDeVocales;
}

const misVocales = contarVocales('Gerardo Nava Pereda');
console.log(misVocales);
//POKEAPI
//https://pokeapi.co/
//ENDPOIT
// https://pokeapi.co/api/v2/pokemon/pikachu

// 1) vamos a traer a REQUEST
const request = require ('request')

// 2) Declarar mi URI de mi API
const URI = 'https://pokeapi.co/api/v2/pokemon/'

// 3) Funcion que pidea un pokemon y me devuelva sus tipos
function getPokemonTypeByName(name)
{
    //Es buena practica su una API es sensible a "Mayusculas"/"Minisculas"

    request.get(URI + name, function (error, response, body) 
    {
        //Si mi peticion es exitosa,devuelve la data
        if (response.statusCode === 200)
        {
            const bodyEnFormatoJs = JSON.parse(body) //PARSE convierte un objeto JSON en un obj de JS
            const typePokemon = bodyEnFormatoJs.types.map((objeto)=>objeto.type.name)
            console.log(`EL TIPO DE ${name} es: ${typePokemon}`)
        }
        else
        {
            //Si el codigo de estado (statusCode) es cualquier otro, muestra el mensaje de error
            console.log(`OCURRIO UN ERROR: ${response.statusCode} ${response.statusMessage}`)
                                        //!         404                 Not Found
        }
    });
}

getPokemonTypeByName('dragonite')
getPokemonTypeByName('pikachu')
getPokemonTypeByName('bullbausor')
getPokemonTypeByName('ditto')

//import fetch from "node-fetch"

let urlPokeApi = `https://pokeapi.co/api/v2/pokemon/` ///pokemon/${pokemon}

//const apiRequest = await fetch (urlPokeApi)
//const apiRequestJson = await apiRequest.json()
//console.log(apiRequestJson)

let pokemon = 'Charizard'
pokemon = pokemon.toLowerCase()



async function test ()
{
    urlPokeApi = `https://pokeapi.co/api/v2/pokemon/1`//?limit=1000&offset=0
    
    //console.log(apiRequestJson)

    let containerImagen = document.getElementById('contenedor_cartas')

    for (let i=1; i<= 992; i++)
    {
        urlPokeApi = `https://pokeapi.co/api/v2/pokemon/${i}`
        const apiRequest = await fetch (urlPokeApi)
        const apiRequestJson = await apiRequest.json()
        containerImagen.innerHTML += `
        <div class = "card mb-2 col-sm-12 com-md-6 col-lg-4" style="width: 18rem;">
            <img src=${apiRequestJson.sprites.front_default} class="card-img-top" alt=>
            <div class="card-body">
                <h5 class="card-title">${apiRequestJson.name}</h5>
                
            </div>
        </div>
    `
    }
}

test();
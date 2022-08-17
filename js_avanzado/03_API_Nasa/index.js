console.log('API de la NASA');
import fetch from "node-fetch";
const key = 'QbohNMZcTf3ZNi4GPxnBnPpCKocqtYacoaPF8aRw';

let urlapi = `https://api.nasa.gov/neo/rest/v1/feed?start_date=2015-09-07&end_date=2015-09-08&api_key=${key}`;

const respuestaApi = await fetch(urlapi); //Cuando revisamos un api usamos await para que esta tenga el tiempo de buscar y luego almacenarla
/* console.log(respuestaApi) */

const respuestaJson = await respuestaApi.json(); //Guardamos el JSON en una variable 
/* console.log(respuestaJson); */

let meteoritos = respuestaJson.near_earth_objects;/*['2015-09-08'];//Harcode */ //Leemos el objeto y lo guardamos 
/* console.log(meteoritos) */ //Imprime todo el JSON

Object.keys(meteoritos).forEach((elemento, indice, arreglo) =>{
    let listaXdia = meteoritos[elemento]
    //Con for normal
    /* for(let i = 0; i < listaXdia.length; i++)
    {
        if(listaXdia[i].is_potentially_hazardous_asteroid)
        {
            console.log(`El meteorito ${listaXdia[i].name} es potencialmente peligroso`)
        }
        else
        {
            console.log(`Este metiorito ${listaXdia[i].name} no es peligroso`)
        }
    } */

    //con for each
    listaXdia.forEach((elemento,indice, arreglo)=>{
       /*  if(elemento.is_potentially_hazardous_asteroid)
        {
            console.log(`El meteorito ${elemento.name} es potencialmente peligroso. El diametro estimado es: ${(((elemento.estimated_diameter.meters.estimated_diameter_min)+(elemento.estimated_diameter.meters.estimated_diameter_max))/2).toFixed(2)} metros`)
        }
        else
        {
            console.log(`Este metiorito ${elemento.name} no es peligroso. El diametro estimado es: ${(((elemento.estimated_diameter.meters.estimated_diameter_min)+(elemento.estimated_diameter.meters.estimated_diameter_max))/2).toFixed(2)} metros`)
        } */
    })
}) 
//De esta manera recorremos las llaves (fechas) de manera automatica y nos imprime los elementos 
//ya que no podemos mandar el ID: 0 ya que es un JSON y el ID nuevo es la "fecha"

//*****************  Fotos de Marte *****************

 let urlFotosApi = `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&page=2&api_key=${key}`;

 async function fotosMarte(url)
 {
    let respuestaApiFotos = await fetch(url);
    let respuestaApiJson = await respuestaApiFotos.json();
    console.log(respuestaApiJson.photos[0].camera);
    console.log(respuestaApiJson.photos[0].rover);
 }

 fotosMarte(urlFotosApi);
console.log('API de la NASA');
//*****************  Fotos de Marte *****************

/* Variables Globales */

const key = 'QbohNMZcTf3ZNi4GPxnBnPpCKocqtYacoaPF8aRw';
const roverGeneral = "curiosity";
let contadorPaginas = 1;
let urlFotosApi = `https://api.nasa.gov/mars-photos/api/v1/rovers/${roverGeneral}/photos?sol=1000&page=${contadorPaginas}&api_key=${key}`;
let selectRobert = document.getElementById("robot");

async function fotosMarte(rover)
{
    urlFotosApi = `https://api.nasa.gov/mars-photos/api/v1/rovers/${rover}/photos?sol=1000&page=${contadorPaginas}&api_key=${key}`; //Tiene que ir primero que todo para que cambie la el valor de "rover" 
    console.log("urlFotosApi", urlFotosApi) //Monitoreo de lo que ingresa a urlFotoApi

    /* Variables locales */
    let respuestaApiFotos = await fetch(urlFotosApi);
    //console.log("respuestaApiFotos", respuestaApiFotos) // Muestra la consulta al API
    
    let respuestaApiJson = await respuestaApiFotos.json();
    //console.log("respuestaApiJson", respuestaApiJson)//Muesta el JSON que entrega el API
    
    let listaFotos = respuestaApiJson.photos;
    console.log(listaFotos); // Muestra los obejtos del Array del JSON
    
    let tamañoLista =  listaFotos.length;
    console.log("tamañoLista", tamañoLista)//El tamalo del Array de objetos
    
    next(tamañoLista);
    preview(contadorPaginas);

    let contenedor = document.getElementById("contenedor_cartas");
    contenedor.innerHTML = ""; //Con esto limpiamos el contenedor
    

    listaFotos.forEach((elemento, indice, arreglo) => {
        contenedor.innerHTML += 
        `<div class = "card mb-2 col-sm-12 com-md-6 col-lg-4" style="width: 18rem;">
            <img src=${elemento.img_src} class="card-img-top" alt=${elemento.id}>
            <div class="card-body">
                <h5 class="card-title">${elemento.camera.full_name}</h5>
                <p class="card-text">${elemento.earth_date}</p>
            </div>
        </div>`
    });
    //console.log(respuestaApiJson.photos);
    //console.log(respuestaApiJson.photos[0].camera);
    //console.log(respuestaApiJson.photos[0].rover);
}

function buscar()
{
    let maquina = selectRobert.value;
    console.log("maquina", maquina)
    contadorPaginas = 1;
    fotosMarte(maquina);
}

const next = (tamaño) =>
{
    let siguiente = document.getElementById("siguiente")

    if (tamaño >= 25)
    {
        siguiente.classList.remove('invisible');
        siguiente.classList.add('visible');
    }
    else 
    {
        siguiente.classList.remove('visible');
        siguiente.classList.add('invisible');
    }
}

function siguiente()
{
    contadorPaginas++;
    console.log(contadorPaginas)
    let roverSiguiente = selectRobert.value;
    preview(contadorPaginas);
    fotosMarte(roverSiguiente);
}

const preview = (contador) =>
{
    let anterior = document.getElementById("anterior")
    if (contador >= 2)
    {
        anterior.classList.remove('invisible');
        anterior.classList.add('visible');
    }
    else if (contador < 2)
    {
        anterior.classList.remove('visible');
        anterior.classList.add('invisible');
    }
}

function anterior()
{
    contadorPaginas--;
    let roverAnterior = selectRobert.value;
    fotosMarte(roverAnterior);
    //preview(contadorPaginas);
}
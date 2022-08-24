//Ejemplo Try Catch
/* 
console.log("Ejemplo de try")

function division(a,b)
{
	try
    {
	var resultado = a/b
	suma(a,b)//GENERA ERROR PORQUE FUNCION SUMA NO ESTA DEFINIDA
	return resultado
	} catch
    {
		
		return "No se pudo hacer la division, pero atrape el error"
	}
}

let arreglo = [1,3,4,2,0,3,4]
for (let i=0;i<arreglo.length;i++)
{	
	console.log(division(6,arreglo[i]))
}
 */
//Promesas
//Math.ceil - Redondea al entero superior Ejemplo 4.2 lo redondea a 5
//Math.floor - Redondea al entero inferior Ejemplo 4.2 lo redondea a 4
//Math.randon - Gerenera un numero aleatorio entre 0 y 1 
    // Si queremos generar un numero entere 0 y n "Multiplicamos Math.random * n"
    //Si queremos generar un numero random entre "x" y "y" se resta y - x y buscamos ese valor como n, porsteriormente sumamos n + x  Ejemplo entre 20 y 30 n=10 y sumanos 20 + (Math.random * n) 
import fetch from "node-fetch";

/* const promesaEjemplo = () =>
{
    return new Promise ((resolve,reject) =>
    {
        const numeroAleatorio = Math.ceil(Math.random()*10)
        setTimeout(() => {
            numeroAleatorio >= 5 ? resolve(numeroAleatorio):reject(new Error(`El ${numeroAleatorio} es menor que 5`))
        }, 2000);
    })
}

promesaEjemplo().then(numepr =>{
    console.log(numero)
}) */


//Funcion Async()
let apiLibrary = "http://openlibrary.org/search.json?author=tolkien";

async function buscarAutor (urlAutor)
{
    //Direccion para buscar un libro en especifico

    let respuesta = await fetch(urlAutor)
    let respuestaJson = await respuesta.json()
    //console.log(respuestaJson)
    
    //docs es una lista de libos que contiene jsons de cada libro encontrado
    let listaLibros = respuestaJson.docs;
    let listaCodigos = listaLibros[0].isbn
    //console.log(listaCodigos[0])

    var  urlLibro = `https://openlibrary.org/isbn/${listaCodigos[0]}.json`
    
    let arregloRespuestas = []

    let arregloPromises = []

    listaCodigos.forEach(async(elemento,indice,arreglo) => {
        urlLibro = `https://openlibrary.org/isbn/${elemento}.json`
        let promesa = await fetch(urlLibro).then((r)=>r)
        arregloPromises.push(promesa)
        
    }) 
    return new Promise ((resolve,reject)=>{
        Promise.all(arregloPromises).then((proms)=>{
            proms.forEach((p)=>arregloRespuestas.push(p))

        }).then(()=>resolve(arregloRespuestas))
    })

    
    //console.log(arregloRespuestas)
}

buscarAutor(apiLibrary)
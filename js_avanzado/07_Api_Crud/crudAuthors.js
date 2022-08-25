// Vamos a tener la logica
// Documentacion: https://goodreads-devf-aaron.herokuapp.com/docs/
// URI de la API: https://goodreads-devf-aaron.herokuapp.com/api/v1/

//1) Traer a request que acabamos de instalar

const request = require ('request')

//2) Traer nuestro endpiont
const URI = 'https://goodreads-devf-aaron.herokuapp.com/api/v1/authors/'

// Lista a todos los autores (authors)
const listAuthors = () => {
    request.get(URI,(error, response, body) => {
        if(response.statusCode === 200)
        {
            const authors = JSON.parse(body)
            console.log(authors)
        }
        else
        {
            console.log(response.statusCode , response.statusMessage)
                    //          404             Not Found
        }
    })
}

const getAuthors = (id) => {
    request.get(URI+id+'/',(error, response, body) => {
        if(response.statusCode === 200)
        {
            const author = JSON.parse(body)
            console.log(author)
        }
        else
        {
            console.log('ID NO VALIDO: ',response.statusCode , response.statusMessage)
                                //          404             Not Found
        }
    })
}

// Crear un autor - Creamos un obejeto con informacion a crear y para ello necesitamos usar un formato JSON

const createAuthor = (jsonData) => {
    const objConfig = {
        url: URI, //Apartado para crear el autor /api/v1/authors/
        form: jsonData //Esta es mi data en formato JSON
    }

    //Hacemos la peticion
    request.post(objConfig, (error, response, body) => {
        if(response.statusCode === 201)
        {
            const createAuthor = JSON.parse(body)
            console.log("El autor se creo exitosamente ", createAuthor)
        }
        else
        {
            console.log(response.statusCode, response.statusMessage)
                    //          404             Not Found
        }
    })
}

//Partial Update de un Autor
const patchAuthor = (id, jsonData) => {
    const objConfig = {
        url: URI + id + '/',
        form: jsonData // Esta es mi data que deseo modificar en mi JSON
    }

    request.patch(objConfig,(error, response, body) => {
        if(response.statusCode === 200)
        {
            const author = JSON.parse(body)
            console.log("Se actualizo el autor correctamente: ", author)
        }
        else
        {
            console.log(response.statusCode, response.statusMessage)
                    //          404             Not Found
        }
    })
}

//Eliminar un autor
const deleteAuthor = (id) => {
    request.delete(URI+id+'/',(error,response,body)=>{
        if(response.statusCode === 204)
        {
            console.log("El autor fue eliminado exitosamente")
        }
        else
        {
            console.log(response.statusCode, response.statusMessage)
                    //          404             Not Found
        }
    })
}

//Sirve para exportar las funciones a otro archivo
module.exports = {
    listAuthors,
    getAuthors,
    createAuthor,
    patchAuthor,
    deleteAuthor
}
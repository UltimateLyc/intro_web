//Ejecutar mis bloques de codigo
//Main es nuestro archivo js principal
const goodReadsCrud = require('./crudAuthors')

//Lsita de todos los autores
//goodReadsCrud.listAuthors()

//Lista a un autor por su ID
//goodReadsCrud.getAuthors(14627)

//Crear un Autor
const jsonSend = 
{
	name: "Condorito",
	last_name: "Pepo",
	nacionalidad: "MX",
	biography: "Comedia",
	gender: "M",
	age: 40,
	is_alive: false
}
//goodReadsCrud.createAuthor(jsonSend)

//Modificar un Autor
const updateData =
{
    name: "Juan",
    last_name: "perez"
}
//goodReadsCrud.patchAuthor(14827, updateData)

//Eliminar un autor
goodReadsCrud.deleteAuthor(14627)

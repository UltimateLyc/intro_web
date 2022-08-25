//Ejecutar mis bloques de codigo
//Main es nuestro archivo js principal
const goodReadsCrud = require('./crudAuthors')

//Lsita de todos los autores
//goodReadsCrud.listAuthors()

//Lista a un autor por su ID
goodReadsCrud.getAuthors(14828)

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
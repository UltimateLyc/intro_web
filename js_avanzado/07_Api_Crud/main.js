//Ejecutar mis bloques de codigo
//Main es nuestro archivo js principal
const goodReadsCrud = require('./crudAuthors')

//Lsita de todos los autores
//goodReadsCrud.listAuthors()

//Lista a un autor por su ID
goodReadsCrud.getAuthors(14639)
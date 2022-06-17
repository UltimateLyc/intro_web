/* Leer nodos */
//document.getElementById  //Para obtener un elemento por su "id"
//parent.getElementsByTagName //Para obtener un elemento por su "etiqueta"
//parent.getElementsByClassName //Para obtener un elemento por su "clase"

/* Leer nodos con esteroides  */
//document.parentElement.querySelector
//document.parentElement.querySelectorAll

/* Cual es la diferencia entre NodeList vs Array */
//Siempre que tengas un node list es bueno cambiarlo a array
//  1.- const nodeList = document.querySelectorAll('div');
//  2.- const nodeListAsArray = [...nodeList];
//Asi tendremos todos los metodos avanzados de un Array

/* Crear nodos */
//document.createElement // Crear un elemento o "etiqueta"
//document.createTextNode // Crear un texto

/* Agregar Nodos */ 
//document.appendChild // Agrega un nodo por debajo de los anteriores
//document.append // append('text', document.createElement('etiqueta')) //es el appendChild mejorado, 1.- Puedes agregar mas de un nodo 2.- puedes agregar texo 
//document.insertBefore // document.insertBefore (nose, reference) // 
//referencia.insertAdjacentElemt // beforebegin, afterbegin, beforeend, afterend

const li = document.createElement('li'); // con esto creamos un etiqueta mas no la posicionamos en ningun lugar del HTML
li.textContent = 'primer elemento';

lista.appendChild(li); // de esta manera incoporo a la clase o id un hijo
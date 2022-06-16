/* document.querySelector('h3');
console.log(document.querySelector('h3'));
console.log(document.querySelector('.h3-danger'));

console.log(document.querySelector('#parrafo'));
console.log(document.getElementById('parrafo'));

console.log(document.querySelectorAll('.h3-danger'));
console.log(document.querySelectorAll('h3')); */
/* 
const parrafo = document.querySelector('#parrafo');
parrafo.textContent = 'tecto de JS';
//parrafo.innerHTML = '<b>tecto con inner con HTML</b>'; // con inner podemos agregar etiquetas 

parrafo.classList.add('h3-fanger', 'my-2'); //de esta manera podemos agregar una clase a la etiqueta
 */
const lista = document.getElementById('lista');
console.log(lista); //Siempre es bueno mostrarlo en consola para saber que esta tomando bien la informacion

/* 
const li = document.createElement('li'); // con esto creamos un etiqueta mas no la posicionamos en ningun lugar del HTML
li.textContent = 'primer elemento';

lista.appendChild(li); // de esta manera incoporo a la clase o id un hijo
 */

const arrayElement = ['primer elemento', 'segundo', 'tercero'];

/* arrayElement.forEach(item =>
    {
    console.log(item);
    const li = document.createElement('li');
    li.textContent = item;
    lista.appendChild(li);
    }) */

arrayElement.forEach(item =>{
    lista.innerHTML +=`<li>${item}</li>`
})
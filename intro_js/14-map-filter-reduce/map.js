const arrayString = ["a", "b", "c"];
const arrayNumeros = [1,2,3];
const arrayObjeto = 
[
    {
        id: 0,
        usuario: "Oscar",
        password: "asdfghj",
        edad: 18,
    },
    {
        id: 1,
        usuario: "Andres",
        password: "qwertyu",
        edad: 20,
    }
]
/* function imprimirElementosDelArray(element)
{
    console.log("🚀 ~ file: map.js ~ line 20 ~ element", element)
}

arrayString.forEach();
 */

function getName(element)
{
    return element.usuario;
}

const resultado = arrayObjeto.map(getName)
console.log("🚀 ~ file: map.js ~ line 32 ~ resultado", resultado) //Me regresa el array de lo solicitado del objeto [ 'Oscar', 'Andres' ]


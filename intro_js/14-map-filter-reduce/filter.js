const arrayNumeros = [1,2,3,100,200,300,1000];

const filtrarPorCantidad = function(numero) 
{
    return numero >= 100;
} //Arrow Functions investigar

const resultado = arrayNumeros.filter(filtrarPorCantidad);
console.log("🚀 ~ file: filter.js ~ line 9 ~ resultado", resultado)


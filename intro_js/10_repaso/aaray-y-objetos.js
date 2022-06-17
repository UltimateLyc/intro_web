const usuario = [
    {
        id: 0,
        nombre: "",
        edad: null,
        esAdulto: true,
    },

    {
        id: 1,
        nombre: "",
        edad: null,
        esVip: true,
    },

    {
        id: 3,
        nombre: "",
        edad: null,
    }
];

//Modificar el segundo nombre
//indexOf
//findIndex
//find

function validador()
{
    return element.id ===2;
}

const index = usuario.findIndex(validador)
usuario[index].nombre = "Carlos";
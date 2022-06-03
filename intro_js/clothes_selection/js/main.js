let genero;
let tipo_evento;
let vacaciones;
let dia_noche;

//gustos en colores

do 
{
    genero = prompt ('Cual es tu genero? M = Masculino // F = Femenino');
    genero = genero.toUpperCase();
}
while(genero != 'M' && genero != 'F');

if (genero === 'F')//Para Mujer
{
    do // Evaluamos el tipo de evento
    {
        tipo_evento = prompt('El evento es "C" Casual o "F" Formal?');
        tipo_evento = tipo_evento.toUpperCase();
    }
    while(tipo_evento != 'C' && tipo_evento != 'F');

    if (tipo_evento === "F") //Evalua si es formal
    {
        do
        {
            dia_noche = prompt('El evento es de día o noche D/N?')
            dia_noche = dia_noche.toUpperCase();
        } 
        while(dia_noche != 'D' && dia_noche != 'N');

        if (dia_noche === 'D')
        {
            //Ya podemos empezar a preguntar sobre la vestimenta de dia
        }
        else
        {
            //Ya podemos empezar a preguntar sobre la vestimenta de noche
        }

    }
    else // Evalua si es informal 
    {
        do 
        {
            vacaciones = prompt ("Estas de vaciones S/N");
            vacaciones = vacaciones.toUpperCase();
        }
        while(vacaciones != 'S' && vacaciones != 'N');

        if(vacacione === "S")
        {
            // lugar calido o frio 
        }
        else
        {
            /* si es una cita si es una salida compas etc  */
        }
        
    }

}
else // Para Hombre 
{


}
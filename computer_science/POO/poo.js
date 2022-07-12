class Alumno
{
    constructor(nombre, apellido, calificacionFinal, inscrito)
    {
        this.nombre = nombre;
        this.apellido = apellido;
        this.calificacionFinal = calificacionFinal;
        this.inscrito = inscrito;
        this.calificaciones = [];
    }

    //Esto esta encapsulado en el objeto
    //Llamada "Metodo"
    estarInscrito()
    {
        if(this.inscrito)
            return "El alumno esta inscrito";
        else
            return "El alumno no esta inscrito"
    }

    obtenerInicialesDeAlumno()
    {

        return `Las iniciales del alumno son ${this.nombre.charAt(0)+this.apellido.charAt(0)}`;
    }

    obtenerNombreCompleto()
    {
        return `El nombre completo del alumno es: ${this.nombre} ${this.apellido}`;
    }

    aprobado()
    {
        if(this.calificacionFinal >= 6.0)
            return "Alumno aprobado";
        else
            return "Alumno reprobado";
    }

    agregarCalificacion(materia, promedio)
    {
        this.calificaciones.push(promedio)
    }

    obtenerPromedio()
    {
        let suma = 0;

        for(let i = 0; i < this.calificaciones.length; i++)
        {   
            suma += this.calificaciones[i];
        }

        return suma/this.calificaciones.length;
    }
}

let rafael = new Alumno ("Rafael", "Ramos", 5.9, true);

rafael.agregarCalificacion("Matematicas", 8.5);
rafael.agregarCalificacion("Español", 5.0);
rafael.agregarCalificacion("Geografia", 4.5);

console.log(rafael.estarInscrito());
console.log(rafael.obtenerInicialesDeAlumno());
console.log(rafael.obtenerNombreCompleto());
console.log(rafael.aprobado());

console.log(rafael.obtenerPromedio());
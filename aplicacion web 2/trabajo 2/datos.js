//esto es un objeto

const Curso = [
    {
        id: 1,
        Descripcion: 'programacion',
        FechaInicio: '17/10/2022',
        HoraIncio: '10:00'
        
    },
    {
        id: 2,
        Descripcion: 'Movil',
        FechaInicio: '10/10/2022',
        HoraIncio: '10:00'
    },
    {
        id: 3,
        Descripcion: 'Redes',
        FechaInicio: '27/11/2022',
        HoraIncio: '10:00'
    },
    {
        id: 4,
        Descripcion: 'Seguridad',
        FechaInicio: '5/12/2022',
        HoraIncio: '10:00'
    }
    
]

const Aspirante = [
    {
        id: 1,
        Nombre: 'Panchis',
        Identificacion: '1319876545',
        Correo: 'panchis@gmail.com'

    },
    {
        id: 2,
        Nombre: 'Pedro',
        Identificacion: '1317865432',
        Correo: 'panchis@gmail.com'
    },
    {
        id: 3,
        Nombre: 'Maria',
        Identificacion: '1310988751',
        Correo: 'panchis@gmail.com'
    },
    {
        id: 4,
        Nombre: 'Mario',
        Identificacion: '1311234589',
        Correo: 'panchis@gmail.com'
    },
]

const Inscripcion = [
    {
        id: 1,
        idCurso: 1,
        idAspirante: 1,
        Fecha: '10/10/2022',
        Hora: '10:00',
        ValorCancelar: '$ 20'
    },
    {
        id: 2,
        idCurso: 2,
        idAspirante: 2,
        Fecha: '8/11/2022',
        Hora: '14:00',
        ValorCancelar: '$ 20'
    },
    {
        id: 3,
        idCurso: 3,
        idAspirante: 3,
        Fecha: '18/11/2022',
        Hora: '08:00',
        ValorCancelar: '$ 15'
    },
    {
        id: 4,
        idCurso: 4,
        idAspirante: 4,
        Fecha: '28/10/2022',
        Hora: '10:00',
        ValorCancelar: '$ 15'
    },
]

module.exports = {
    Curso,
    Aspirante,
    Inscripcion
}


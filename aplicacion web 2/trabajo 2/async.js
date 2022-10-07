const {Curso} = require('./datos')
const {Aspirante} = require('./datos')
const {Inscripcion} = require('./datos')

async function  buscarCursoId (id) {
    return new Promise((resolve, reject) =>{
       const cursos = Curso.find((cursos) => cursos.id === id)
       if(!cursos){
        const error = new Error()
        error.message = 'Curso no encontrado'
        reject(error)
       }
       resolve(cursos)     
    })
}

async function buscarAspiranteId(id){
    return new Promise((resolve, reject) =>{
        const aspirante = Aspirante.find((aspirante) => {
            return aspirante.id === id
        })
        if(!aspirante){
            const error = new Error()
            error.message = 'Aspirante no encontrado'
            reject(error)
        }
        resolve(aspirante)
    })
}

async function buscarInscripcionId (id){
    return new Promise((resolve, reject)=>{
        const inscripcion = Inscripcion.find((inscripcion) =>{
            return inscripcion.id === id
        })
        if(!inscripcion){
            const error = new Error()
            error.message = 'Isncripcion no encontrado'
            reject(error)
        }
        resolve(inscripcion)
    })
}

//luego de definir los campos hacemos el llamado de las funciones
//que se definieron para mostrar tipo array todos los datos.
(async () =>{
    try {
        const cursos = await buscarCursoId(1)
        const aspirante = await buscarAspiranteId(1)
        const inscripcion = await buscarInscripcionId(aspirante.id)

        aspirante.inscripcion = inscripcion
        inscripcion.Curso = cursos
        //con esto podemos eliminar o omitir que se muestre el idcocinero etc
        delete inscripcion.idCurso;
        delete inscripcion.idAspirante;
        console.log(aspirante)

    } catch (error) {
        console.log(error.message)
    }
})()

const {Curso} = require('./datos')
const {Aspirante} = require('./datos')
const {Inscripcion} = require('./datos')

//AQUI PODEMOS USAR TANTO FUNCION COMO CONST
const  buscarCursoId = (id) => {
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

function buscarAspiranteId(id){
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

const buscarInscripcionId =(id)=>{
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
// //INSCRIPCION CON CURSO
console.log('AQUI SE DEFINE UNA PROMESA QUE PUEDE SER MEDIANTE UNA FUNCION O COMO CONSTANTE')
console.log('********************************************************************************')
buscarInscripcionId(1).then((inscripcion)=>{
    return buscarCursoId(inscripcion.idCurso)
}).then((cursos)=>{
    console.log('DATOS EXTRAIDOS MEDIATES INSCRIPCION POR SU ID DEL CURSO: ',cursos)
})
.catch((error)=>{
    console.log(error.message)
})
// //INSCRIPCION CON ASPIRANTE
buscarInscripcionId(1).then((inscripcion)=>{
    return buscarAspiranteId(inscripcion.idAspirante)
}).then((aspirante)=>{
    console.log('DATOS EXTRAIDOS MEDIATES INSCRIPCION POR SU ID DEL ASPIRANTE: ',aspirante)
})
.catch((error)=>{
    console.log(error.message)
})
// //SOLO DATOS DE INSCRIPCION
buscarInscripcionId(1).then((inscripcion)=>{
    return buscarInscripcionId(inscripcion.id)
}).then((inscripcion)=>{
    console.log('DATOS DE SOLO INSCRIPCION: ',inscripcion)
})
.catch((error)=>{
    console.log(error.message)
})
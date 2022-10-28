const axios = require('axios')

exports.homeRoutes = (req, res) =>{
    // Hacer una solicitud get a /api/aspirantes
    axios.get('http://localhost:3000/api/inscripciones')
    .then(function(response){
        res.render('inscripcion',{inscripciones: response.data})
    })
    .catch(err => {
        res.send(err)
    })
    
}

exports.add_inscripcion = (req, res) => {
    res.render('add_inscripcion')
}

exports.update_inscripcion = (req, res) => {
    axios.get('http://localhost:3000/api/inscripciones',{params: { id:req.query.id}})
    .then(function(inscripciondata){
        res.render("update_inscripcion",{ inscripcion: inscripciondata.data})
    })
    .catch(err => {
        res.send(err)
    })
}
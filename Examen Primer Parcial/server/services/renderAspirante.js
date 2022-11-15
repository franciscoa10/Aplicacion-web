const axios = require('axios')

exports.homeRoutes = (req, res) =>{
    // Hacer una solicitud get a /api/aspirantes
    axios.get('http://localhost:3000/api/aspirantes')
    .then(function(response){
        res.render('index',{aspirantes: response.data})
    })
    .catch(err => {
        res.send(err)
    })
    
}

exports.add_aspirante = (req, res) => {
    res.render('add_aspirante')
}

exports.update_aspirante = (req, res) => {
    axios.get('http://localhost:3000/api/aspirantes',{params: { id:req.query.id}})
    .then(function(aspirantedata){
        res.render("update_aspirante",{ aspirante: aspirantedata.data})
    })
    .catch(err => {
        res.send(err)
    })
}
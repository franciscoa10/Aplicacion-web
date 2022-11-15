const axios = require('axios')

exports.cursoRoutes = (req, res) =>{
    // Hacer una solicitud get a /api/curso
    axios.get('http://localhost:3000/api/cursos')
    .then(function(response){
        res.render('curso',{cursos: response.data})
    })
    .catch(err => {
        res.send(err)
    })
    
}

exports.add_curso = (req, res) => {
    res.render('add_curso')
}

exports.update_curso = (req, res) => {
    axios.get('http://localhost:3000/api/cursos',{params: { id:req.query.id}})
    .then(function(cursodata){
        res.render("update_curso",{ curso: cursodata.data})//este es para abrir el editar es asi (update_curso)
    })
    .catch(err => {
        res.send(err)
    })
}
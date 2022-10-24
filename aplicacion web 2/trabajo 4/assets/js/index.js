//AGREGAR ASPIRANTE
$("#add_aspirante").submit(function (event) {
  alert("Dato insertado correctamente!");
});

//ACTUALIZAR ASPIRANTE
$("#update_aspirante").submit(function (event){
    event.preventDefault()

    var unindexed_array=$(this).serializeArray()
    var data = {}

    $.map(unindexed_array, function(n,i){
        data[n['name']] = n['value']
    })
    console.log(data)

    var request = {
        "url": `http://localhost:3000/api/aspirantes/${data.id}`,
        "method": "PUT",
        "data": data
    }

    $.ajax(request).done(function(response){
        alert("Dato actualizado correctamente!")
    })
})

//ELIMINAR ASPIRANTE

if(window.location.pathname == "/"){
    $ondelete = $(".table tbody td a.delete")
    $ondelete.click(function(){
        var id = $(this).attr("data-id")

        var request = {
            "url": `http://localhost:3000/api/aspirantes/${id}`,
            "method": "DELETE"
        }

        if(confirm("¿De verdad quieres eliminar este registro?")){
            $.ajax(request).done(function(response){
                alert("Dato eliminado correctamente!")
                location.reload()
            })
        }
    })
}
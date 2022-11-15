//AGREGAR ASPIRANTE
$("#add_curso").submit(function (event) {
  alert("Dato insertado correctamente!");
});

//ACTUALIZAR CURSO
$("#update_curso").submit(function (event) {
  event.preventDefault();

  var unindexed_array = $(this).serializeArray();
  //console.log(unindexed_array);
    var data = {}

    $.map(unindexed_array, function(n,i){
        data[n['name']] = n['value']
    })
    console.log(data)

    var request = {
        "url": `http://localhost:3000/api/cursos/${data.id}`,
        "method": "PUT",
        "data": data
    }

    $.ajax(request).done(function(response){
        alert("Dato actualizado correctamente!")
    })
});

//ELIMINAR ASPIRANTE

if (window.location.pathname == "/curso") {
  $ondelete = $(".table tbody td a.delete");
  $ondelete.click(function () {
    var id = $(this).attr("data-id");

    var request = {
      url: `http://localhost:3000/api/cursos/${id}`,
      method: "DELETE",
    };

    if (confirm("¿De verdad quieres eliminar este registro?")) {
      $.ajax(request).done(function (response) {
        alert("Dato eliminado correctamente!");
        location.reload();
      });
    }
  });
}

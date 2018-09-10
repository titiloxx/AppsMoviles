// JavaScript source code

$(document).ready(function () {
    $.ajax({
        url: 'http://www.mercadopy.somee.com/Home/AppMoviles',
        dataType: 'json',
        success: Success,
        error: function (error) {
            alert(error);
        }
    });


});

function AgregarProducto(id, imagen, nombre)
{
    $('<div class="articulo"><img id="'+ id +'" class="imagenes pointer" src="'+ imagen +'"><p>'+ nombre +'</p></div>').appendTo($("#computadoras"));
}

function Success(data){
    var obj = JSON.parse(data);
    for (var i = 0; i < 3; i++) {
    AgregarProducto(obj.productos[i].id, obj.productos[i].imagen, obj.productos[i].nombre);
    }
}

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

function AgregarProducto(id,producto)
{
    $("#"+id).append('<div class="articulo"><img id="apple" class="imagenes pointer" src="img/apple.jpg"><p>Computadora Apple i7 6600k gtx 1060</p></div>');
 
}
function Success(data){
    var obj = JSON.parse(data);
}

// JavaScript source code

$(document).ready(function () {
    $.ajax({
        url: 'http://www.mercadopy.somee.com/Home/BuscarComputadoras',
        dataType: 'json',
        type: "GET",
        success: Success,
        error: Error
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

function Imprimir(data) {
    var msg = JSON.parse(data)["msg"];
    alert(msg);
    if (data.includes(" 4a")) {
        Completa();
    }
   
}

function CuatroA() {
    $.ajax({
        url: 'http://www.mercadopy.somee.com/Home/CuatroA',
        dataType: 'json',
        type: "GET",
        timeout: 5000,
        success: Imprimir,
        error: function () {
            Error();
            Completa();
        }
    });
}
function CuatroB() {
    var nombrex = prompt("Nombre", "Harry");
    var apellidox = prompt("Apellido", "Potter");
    var dnix = prompt("DNI", "28255255");
    $.ajax({
        url: 'http://www.mercadopy.somee.com/Home/CuatroB',
        dataType: 'json',
        data: param = { nombre: nombrex, apellido: apellidox, dni: dnix },
        type: "GET",
        success: Imprimir,
        error: Error
    });
} function CuatroC() {
    var nombrex = prompt("Nombre", "Harry");
    var apellidox = prompt("Apellido", "Potter");
    var dnix = prompt("DNI", "28255255");
    $.ajax({
        url: 'http://www.mercadopy.somee.com/Home/CuatroC',
        dataType: 'json',
        type: "POST",
        data: param = { nombre: nombrex, apellido: apellidox, dni: dnix },
        success: Imprimir,
        error: Error
    });
}
function Error()
{
    alert("Hubo un error con la solicitud, por favor verifica tu conexion a internet");
}
function Completa()
{
    alert("Peticion completada");
}
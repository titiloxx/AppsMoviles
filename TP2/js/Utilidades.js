// JavaScript source code
 $(document).ready(function() {
     $('.imagenes').click(function () {
         var nombre = this.parentElement.innerText;
         var opacidad = $(this).css('opacity');
         var id = $(this).attr("id");
         if (opacidad != "0.7") {
             agregarAlCarro(id,nombre);
             $(this).css('opacity', 0.7);
         }
         else {
             eliminarDelCarro(id);
             $(this).css('opacity',1);
         }
         actualizarTotalCarro();
     });
     
});
function actualizarTotalCarro() {
    var cantidad = $(".list-group-item").length;
    $("#total").text("Total: $" + cantidad * 3000);
    $(".badge").text(cantidad);
}
function agregarAlCarro(id,nombre) {
    $('#listaCarro').append('<li id="'+id+'Carro" class="list-group-item">' + nombre + '</li>');
    var cantidad = $(".list-group-item").length;
}
function eliminarDelCarro(id) {
    $("#"+id + "Carro").remove()

}
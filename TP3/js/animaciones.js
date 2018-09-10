 $( document ).ready(function() {
   

    $("#logo").hover(function(){
        $(".listaMenu").animate({
            height: 'toggle'
        });
    });

    $("#logo").click(function(){
        var div = $("#carro");
        div.animate({height: '300px', opacity: '0.4'}, "slow");
        div.animate({width: '300px', opacity: '0.8'}, "slow");
        div.animate({height: '100px', opacity: '0.4'}, "slow");
        div.animate({width: '100px', opacity: '0.8'}, "slow");
    });

});
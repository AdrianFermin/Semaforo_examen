var activo = true;
var rojo = $("#rojo");
var amarillo = $("#amarillo");
var verde = $("#verde");

function cambiarSemaforo(color, tiempo){
    setTimeout(function(){
        if(color == rojo){
            verde.removeClass("bg-success");
            verde.addClass("bg-secondary");
            rojo.removeClass("bg-secondary");
            rojo.addClass("bg-danger");
            cambiarSemaforo(amarillo, 180000);
        } else if (color == amarillo){
            rojo.removeClass("bg-danger");
            rojo.addClass("bg-secondary");
            amarillo.removeClass("bg-secondary");
            amarillo.addClass("bg-warning");
            cambiarSemaforo(verde, 60000);
        } else if(color == verde) {
            amarillo.removeClass("bg-warning");
            amarillo.addClass("bg-secondary");
            verde.removeClass("bg-secondary");
            verde.addClass("bg-success");
            cambiarSemaforo(rojo, 240000);
        }

    }, tiempo);
}

cambiarSemaforo(rojo, 0);
$(function () {

    // Tooltip
    $('[data-toggle="tooltip"]').tooltip()

    // click botón correo
    $("#enviarCorreo").click(function () {
        alert("El correo fue enviado correctamente...");
    });

    //Cambio color doble click con ON - titulo ingredientes
    $("h3").on("dblclick", (function () {
        $(this).css({
            "color": "red"
        });
    }));

    //Cambio color doble click sin ON - titulo preparación
    $("h4").dblclick(function () {
        $(this).css({
            "color": "red"
        });
    });

    //toggle - mostrar y ocultar contenido de card simultáneamente
    $(".text-title").click(function(){
        $(".text-subtitle").toggle();
      });

});

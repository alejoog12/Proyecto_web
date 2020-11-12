$(document).ready(function() {
    $('#lightbox').hide();

    $('.imagen-lightbox').click(function() {

        //Get clicked link href
        let image_href = this.getAttribute("src");

        if ($('#lightbox').length > 0) { // #lightbox exists


            let imagenCambiar = document.querySelector(".imagen-mostrada");
            imagenCambiar.setAttribute("src", image_href);


            $("#lightbox").fadeIn('slow');
        }
    });


    $('#flecha-izquierda').click(function() {
        let image_href = $(".imagen-mostrada").attr("src");

        const clase = document.querySelectorAll(".imagen-lightbox");

        let direccionPrevia;

        for (var i = 0; i < clase.length; i++) {

            let direccionImagenes = clase[i].getAttribute('src');

            if (direccionImagenes == image_href && i != 0) {

                direccionPrevia = clase[i - 1].getAttribute('src');

            } else if (direccionImagenes == image_href && i == 0) {

                direccionPrevia = clase[clase.length - 1].getAttribute('src');
            }
        }
        let imagenCambiar = document.querySelector(".imagen-mostrada");
        imagenCambiar.setAttribute("src", direccionPrevia);


    });
    $('#boton-cerrar').click(function() {

        $("#lightbox").fadeOut('slow');

    });
    $('#flecha-derecha').click(function() {

        let image_href = $(".imagen-mostrada").attr("src");

        const clase = document.querySelectorAll(".imagen-lightbox");

        let direccionSiguiente;

        for (var i = 0; i < clase.length; i++) {

            let direccionImagenes = clase[i].getAttribute('src');

            if (direccionImagenes == image_href && i != clase.length - 1) {
                direccionSiguiente = clase[i + 1].getAttribute('src');
                break;


            } else if (direccionImagenes == image_href && i == clase.length - 1) {
                direccionSiguiente = clase[0].getAttribute('src');
                break;

            }
        }

        let imagenCambiar = document.querySelector(".imagen-mostrada");

        imagenCambiar.setAttribute("src", direccionSiguiente);



    });




});
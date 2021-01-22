/* Formulario */

$("input#nombre").keydown(function(){

    if(/^[a-zA-ZÀ-ÿ\u00f1\u00d1]+(\s*[a-zA-ZÀ-ÿ\u00f1\u00d1]*)*[a-zA-ZÀ-ÿ\u00f1\u00d1]+$/.test($(this).val()) && $(this).val() !== ""){
        $(this).css("border", "1px solid green");
        $("input#apellido").prop("disabled", false);
    }else{
        $(this).css("border", "1px solid red");
        $("input#apellido").prop("disabled", true);
    }

})

$("input#apellido").keydown(function(){

    if(/^[a-zA-ZÀ-ÿ\u00f1\u00d1]+(\s*[a-zA-ZÀ-ÿ\u00f1\u00d1]*)*[a-zA-ZÀ-ÿ\u00f1\u00d1]+$/.test($(this).val()) && $(this).val() !== ""){
        $(this).css("border", "1px solid green");
        $("input#email").prop("disabled", false);
    }else{
        $(this).css("border", "1px solid red");
        $("input#email").prop("disabled", true);
    }

})


$("input#email").keydown(function(){

    if(/^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/.test($(this).val()) && $(this).val() !== ""){
        $(this).css("border", "1px solid green");
        $("input#pais").prop("disabled", false);
    }else{
        $(this).css("border", "1px solid red");
        $("input#pais").prop("disabled", true);
    }

})

$("input#pais").keydown(function(){

    if(/^[a-zA-ZÀ-ÿ\u00f1\u00d1]+(\s*[a-zA-ZÀ-ÿ\u00f1\u00d1]*)*[a-zA-ZÀ-ÿ\u00f1\u00d1]+$/.test($(this).val()) && $(this).val() !== ""){
        $(this).css("border", "1px solid green");
        $("input#fechaNacimiento").prop("disabled", false);
    }else{
        $(this).css("border", "1px solid red");
        $("input#fechaNacimiento").prop("disabled", true);
    }

})

$("input#fechaNacimiento").keydown(function(){

    if(/^(\d{1,2})-(\d{1,2})-(\d{4})$/.test($(this).val()) && $(this).val() !== ""){
        $(this).css("border", "1px solid green");
        $("input#enviar").prop("disabled", false);
    }else{
        $(this).css("border", "1px solid red");
        $("input#enviar").prop("disabled", true);
    }

})

/* Recoger Testimonios */

function recogerTestimonios(){
    $.ajax({
        dataType: "json",
        url: "testimonios.json",
        data: "data",
        success: function(response){
            for (let i=0; i<3; i++){
                let aleatorio = Math.floor(Math.random() * 6);
                $("label#nombre"+i.toString()).text(response.testimonios[aleatorio].nombre);
                $("p#texto"+i.toString()).text(response.testimonios[aleatorio].texto);
                
            }
        }
    })
    setTimeout(recogerTestimonios, 10000);
}

/* Recoger productos */

function recogerProductos(){
    $.ajax({
        dataType: "json",
        url: "productos.json",
        data: "data",
        success: function(response){
            for (let i=0; i<3; i++){
                $("p#producto"+i.toString()).text(response.productos[i].nombre);
                $("div#imagen"+i.toString()).prepend(`<img id="imagen1" src="${response.productos[i].imagen}" alt="${response.productos[i].nombre}"/>`);
            }
        },
        error: function(){
            console.log("Error al obtener los productos");
            setTimeout(recogerProductos, 5000);
        }
    })
}

/* Obtener localizacion */

function obtenerCoordenaadas(){
    if ("geolocation" in navigator){
        navigator.geolocation.getCurrentPosition(function(position){ 
            console.log("Tu localizacion es: \nLatitud : "+position.coords.latitude+". \nLongitud : "+ position.coords.longitude);
            });
    }else{
        console.log("Error al obtener la localización");
    }
}

/* Scroll hacia arriba */
function botonArriba(){
    $(document).ready(function(){
        
        $(window).scroll(function(){
            if ($(this).scrollTop() > 100) {
                $('#botonArriba').fadeIn();
            } else {
                $('#botonArriba').fadeOut();
            }
        });
        
        $('#botonArriba').click(function(){
            $('html, body').animate({scrollTop : 0},600);
            return false;
        });
        
    });
}

/* Animacion de los productos al hacer scroll */
function animacionProductos(){
    document.addEventListener('scroll', function (e) {
        var top  = window.pageYOffset + window.innerHeight,
            isVisible = top > document.querySelector('#productos > div').offsetTop;
             
         if (isVisible) {
           document.getElementById('productos').classList.add('animate');
        }
    });
}

/* Animacion de los testimonios al hacer scroll */
function animacionTestimonios(){
    document.addEventListener('scroll', function (e) {
        var top  = window.pageYOffset + window.innerHeight,
            isVisible = top > document.querySelector('#testimonios > div').offsetTop;
             
         if (isVisible) {
           document.getElementById('testimonios').classList.add('animate');
        }
    });
     
}


/* Cambiar la vista */

function cambiarVista(){
    var lista = false;

    $( "#botonCambiarVista" ).click(function() {
    lista=!lista;
    if(lista){
        $("#testimonios").css("display","flex");
    }
    else{ 
        $("#testimonios").css("display","grid");
    }
    }); 
}


/* Llamada a funciones */
animacionProductos();
animacionTestimonios();
botonArriba();
cambiarVista();
obtenerCoordenaadas();
recogerProductos();
recogerTestimonios();

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


function recogerTestimonios(){
    let aleatorio = Math.floor(Math.random() * 6);
    $.ajax({
        dataType: "json",
        url: "testimonios.json",
        data: "data",
        success: function(response){
            for (let i=1; i<=3; i++){
                let aleatorio = Math.floor(Math.random() * 7);
                $("div#testimonio"+i.toString()).text(response.testimonios[aleatorio].nombre);
            }
            // $("div#testimonio1").text(response.testimonios[aleatorio].nombre);
            // aleatorio = Math.floor(Math.random() * 6);
            // $("div#testimonio2").text(response.testimonios[aleatorio].nombre);
            // aleatorio = Math.floor(Math.random() * 6);
            // $("div#testimonio3").text(response.testimonios[aleatorio].nombre);
        }
    })
    setTimeout(recogerTestimonios, 10000);
}

function recogerProductos(){
    $.ajax({
        dataType: "json",
        url: "productos.json",
        data: "data",
        success: function(response){
            for (let i=0; i<3; i++){
                $("h2#producto"+i.toString()).text(response.productos[i].nombre);
                $("div#imagen"+i.toString()).prepend('<img id="imagen1" src="'+response.productos[i].imagen+'"/>');
            }
        }
    })
}

recogerProductos();
recogerTestimonios();

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



var animes = {"array": [
    { "producto": "Naruto", "tipo": "shonen", "imagen": "naruto1.jpg" },
    {"producto": "One punch man", "tipo": "shonen", "imagen": "onepunchaman1.jpg"},
    {"producto" : "Attack on titan", "tipo": "shonen", "imagen": "attackontitan.jpg"}
]};
    
    var animes2 = JSON.stringify(animes);
    
    localStorage.setItem("series", animes2)
    
    let serie = JSON.parse(localStorage.getItem("series"));
    
    
    //console.log(JSON.parse(series));
    
    console.log(serie.array[0].producto);
    
    $("#imagen1 h2").html(serie.array[0].producto);
    $('div#imagen1').prepend('<img id="imagen1" src="naruto1.jpg" alt="naruto" />');

    $("#imagen2 h2").html(serie.array[1].producto);
    $('div#imagen2').prepend('<img id="imagen1" src="onepunchman1.jpg" alt="onepunchman" />');

    $("#imagen3 h2").html(serie.array[2].producto);
    $('div#imagen3').prepend('<img id="imagen1" src="attackontitan.jpg" alt="attackontitan" />');

var testimonios = {"testimonio": [
    { "nombre": "Pepe", "texto": "La mejor pagina web para ver anime en España"},
    { "nombre": "Antonio", "texto": "Tiene todos los animes que busco a un precio bastante asequible"},
    { "nombre": "Jose Carlos", "texto": "Que rico un 10"},
]}


var testimonios2 = JSON.stringify(testimonios);

localStorage.setItem("testimonios", testimonios2);

let testimonios3 = JSON.parse(localStorage.getItem("testimonios"));


console.log(testimonios3.testimonio[0].nombre);
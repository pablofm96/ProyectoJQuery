$("input#nombre").keydown(function(){

    if(/^[a-zA-Z]*$/.test($(this).val()) && $(this).val() !== ""){
        $(this).css("border", "1px solid green");
        $("input#apellido").prop("disabled", false);
    }else{
        $(this).css("border", "1px solid red");
        $("input#apellido").prop("disabled", true);
    }

})

$("input#apellido").keydown(function(){

    if(/^[a-zA-Z]*$/.test($(this).val()) && $(this).val() !== ""){
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

    if(/^[a-zA-Z]*$/.test($(this).val()) && $(this).val() !== ""){
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




//javascript
(function(){
    "use strict";

    document.addEventListener("DOMContentLoaded", function(){

    })//Dom Content Loaded
})();
//jQuery
$(function(){
    
    $(".ocultar").hide();

    $(".btn1").on("click", function(){

        if($(this).hasClass("1a")){
            $(".Menutitle").text("Bebidas");
            $(".menu1").hide();
            $(".menu2").fadeIn(500);
            $(".2a").fadeIn(500);
            $(".backbtn").addClass("back1");
        }
        if($(this).hasClass("1b")){
            $(".Menutitle").text("Platillos");
            $(".menu1").hide();
            $(".menu2").fadeIn(500);
            $(".2b").fadeIn(500);
            $(".backbtn").addClass("back1");
        }

        return false;     
    });

    $(".btn2").on("click", function(){

        if($(this).hasClass("2a1")){
            $(".Menutitle").text("Bebidas");
            $(".menu2").hide();
            $(".menu3").fadeIn(500);
            $(".backbtn").addClass("back2");
        }
        if($(this).hasClass("2a2")){
            $(".Menutitle").text("Platillos");
            $(".menu2").hide();
            $(".menu3").fadeIn(500);
            $(".backbtn").addClass("back2");
        }

        return false;     
    });

    $(".backbtn").on("click", function(){

        if($(this).hasClass("back1")){
            $(".Menutitle").text("Menú");
            $(".ocultar").hide();
            $(".menu1").fadeIn(500);
            $(this).removeClass("back1")
        }
        if($(this).hasClass("back2")){
            $(".Menutitle").text("Menú");
            $(".ocultar").hide();
            $(".menu1").fadeIn(500);
            $(this).removeClass("back1")
        }

        return false;     
    });
});
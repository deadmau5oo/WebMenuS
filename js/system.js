//javascript
(function(){
    "use strict";

    document.addEventListener("DOMContentLoaded", function(){

    })//Dom Content Loaded
})();
//jQuery
$(function(){
    
    $(".ocultar").hide();
    $(".userMenu").animate({
        'margin-top' : "-100vh",
    },500);

    $(".btn1").on("click", function(){
        $(".menu1").hide();
        $(".menu2").fadeIn(500);

        if($(this).hasClass("1a")){
            $(".backbtn").addClass("back1");
            app.menuTitle2 = "Bebidas";
        }
        if($(this).hasClass("1b")){
            $(".backbtn").addClass("back1");
            app.menuTitle2 = "Platillos";
        }

        return false;     
    });


    $(".backbtn").on("click", function(){

        if($(this).hasClass("back2")){
            app.menuTitle = app.menuTitle2;
            $(".menu3").hide();
            $(".menu2").fadeIn(500);
            $(this).removeClass("back2");
            return false;
            
        }
        if($(this).hasClass("back1")){
            app.menuTitle="Menú";

            $(".menu2").hide();
            $(".menu1").fadeIn(500);
            $(this).removeClass("back1");
            return false;
        }

        return false;     
    });

    $(".PYCb").on("click", function(){
        if($(this).hasClass("1")){
            $(".PYC").show(500);
        } else {
            $(".PYC").hide();
        }
        
        return false;     
    });

    $(".CardMenu").on("click", function(){
        if($(this).hasClass("activo")){
            $(".userMenu").animate({
                'margin-top' : "-100vh",
            },500);
            $(this).removeClass("activo");
        } else {
            $(".userMenu").animate({
                'margin-top' : "0vh",
            },500);
            $(this).addClass("activo");
        }
        
        return false;     
    });

});
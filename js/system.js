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
        $(".menu1").hide();
        $(".menu2").fadeIn(500);

        if($(this).hasClass("1a")){
            $(".backbtn").addClass("back1");
        }
        if($(this).hasClass("1b")){
            $(".backbtn").addClass("back1");
        }

        return false;     
    });

    

    $(".backbtn").on("click", function(){

        if($(this).hasClass("back2")){

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

});
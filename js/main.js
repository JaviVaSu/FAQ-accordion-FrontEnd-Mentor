$(document).ready(function(){

    cont1 = 1;
    cont2 = 0;
    cont3 = 0;
    cont4 = 0;

    $("#section1").click(function(){
        switch(cont1){
            case 0:
                $("#ocultar1").slideDown(1500);
                $("#section1").attr("src", "./assets/images/icon-minus.svg")
                cont1 = 1;
                break;
            case 1:
                $("#ocultar1").slideUp(1500);
                $("#section1").attr("src", "./assets/images/icon-plus.svg")
                cont1 = 0;
                break;
        }
    });

    $("#section2").click(function(){
        switch(cont2){
            case 0:
                $("#ocultar2").slideDown(1500);
                $("#section2").attr("src", "./assets/images/icon-minus.svg")
                cont2 = 1;
                break;
            case 1:
                $("#ocultar2").slideUp(1500);
                $("#section2").attr("src", "./assets/images/icon-plus.svg")
                cont2 = 0;
                break;
        }
    });

    $("#section3").click(function(){
        switch(cont3){
            case 0:
                $("#ocultar3").slideDown(1500);
                $("#section3").attr("src", "./assets/images/icon-minus.svg")
                cont3 = 1;
                break;
            case 1:
                $("#ocultar3").slideUp(1500);
                $("#section3").attr("src", "./assets/images/icon-plus.svg")
                cont3 = 0;
                break;
        }
    });

    $("#section4").click(function(){
        switch(cont4){
            case 0:
                $("#ocultar4").slideDown(1500);
                $("#section4").attr("src", "./assets/images/icon-minus.svg")
                cont4 = 1;
                break;
            case 1:
                $("#ocultar4").slideUp(1500);
                $("#section4").attr("src", "./assets/images/icon-plus.svg")
                cont4 = 0;
                break;
        }
    });

});
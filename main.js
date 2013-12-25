$(document).ready(function(){
    var wheel1 = $('#wheel-1');
    var wheel2 = $('#wheel-2');
    var wheel3 = $('#wheel-3');
    $('#input').keypress(function(event){
        $('.selected').removeClass('selected');
        var txt = String.fromCharCode(event.keyCode);
        $('#'+txt).addClass("selected");
        if (parseInt(wheel1.html(), 10)==9) {
            if (parseInt(wheel2.html(), 10) == 9) {
                if (parseInt(wheel3.html(), 10) == 9) {
                    wheel3.text('-1');
                }
                wheel3.html(parseInt(wheel3.html(), 10)+1)
                wheel2.text('-1');
            }
            wheel2.html(parseInt(wheel2.html(), 10)+1)
            wheel1.text('-1');
        }
        wheel1.html(parseInt(wheel1.html(), 10)+1)

    });
    $('.btn').onClick(function(event){

    });
});
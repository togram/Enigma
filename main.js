$(document).ready(function(){
    $('#input').keypress(function(event){
        $('.selected').removeClass('selected');
        var txt = String.fromCharCode(event.keyCode);
        $('#'+txt).addClass("selected");
   });
});
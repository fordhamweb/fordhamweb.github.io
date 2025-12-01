$(document).ready(function(){

$(".purpleleaf").hover(function(){
    $(".yellowleaf").fadeIn(3000);
    $("h1").fadeIn(1000);
    $(".greenleaf").fadeIn(5000);
}, function(){
    $(".yellowleaf").fadeOut("fast");
    $(".greenleaf").fadeOut("fast");

});



$(".rose").hover(function(){
    $(".rosetext").fadeToggle();
    $(".daisy").fadeToggle();
    $(".rose2").fadeToggle();
    $(".rose3").fadeToggle();
});

$(".daisy").hover(function(){
    $(".daisytext").fadeToggle();
    $(".rose").fadeToggle();
    $(".daisy2").fadeToggle();
});


$(".burger").click(function(){
    $(".navigation").fadeToggle();
});

$("a").click(function(){
    $(".navigation").hide();
});



});
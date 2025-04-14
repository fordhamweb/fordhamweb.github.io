$(document).ready(function(){

$(".purpleleaf").hover(function(){
    $(".yellowleaf").fadeIn(200);
}, function(){
    $(".yellowleaf").fadeOut(100);
});

$(".greenleaf").click(function(){
    $(".purpleleaf").fadeOut(400);
    $(this).fadeOut(400);
});

$(".reset").click(function(){
    location.reload();
})

// flowers section 

$(".rose").hover(function(){
    $(".rosetext").fadeToggle(300);
    $(".daisy").fadeToggle(300);
});

$(".daisy").hover(function(){
    $(".daisytext").fadeToggle(300);
    $(".rose").fadeToggle(300);
});

// more flowers section 

$("#box1 .topclick").click(function(){
    $("#box1 .panel").slideToggle("slow");
});

$("#box2 .topclick").click(function(){
    $("#box2 .panel").slideToggle("slow");
});

// burger menu

$(".burger").click(function(){
    $("nav").toggle();
});

$("a").click(function(){
    $("nav").hide();
})















});
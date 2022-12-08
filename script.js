$('.nav-bars').click(function(){
   $('.offcanvas').css({'transform':'translateX(0)'});
   $('html').css({'overflow':'hidden'});
});
$('.close i').click(function(){
    $('.offcanvas').css({'transform':'translateX(-100%)'});
    $('html').css({'overflow':'auto'});
});

window.addEventListener("scroll", function(){
    var header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 0);
})

//функция счета высоты окна
/*$(function(){



    $(window).on("scroll", function() {
        var introH = $("#intro").innerHeight();

        console.log(introH);

    });



});*/


//функция считает сколько пикселей проскролено
/*$(function() {

    var header = $("#header"),
        introH = $("#intro").innerHeight(),
        scrolloffset = 0;

    $(window).on("scroll", function() {
        
        scrolloffset = $(this).scrollTop();
        
        console.log(scrolloffset);
    });



});*/

//итоговая функция в которой меню срабатывает всегда
/*$(function() {

    var header = $("#header"),
        introH = $("#intro").innerHeight(),
        scrollOffset = $(window).scrollTop();

    checkScroll(scrollOffset);    

    $(window).on("scroll", function() {        
        scrollOffset = $(this).scrollTop();

        checkScroll(scrollOffset);
    });

    function checkScroll(scrollOffset) {
        if( scrollOffset >= introH ) {
            header.addClass("fixed");
        } else {
            header.removeClass("fixed");
        }
    }

});*/

$(function() {

    var header = $("#header"),
        introH = $("#intro").innerHeight(),
        scrollOffset = $(window).scrollTop();

    checkScroll(scrollOffset);    

    $(window).on("scroll", function() {        
        scrollOffset = $(this).scrollTop();

        checkScroll(scrollOffset);
    });

    function checkScroll(scrollOffset) {
        if( scrollOffset >= introH ) {
            header.addClass("fixed");
        } else {
            header.removeClass("fixed");
        }
    }

    /* Smooth scroll - плавная анимация прокрутки*/
    /*$("[data-scroll]").on("click", function(event) {
        event.preventDefault();

        var blockId = $(this).data('scroll'),
            blockOffset = $(blockId).offset().top;

        $("html, body").animate({
            scrollTop: blockOffset
        }, 500);
    });*/

    /* active режим кнопок*/
    $("[data-scroll]").on("click", function(event) {
        event.preventDefault();

        var $this = $(this),
            blockId = $(this).data('scroll'),
            blockOffset = $(blockId).offset().top;

        $("#nav a").removeClass("active");
        $this.addClass("active");

        $("html, body").animate({
            scrollTop: blockOffset
        }, 500);
    });

    /*Menu nav toggle*/
    /*$("#nav_toggle").on("click", function(event){
        event.preventDefault();

        $("#nav").toggleClass("active");
    })/*


    /*Menu nav toggle active режим бургер меню*/
    $("#nav_toggle").on("click", function(event) {
        event.preventDefault();

        $(this).toggleClass("active");
        $("#nav").toggleClass("active");
    });

    
    /*Collapse*/
    $("[data-collapse]").on("click", function(event) {
        event.preventDefault();

        var $this = $(this),
            blockId = $this.data('collapse');

        $this.toggleClass("active");
        $(blockId).slideToggle();    
    });

    /*Slider*/
    $("[data-slider]").slick({
        infinite: true,
        fade: false,
        slidesToShow: 1,
        slidesToScroll: 1
    });
});





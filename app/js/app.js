$(function () {
    //$('.image-block').slick();
    $("#menu").on("click","a", function (event) {
        event.preventDefault();
        let id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1000);
    });

    $('.header_burger').click(function (event) {
        $('.header_burger, #menu').toggleClass('active')
    })


     $('.count').counterUp({
         delay: 10,
         time: 2000
     });
    $(' #da-thumbs > li ').each( function() { $(this).hoverdir(); } );

});






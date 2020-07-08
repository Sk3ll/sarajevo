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

    var check = 1;
    var target = $('.facts-wrap');
    var targetPos = target.offset().top;
    var winHeight = $(window).height();
    var scrollToElem = targetPos - winHeight;
    $(window).scroll(function() {
        var winScrollTop = $(this).scrollTop();
        if(winScrollTop > scrollToElem && check) {
            $('.count').each(function () {
                $(this).prop('Counter', -1).animate({
                    Counters: $(this).text()
                },{
                    duration: 2000,
                    easing: 'swing',
                    step: function (now) {
                        $(this).text(Math.ceil(now));
                    }
                });
            });
        }
    });

    $(' #da-thumbs > li ').each( function() { $(this).hoverdir(); } );

});






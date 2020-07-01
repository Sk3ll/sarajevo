$(function () {
  //  $('.your-class').slick();
    $("#menu").on("click","a", function (event) {
        event.preventDefault();
        let id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1000);
    });

    $('.count').each(function () {
        $(this).prop('Counter', 0).animate({
            Counters: $(this).text()
        },{
            duration: 2000,
            easing: 'swing',
            step: function (now) {
                $(this).text(Math.ceil(now));
            }
        });
    });

    $('.header_burger').click(function (event) {
        $('.header_burger, #menu').toggleClass('active')
    })

});



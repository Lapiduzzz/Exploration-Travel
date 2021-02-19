
wow = new WOW(
    {
        boxClass:     'wow',
        animateClass: 'animated',
        offset:       100,
        mobile:       true,
        live:         true
    }
)
wow.init();


$(window).scroll(function(){
    if ($(window).scrollTop() >= 50) {
        $('.header').addClass('header-scroll');
    }
    else {
        $('.header').removeClass('header-scroll');
    }
});

$('.experiences-wrapper').slick({
    centerMode: true,
    centerPadding: '120px',
    slidesToShow: 4,
    slidesToScroll: 4,
    prevArrow: $('.prev'),
    nextArrow: $('.next'),
    responsive: [
        {
            breakpoint: 768,
            settings: {
                arrows: false,
                centerMode: true,
                centerPadding: '40px',
                slidesToShow: 1
            }
        },
        {
            breakpoint: 480,
            settings: {
                arrows: false,
                centerMode: true,
                centerPadding: '40px',
                slidesToShow: 1
            }
        }
    ]
});

$('.itineraries-wrapper').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: $('.prev-2'),
    nextArrow: $('.next-2')
});






$(function () {
    $('.nav-1, .n1').mouseover(function () {
        $('.n1').addClass('nav-active');
        $('.nav-line1').addClass('nav-line-active');
    });
    $('.nav-1, .n1').mouseout(function () {
        $('.n1').removeClass('nav-active');
        $('.nav-line1').removeClass('nav-line-active');
    });
});

$(function () {
    $('.nav-2, .n2').mouseover(function () {
        $('.n2').addClass('nav-active');
        $('.nav-line2').addClass('nav-line-active');
    });
    $('.nav-2, .n2').mouseout(function () {
        $('.n2').removeClass('nav-active');
        $('.nav-line2').removeClass('nav-line-active');
    });
});

$(function () {
    $('.nav-3, .n3').mouseover(function () {
        $('.n3').addClass('nav-active');
        $('.nav-line3').addClass('nav-line-active');
    });
    $('.nav-3, .n3').mouseout(function () {
        $('.n3').removeClass('nav-active');
        $('.nav-line3').removeClass('nav-line-active');
    });
});

$(function () {
    $('.nav-4, .n4').mouseover(function () {
        $('.n4').addClass('nav-active');
        $('.nav-line4').addClass('nav-line-active');
    });
    $('.nav-4, .n4').mouseout(function () {
        $('.n4').removeClass('nav-active');
        $('.nav-line4').removeClass('nav-line-active');
    });
});

$(function () {
    $('.nav-5, .n5').mouseover(function () {
        $('.n5').addClass('nav-active');
        $('.nav-line5').addClass('nav-line-active');
    });
    $('.nav-5, .n5').mouseout(function () {
        $('.n5').removeClass('nav-active');
        $('.nav-line5').removeClass('nav-line-active');
    });
});

$(function () {
    $('.nav-6, .n6').mouseover(function () {
        $('.n6').addClass('nav-active');
        $('.nav-line6').addClass('nav-line-active');
    });
    $('.nav-6, .n6').mouseout(function () {
        $('.n6').removeClass('nav-active');
        $('.nav-line6').removeClass('nav-line-active');
    });
});





//$(function () {
  //  $('.b-ptg').click(function (event) {
    //    $(this).children("ul").slideToggle();
      //  event.stopPropagation();
   // });
//});


$(function () {
    $('.b-ptg').click(function () {
        $('.b-ul-ptg').slideToggle();
    });
});
$(function () {
    $('.b-tgd').click(function () {
        $('.b-ul-tgd').slideToggle();
    });
});
$(function () {
    $('.b-exp').click(function () {
        $('.b-ul-exp').slideToggle();
    });
});
$(function () {
    $('.b-pyt').click(function () {
        $('.b-ul-pyt').slideToggle();
    });
});
$(function () {
    $('.b-len').click(function () {
        $('.b-ul-len').slideToggle();
    });
});




$('.burger').click(function (){
    $('.b-span').toggleClass('burger-active');
    $('.burger-menu').toggleClass('burger-menu-active');

});








$(document).ready(function () {
    $('.box-background').slick({
        mobileFirst: true,
        infinite: true,
        slidesToScroll: 1,
        autoplay: true,
        speed: 500,
        fade: true,
        cssEase: 'linear',
        arrows: false,
        autoplaySpeed: 4000,
        pauseOnFocus: false,
        pauseOnHover: false,

    });
})

$('.trusted__carousel').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
    responsive: [
        {
            breakpoint: 768,
            settings: {
                arrows: false,
                centerMode: true,
                centerPadding: '40px',
                slidesToShow: 2
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




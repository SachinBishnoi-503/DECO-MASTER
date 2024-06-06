let menuicon = document.querySelector(".menubar");
let menulist = document.querySelector(".navbar-iteams");
menuicon.addEventListener("click", function () {
    menulist.classList.toggle("show");
})
$(document).ready(function () {
    $(".parentslider").slick({
        dots: false,
        infinite: true,
        speed: 300,
        autoplay:false,
        slidesToShow: 4,
        slidesToScroll: 2,
        arrows: false,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    dots: false
                }

            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: false
                }
            }
        ]
    });
    $('.parent-rtl').slick({
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 2,
        arrow: false,
        dots: false,
        rtl: true,
        speed: 300,
        autoplay:false,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    dots: false
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: false
                }
            }
        ]
    });
});
$(document).ready(function () {
    /*========================================*/
    /* START: Filter Active */
    /*========================================*/
    // Filter Type
    $('#filterType li').click(function () {
        // Removing class from all list elements
        $('#filterType li').removeClass('active');

        // Adding class to clicked list element
        $(this).addClass('active');
    });

    // Filter Distance
    $('#filterDistance li').click(function () {
        // Removing class from all list elements
        $('#filterDistance li').removeClass('active');

        // Adding class to clicked list element
        $(this).addClass('active');
    });
    
    /*========================================*/
    /* START: Slick Slider */
    /*========================================*/
    // Slider Half
    $('.slider-half').slick({
        infinite: false,
        speed: 300,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1150,
                settings: {
                    infinite: false,
                    slidesToShow: 3,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 992,
                settings: {
                    infinite: false,
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 768,
                settings: {
                    infinite: false,
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });
});
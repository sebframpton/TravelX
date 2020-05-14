// Nav bar
(document).ready(function() {
    $('.nav-button').click(function() {
    $('.nav-button').toggleClass('change');
    });

    $(window).scroll(function() {
        let position = $(this).scrollTop();
       if(position >= 200) {
           $('.nav-menu').addClass('custom-navbar');
       } else {
        $('.nav-menu').removeClass('custom-navbar');
       }
    });
    
// About
    $(window).scroll(function() {
        let position = $(this).scrollTop();
        if(position >= 650) {
            $('.globe-img').addClass('fromLeft');
            $('.abour-text').addClass('fromRight');
        } else {
            $('.globe-img').removeClass('fromLeft');
            $('.about-text').removeClass('fromRight');     
        }
    });

// gallery
    $('.gallery-list-item').click(function() {
        let value = $(this).attr('data-filter');
        if(value === 'all') {
            $('filter').show(300);
        } else {
            $('.filter').not('.' + value).hide(300);
            $('.filter').filter('.' + value).show(300);
        }
    });

    $('.gallery-list-item').click(function() {
        $(this).addClass('active-item').siblings().removeClass
        ('active-item');
    });
});
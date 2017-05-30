/**
 * Created by ANSARI on 8/5/2015.
 */


$(document).ready(function(){
    /*$('a[href^="#"]').on('click',function (e) {
        e.preventDefault();

        var target = this.hash;
        var $target = $(target);

        $('html, body').stop().animate({
            'scrollTop': $target.offset().top
        }, 900, 'swing', function () {
            window.location.hash = target;
        });
    });*/
    $('.leftMenu a[href^="#"],#menuShow li a[href^="#"],a#top[href^="#"]').on('click',function (e) {
        e.preventDefault();

        var target = this.hash;
        var $target = $(target);

        $('html, body').stop().animate({
            'scrollTop': $target.offset().top
        }, 900, 'swing', function () {
            window.location.hash = target;
        });
    });

    $(window).load(function() {
        $('#top').hide();
    });

    $(window).scroll(function() {
        if ($(this).scrollTop()) {
            $('#top').fadeIn();
        } else {
            $('#top').fadeOut();
        }
    });





});





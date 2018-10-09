/**
 * Created by ANSARI on 8/5/2015.
*/
$(document).ready(function(){
    $('.leftMenu a[href^="#"], a#top[href^="#"], ul.menu-links li a[href^="#"]').on('click',function (e) {
        e.preventDefault();

        var target = this.hash;
        var $target = $(target);

        $('html, body').stop().animate({
            'scrollTop': $target.offset().top
        }, 900, 'swing', function () {
            window.location.hash = target;
        });
    });

    $('ul.menu-links li a[href^="#"]').on('click',function (e) {
        e.preventDefault();

        var target = this.hash;
        var $target = $(target);

        $('html, body').stop().delay(1000).animate({
            'scrollTop': $target.offset().top
        }, 1800, 'swing', function () {
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

    /* Menu Open */
    $("#menu").click(function(){
        $("#right-menu").animate({
            right: "0px"
        });
    });
    $(".rightSide, ul.menu-links li a[href^='#']").click(function(){
        $("#right-menu").animate({
            right: "-110%"
        });
    });
    /* Menu Close */

});
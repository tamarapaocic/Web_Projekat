
$(function () {
    $(window).on("load resize", function () {
        $(".fill-screen").css("height", window.innerHeight);
    });

    $("#video-wallpaper").wallpaper({
        source: {
            poster: "../images/hajduckaVrata.jpg",
            //video: "//www.youtube.com/embed/goQMXfiS-dA"
           mp4: "../10/BosnianLandscapes.mp4" 
           
        }
    });

    $("#video-wallpaper2").wallpaper({
        source: {
            poster: "../images/rakitnica-7.jpg",
          


        }
    });

    $('body').scrollspy({
        target: '.navbar',
        offset: 160
    });

    $('nav a').bind('click', function () {
        $('html,body').stop().animate({
            scrollTop: $($(this).attr('href')).offset().top - 100
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });

    new WOW().init();

    $(document).ready(function () {
        $("#nanoGallery3").nanoGallery();
    });


    $(window).stellar();



});




$(function () {
    $(window).on("load resize", function () {
        $(".fill-screen").css("height", window.innerHeight);
    });

    $("#video-wallpaper").wallpaper({
        source: {
            poster: "../images/23646.jpg",
            video: "//www.youtube.com/embed/goQMXfiS-dA",
           
           
        }
    });

    
});



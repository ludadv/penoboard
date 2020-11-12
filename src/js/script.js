// ---------------------------- BEGIN SCRIPTS ----------------------------
document.addEventListener("DOMContentLoaded", function () {
    $( ".js-full" ).on( "click", function() {
        launchFullScreen(document.documentElement);
    });

    //burger
    $( ".js-toggle" ).on( "click", function() {
        $(".js-toggle, .menu").toggleClass('active');
    });

    //animate
    $(window).scroll(function () {
        if ($(this).scrollTop() > 1) {
            $('.header').addClass("animate");
        } else {
            $('.header').removeClass("animate");
        }
    });

    //validate
    $(".first-valid").validate({
        rules: {
            email: {
                required: true,
                minlength: 4,
                maxlength: 16,
            },
            pswd: {
                required: true,
                minlength: 6,
                maxlength: 16,
            },
        },
        messages: {
            email: {
                required: "Это поле обязательно для заполнения",
                minlength: "Логин должен быть минимум 4 символа",
                maxlength: "Максимальное число символов - 16",
            },
            pswd: {
                required: "Это поле обязательно для заполнения",
                minlength: "Пароль должен быть минимум 6 символа",
                maxlength: "Пароль должен быть максимум 16 символов",
            },
        }
    });
    $(".second-valid").validate({
        rules: {
            email: {
                required: true,
                minlength: 4,
                maxlength: 16,
            },
            name: {
                required: true,
                minlength: 6,
                maxlength: 16,
            },
            password: {
                required: true,
                minlength: 6,
                maxlength: 16,
            },
            confirm: {
                required: true,
                minlength: 6,
                maxlength: 16,
            },

        },
        messages: {
            email:{
                required: "Это поле обязательно для заполнения",
                email: "Email заполнен не корректно",
            },
            name: {
                required: "Это поле обязательно для заполнения",
                minlength: "Имя должно быть минимум 6 символа",
                maxlength: "Имя должно быть максимум 16 символов",
            },
            password: {
                required: "Это поле обязательно для заполнения",
                minlength: "Пароль должен быть минимум 6 символа",
                maxlength: "Пароль должен быть максимум 16 символов",
            },
            confirm: {
                required: "Это поле обязательно для заполнения",
                minlength: "Пароль должен быть минимум 6 символа",
                maxlength: "Пароль должен быть максимум 16 символов",
            },
        }
    });

    //magnific from form
    $('.first-popup-link, .second-popup-link').magnificPopup({
        type: 'inline',
        preloader: false,
        focus: '#name',
        closeOnBgClick: true,

        callbacks: {
            beforeOpen: function () {
                if ($(window).width() < 700) {
                    this.st.focus = false;
                } else {
                    this.st.focus = '#name';
                }
            }
        }
    });

    /*_______________________________*/
    $('.gallery').magnificPopup({
        type: 'image',
        delegate: 'a',
        gallery: {
            enabled:true
        }
    });
});

// parallax
// var scene = document.getElementById('scene');
// var parallaxInstance = new Parallax(scene);

//counter
function countup(className) {
    var countBlockTop = $("." + className).offset().top;
    var windowHeight = window.innerHeight;
    var show = true;

    $(window).scroll(function () {
        if (show && (countBlockTop < $(window).scrollTop() + windowHeight)) {
            show = false;

            $('.' + className).spincrement({
                from: 1,
                duration: 4000,
                thousandSeparator: '',
            });
        }
    })
}
$(function () {
    countup("js-count", $(".js-count").text());
    countup("js-count2", $(".js-count2").text());
    countup("js-count3", $(".js-count3").text());
});


// slick
$('.single-item').slick({
    arrows: false,
    dots: true,
    dotsClass: 'custom-dots',
});

//map
function initMap() {
    var myLatLng = new google.maps.LatLng("46.679383", "32.687931");
    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 15,
        center: myLatLng,
    });
    const image = '../img/marker.png';
    new google.maps.Marker({
        position: myLatLng,
        map: map,
        title: "Hello World!",
        icon: image,
    });
}


//fullscreen
function launchFullScreen(element) {
    if (element.requestFullScreen) {
        element.requestFullScreen();
    } else if (element.mozRequestFullScreen) {
        element.mozRequestFullScreen();
    } else if (element.webkitRequestFullScreen) {
        element.webkitRequestFullScreen();
    }
}




// ---------------------------- END SCRIPTS ----------------------------


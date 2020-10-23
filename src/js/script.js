// ---------------------------- BEGIN SCRIPTS ----------------------------
document.addEventListener("DOMContentLoaded", function () {
    launchFullScreen(document.documentElement);
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

    /*magnific from form*/
    $('.first-popup-link, .second-popup-link').magnificPopup({
        type: 'inline',
        preloader: false,
        focus: '#name',
        closeOnBgClick: true,

        // When elemened is focused, some mobile browsers in some cases zoom in
        // It looks not nice, so we disable it:
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
    $('.popup-content').magnificPopup({
        type: 'image',
        closeBtnInside: true,
        zoom: {
            enabled: true,
            duration: 300 // don't foget to change the duration also in CSS
        }
    });
});

/*counter*/

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
    countup("count", $(".count").text());
    countup("count2", $(".count2").text());
    countup("count3", $(".count3").text());
});


// slick
$('.single-item').slick({
    arrows: false,
    dots: true,
    dotsClass: 'custom-dots',
});

//map
var latlng = new google.maps.LatLng("46.679383", "32.687931");
var myOptions = {
    zoom: 17,
    center: latlng,
    navigationControlOptions: {
        style: google.maps.NavigationControlStyle.SMALL
    },
    mapTypeId: google.maps.MapTypeId.ROADMAP
};
var map = new google.maps.Map(document.getElementById("makemap_canvas"), myOptions);
map.scrollwheel = true;
map.setOptions({mapTypeControl: true});

var marker = new google.maps.Marker({
    position: {lat: 46.679383, lng: 32.687931},
    map: map,
    icon: {
        url: "../img/marker.svg",
        scaledSize: new google.maps.Size(64, 64)
    }
});

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


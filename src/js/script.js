// ---------------------------- BEGIN SCRIPTS ----------------------------
document.addEventListener("DOMContentLoaded", function () {
    // validation form jquery
    $(document).ready(function(){
        $(".valid").validate({
            rules:{
                login:{
                    required: true,
                    minlength: 4,
                    maxlength: 16,
                },
                pswd:{
                    required: true,
                    minlength: 6,
                    maxlength: 16,
                },
            },
            messages:{
                login:{
                    required: "Это поле обязательно для заполнения",
                    minlength: "Логин должен быть минимум 4 символа",
                    maxlength: "Максимальное число символов - 16",
                },
                pswd:{
                    required: "Это поле обязательно для заполнения",
                    minlength: "Пароль должен быть минимум 6 символа",
                    maxlength: "Пароль должен быть максимум 16 символов",
                },
            }
        });

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
    // $('.popup-content').magnificPopup({
    //     closeOnBgClick: true,
    // });

});

// slick
$('.single-item').slick({
    arrows: false,
    dots: true,
    dotsClass: 'custom-dots',
});



// ---------------------------- END SCRIPTS ----------------------------


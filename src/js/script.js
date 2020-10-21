// ---------------------------- BEGIN SCRIPTS ----------------------------
document.addEventListener("DOMContentLoaded", function () {
  //animate
    $(window).scroll(function() {
        if ($(this).scrollTop() > 1){
            $('.header').addClass("animate");
        }
        else{
            $('.header').removeClass("animate");
        }
    });











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
                // email:{
                //     required: true,
                //     email: true,
                // },
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
                // email:{
                //     required: "Это поле обязательно для заполнения",
                //     email: "Email заполнен не корректно",
                // },
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

function countup(className){
    var countBlockTop = $("."+className).offset().top;
    var windowHeight = window.innerHeight;
    var show = true;

    $(window).scroll( function (){
        if(show && (countBlockTop < $(window).scrollTop() + windowHeight)){
            show = false;

            $('.'+className).spincrement({
                from: 1,
                duration: 4000,
                thousandSeparator: '',
            });
        }
    })
}


$(function() {
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





// ---------------------------- END SCRIPTS ----------------------------


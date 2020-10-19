// ---------------------------- BEGIN SCRIPTS ----------------------------
document.addEventListener("DOMContentLoaded", function () {
    // validation form jquery
    $("button[type='submit']").click(function () {
        // собираем данные в один массив
        var username = $("input[name='username']").val().trim();
        var password = $("input[name='password']").val().trim();

        //обрабатываю данные
        var error_arr = [];
        if (username.length == 0) error_arr.push('логин');
        if (password.length == 0) error_arr.push('пароль');

        // проверка на наличие ошибок
        if (error_arr.length > 0) {
            alert("Вы не заполнили следующие поля:\n" + error_arr.join(', '));
            // блокировка перехода на другую страницу
            return false;
        } else {
            console.log("Ошибок нет!");
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
        type: 'inline'
    });

});

// slick
$('.single-item').slick({
    arrows: false,
    dots: true,
    dotsClass: 'custom-dots',
});

// $('.parallax-window').parallax({imageSrc: '../img/mask.png'});

//counter

// ---------------------------- END SCRIPTS ----------------------------


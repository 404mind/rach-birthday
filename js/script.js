$(document).ready(function () {
    $('#gift').on('click', function () {
        function random(max) {
            return Math.random() * (max - 0) + 0;
        }

        var c = document.createDocumentFragment();
        for (var i = 0; i < 5000; i++) {
            var styles = 'transform: translate3d(' + (random(1000) - random(1000)) + 'px, ' + (random(1000)) + 'px, 0) ;\
                  background: #' + Math.floor(Math.random() * 16777215).toString(16) + ';\
                  animation: bang 2s ease-out forwards;\
                  opacity: 0';

            var e = document.createElement("i");
            e.style.cssText = styles.toString();
            e.classList.add("confetti");
            document.body.appendChild(e);
        }
        $(this).append(c);
        const myTimeout = setTimeout(() => {
            $('#myModal').modal('show')
            $('.confetti').remove();

        }, 2000);
    })
    $('.polaroid').click(function () {
        if ($(this).hasClass('active')) {
            $('.polaroid').removeClass('active')
        } else {
            $('.polaroid').removeClass('active')
            $(this).addClass('active')
        }
    })

});
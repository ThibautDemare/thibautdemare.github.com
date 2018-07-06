$(document).ready(function() {

    function customizeGallery(trans, ease) {
        $('#lightgallery').lightGallery({
            loop: true,
            fourceAutoply: false,
            autoplay: false,
            thumbnail: false,
            pager: $(window).width() >= 768 ? true : false,
            speed: 400,
            scale: 1,
            keypress: true,
            mode: trans,
            cssEasing: ease
        });
    }

    customizeGallery('lg-slide', 'cubic-bezier(0.25, 0, 0.25, 1)');

    $('#select-trans').on('change', function() {
        $('#lightgallery').data('lightGallery').destroy(true);
        customizeGallery($('#select-trans').val(), 'cubic-bezier(' + $('#select-ease').val() + ')');
    });

    $('#select-ease').on('change', function() {

        $('#lightgallery').data('lightGallery').destroy(true);
        customizeGallery($('#select-trans').val(), 'cubic-bezier(' + $('#select-ease').val() + ')');
    });

});



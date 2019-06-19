$(document).ready(function(){

    // Smooth scrolling function listener
    $(document).on('click', 'a.smooth-scroll', (e) => {
        const $this = $(e.currentTarget);
        if ($this[0].hash !== '') {
            e.preventDefault();

            const storeHash = $this[0].hash;

            $('html, body').animate({
                scrollTop: $(storeHash).offset().top
            }, 500, function() {
                window.location.hash = storeHash;
            });
        }
    });
});
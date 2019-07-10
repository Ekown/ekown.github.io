$(document).ready(function(){
    // Determines the color of the progress bar by its width
    function getProgressBarColor(aWidth) {
        if (aWidth <= 33) 
            return 'blue';
        else if (aWidth > 33 && aWidth <= 66)
            return 'green';
        else if (aWidth > 66 && aWidth <= 100)
            return 'red';
        else
            return 'gray';
    }

    // Animates the progress bars
    function animateProgressBar(el) {
        const progressBars = el.find('.progress-bar');

        [...progressBars].forEach(progressBar => {
            $(progressBar).animate({
                width: $(progressBar).attr('aria-valuename'),
            }, {
                duration: 2000,
                easing: 'linear',
                step: function(x) {
                    $(progressBar).css('background-color', getProgressBarColor(x))
                }
            });
        });
    }

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

    $(window).scroll(function() {
        let hT = $('.tech-content').offset().top,
            hH = $('.tech-content').outerHeight(),
            wH = $(window).height(),
            wS = $(this).scrollTop();
            
        if (wS > (hT - hH)) {
            animateProgressBar($('.tech-content'));
            $(window).off('scroll')
        }
     });
});
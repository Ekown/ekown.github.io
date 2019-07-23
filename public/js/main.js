$(document).ready(function(){
    // Determines the color of the progress bar by its width
    function getProgressBarColor(aWidth) {
        if (aWidth <= 33) 
            return '#5050e4';
        else if (aWidth > 33 && aWidth <= 66)
            return '#1ab51a';
        else if (aWidth > 66 && aWidth <= 100)
            return '#f75050';
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

    function animateTitleUnderline(title) {
        return function() {
            $(title).parent('.underline').toggleClass('underline-active');
        }
    }

    function animateSection(hT, hH, wS, callbackFunc) {
        if (wS > (hT - hH)) {
            callbackFunc();
            $(window).off('scroll')
        }
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
        let wS = $(this).scrollTop();
        let aboutTitle = $('#about').find('.title');
        let projectTitle = $('#projects').find('.title');
        
            
        animateSection($('.tech-content').offset().top, 
                       $('.tech-content').outerHeight(),
                       wS, animateProgressBar($('.tech-content')));

        animateSection($(aboutTitle).offset().top,
                       $(aboutTitle).outerHeight(),
                       wS, animateTitleUnderline($(aboutTitle)));

        animateSection($(projectTitle).offset().top,
                       $(projectTitle).outerHeight(),
                       wS, animateTitleUnderline($(projectTitle)));               
     });

     
});
'use strict'

//regex to select anchor elements that point to ids on page
$('a[href^="#"]').on('click', function(event) {//click event

    var target = $(this.getAttribute('href'));

    if( target.length ) {//if the target exists, prevent default action(pop)
        event.preventDefault();
        $('html, body').stop().animate({ //animate whole html/body space, but adjust for quick succession of clicks by calling stop before animate
            scrollTop: target.offset().top//offset - get current position of element relative to document
        }, 3000);//3 second scroll time
    }

});//look at position instead of offset?

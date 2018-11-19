function onOffOpacity(opacityVol) {
    $('.navbar').animate({opacity: opacityVol,}, 500, function() {});
}

function opacityOnLoad() {
    onOffOpacity(0.1);
  }

$(document).ready(function(){
    var timerOnLoad = setTimeout(opacityOnLoad, 2000);
    var onScrollBottom = false;
    $( window ).scroll(function() {
        clearTimeout(timerOnLoad);
        if (onScrollBottom === false) {
            onOffOpacity(1);
            onScrollBottom = true;
        }
        if (onScrollBottom === true) {
            if($(window).scrollTop() === 0) {
                onOffOpacity(0.1);
                onScrollBottom = false;
            }
        }
    });
    $('.navbar').hover(function() {
        if ((onScrollBottom === false) && ($(window).scrollTop() === 0)) {
            onScrollBottom = true;
            onOffOpacity(1);
        }
    }, function() {
        if ((onScrollBottom === true) && ($(window).scrollTop() === 0)) {
            onScrollBottom = false;
            onOffOpacity(0.1);
        }
    });
    $('#go-to-top').each(function(){
        $(this).click(function(){ 
            $('html,body').animate({ scrollTop: 0 }, 'slow');
            return false; 
        });
    });

});

function onOffOpacity(opacityVol) {
    $('.navbar').animate({opacity: opacityVol,}, 1500, function() {});
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
});

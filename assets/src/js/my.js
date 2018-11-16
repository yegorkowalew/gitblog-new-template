$(document).ready(function(){
    var onScrollBottom = false;
    $( window ).scroll(function() {
        if (onScrollBottom === false) {
            $('.navbar').animate({opacity: 0.9,}, 1000, function() {});
            onScrollBottom = true;
        }
        if (onScrollBottom === true) {
            if($(window).scrollTop() === 0) {
                $('.navbar').animate({opacity: 0.3,}, 1000, function() {});       
                onScrollBottom = false;
              }
        }
      });
      
});

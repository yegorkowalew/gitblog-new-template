// ловим якорь
var target = window.location.hash,
    target = target.replace('#', '');

// alert(window.location.pathname);
var pathArray = window.location.pathname.split( '/' );
var secondLevelLocation = pathArray[0];

function goToAnchor(target) {
    if (target) {
        selector = "a[name='" + target + "']";
        $('html, body').animate({
            scrollTop: $(selector).offset().top - 50
        }, 700, 'swing', function () {});
    }
}

if (target) {
    goToAnchor(target)
}

function onOffOpacity(opacityVol) {
    $('.navbar').stop().animate({opacity: opacityVol,}, 500, function() {});
}

function opacityOnLoad() {
    onOffOpacity(0.1);
  }

$(document).ready(function(){
    var onScrollBottom = false;
    var timerOnLoad = setTimeout(opacityOnLoad, 2000);
    
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
        $('.fil0').css({fill: "#db3636", transition: "0.5s"});
        if ((onScrollBottom === false) && ($(window).scrollTop() === 0)) {
            onScrollBottom = true;
            onOffOpacity(1);
        }
    }, function() {
        $('.fil0').css({ fill: "#f05f40", transition: "0.5s"});
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

// ловим переход по якорю на странице
$( "a" ).click(function() {
    var str = $(this).attr("href");
    var nrray = str.split( '#' );
    if (nrray[1]) {
        if (str.indexOf(pathArray[1])==1) {
            goToAnchor(nrray[1]);
            return false;
        }
    }
  });

});
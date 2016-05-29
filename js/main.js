/*
 * jQuery Easing v1.3 - http://gsgd.co.uk/sandbox/jquery/easing/
 */

jQuery.easing["jswing"]=jQuery.easing["swing"];jQuery.extend(jQuery.easing,{def:"easeOutQuad",swing:function(a,b,c,d,e){return jQuery.easing[jQuery.easing.def](a,b,c,d,e)},easeInQuad:function(a,b,c,d,e){return d*(b/=e)*b+c},easeOutQuad:function(a,b,c,d,e){return-d*(b/=e)*(b-2)+c},easeInOutQuad:function(a,b,c,d,e){if((b/=e/2)<1)return d/2*b*b+c;return-d/2*(--b*(b-2)-1)+c},easeInCubic:function(a,b,c,d,e){return d*(b/=e)*b*b+c},easeOutCubic:function(a,b,c,d,e){return d*((b=b/e-1)*b*b+1)+c},easeInOutCubic:function(a,b,c,d,e){if((b/=e/2)<1)return d/2*b*b*b+c;return d/2*((b-=2)*b*b+2)+c},easeInQuart:function(a,b,c,d,e){return d*(b/=e)*b*b*b+c},easeOutQuart:function(a,b,c,d,e){return-d*((b=b/e-1)*b*b*b-1)+c},easeInOutQuart:function(a,b,c,d,e){if((b/=e/2)<1)return d/2*b*b*b*b+c;return-d/2*((b-=2)*b*b*b-2)+c},easeInQuint:function(a,b,c,d,e){return d*(b/=e)*b*b*b*b+c},easeOutQuint:function(a,b,c,d,e){return d*((b=b/e-1)*b*b*b*b+1)+c},easeInOutQuint:function(a,b,c,d,e){if((b/=e/2)<1)return d/2*b*b*b*b*b+c;return d/2*((b-=2)*b*b*b*b+2)+c},easeInSine:function(a,b,c,d,e){return-d*Math.cos(b/e*(Math.PI/2))+d+c},easeOutSine:function(a,b,c,d,e){return d*Math.sin(b/e*(Math.PI/2))+c},easeInOutSine:function(a,b,c,d,e){return-d/2*(Math.cos(Math.PI*b/e)-1)+c},easeInExpo:function(a,b,c,d,e){return b==0?c:d*Math.pow(2,10*(b/e-1))+c},easeOutExpo:function(a,b,c,d,e){return b==e?c+d:d*(-Math.pow(2,-10*b/e)+1)+c},easeInOutExpo:function(a,b,c,d,e){if(b==0)return c;if(b==e)return c+d;if((b/=e/2)<1)return d/2*Math.pow(2,10*(b-1))+c;return d/2*(-Math.pow(2,-10*--b)+2)+c},easeInCirc:function(a,b,c,d,e){return-d*(Math.sqrt(1-(b/=e)*b)-1)+c},easeOutCirc:function(a,b,c,d,e){return d*Math.sqrt(1-(b=b/e-1)*b)+c},easeInOutCirc:function(a,b,c,d,e){if((b/=e/2)<1)return-d/2*(Math.sqrt(1-b*b)-1)+c;return d/2*(Math.sqrt(1-(b-=2)*b)+1)+c},easeInElastic:function(a,b,c,d,e){var f=1.70158;var g=0;var h=d;if(b==0)return c;if((b/=e)==1)return c+d;if(!g)g=e*.3;if(h<Math.abs(d)){h=d;var f=g/4}else var f=g/(2*Math.PI)*Math.asin(d/h);return-(h*Math.pow(2,10*(b-=1))*Math.sin((b*e-f)*2*Math.PI/g))+c},easeOutElastic:function(a,b,c,d,e){var f=1.70158;var g=0;var h=d;if(b==0)return c;if((b/=e)==1)return c+d;if(!g)g=e*.3;if(h<Math.abs(d)){h=d;var f=g/4}else var f=g/(2*Math.PI)*Math.asin(d/h);return h*Math.pow(2,-10*b)*Math.sin((b*e-f)*2*Math.PI/g)+d+c},easeInOutElastic:function(a,b,c,d,e){var f=1.70158;var g=0;var h=d;if(b==0)return c;if((b/=e/2)==2)return c+d;if(!g)g=e*.3*1.5;if(h<Math.abs(d)){h=d;var f=g/4}else var f=g/(2*Math.PI)*Math.asin(d/h);if(b<1)return-.5*h*Math.pow(2,10*(b-=1))*Math.sin((b*e-f)*2*Math.PI/g)+c;return h*Math.pow(2,-10*(b-=1))*Math.sin((b*e-f)*2*Math.PI/g)*.5+d+c},easeInBack:function(a,b,c,d,e,f){if(f==undefined)f=1.70158;return d*(b/=e)*b*((f+1)*b-f)+c},easeOutBack:function(a,b,c,d,e,f){if(f==undefined)f=1.70158;return d*((b=b/e-1)*b*((f+1)*b+f)+1)+c},easeInOutBack:function(a,b,c,d,e,f){if(f==undefined)f=1.70158;if((b/=e/2)<1)return d/2*b*b*(((f*=1.525)+1)*b-f)+c;return d/2*((b-=2)*b*(((f*=1.525)+1)*b+f)+2)+c},easeInBounce:function(a,b,c,d,e){return d-jQuery.easing.easeOutBounce(a,e-b,0,d,e)+c},easeOutBounce:function(a,b,c,d,e){if((b/=e)<1/2.75){return d*7.5625*b*b+c}else if(b<2/2.75){return d*(7.5625*(b-=1.5/2.75)*b+.75)+c}else if(b<2.5/2.75){return d*(7.5625*(b-=2.25/2.75)*b+.9375)+c}else{return d*(7.5625*(b-=2.625/2.75)*b+.984375)+c}},easeInOutBounce:function(a,b,c,d,e){if(b<e/2)return jQuery.easing.easeInBounce(a,b*2,0,d,e)*.5+c;return jQuery.easing.easeOutBounce(a,b*2-e,0,d,e)*.5+d*.5+c}})

jQuery(document).ready(function($) {

    /***************** PARALLAX HEADER ******************/
    if(window.innerWidth <= 690){
        //stop mobile browsers from firing the resize event on scroll (when toolbar hides)
        var $windowWidth = $(window).width(), $windowHeight = $(window).height();
        var $orientationChange = 0;

        window.addEventListener("orientationchange", function() {
            $orientationChange = 1;
        });

        $(window).resize(function(){
            if( ($(window).width() != $windowWidth && $(window).height != $windowHeight) || $orientationChange == 1){
                $orientationChange = 0;
            }
        });
    }


    // Create cross browser requestAnimationFrame method:
    window.requestAnimationFrame = window.requestAnimationFrame
        || window.mozRequestAnimationFrame
        || window.webkitRequestAnimationFrame
        || window.msRequestAnimationFrame
        || function(f){setTimeout(f, 1000/60)}


    function parallaxScroll(){
        var $scrollTop = $(window).scrollTop();
        var $sliderHeight = 1400;

        $('#parallax-content, #parallax-container').css({ 'transform': 'translateY('+$scrollTop*-0.14+'px)', 'opacity': 1-($scrollTop/($sliderHeight-120)) });
    }


    if($('#parallax').length > 0 && !navigator.userAgent.match(/(Android|iPod|iPhone|iPad|IEMobile|Opera Mini)/)) {
        window.addEventListener('scroll', function(){
            window.requestAnimationFrame(parallaxScroll);
        }, false);
        parallaxScroll();
    }



    /***************** NAVBAR ANIMATION ******************/

    var logoHeight = 30;
    var headerPadding = 28;
    var usingLogoImage = $('#header').attr('data-using-logo');

    function headerInit() {

        $('#header #logo img').css({
            'height': logoHeight,
        });

        $('#header').css({
            'padding-top': headerPadding
        });

        if ($('body.mobile').length == 0) {
            var $headerA = $("#header header nav > ul > li > a");
            $headerA.css({
                'padding-bottom': Math.floor(((logoHeight / 2) - ($headerA.height() / 2)) + headerPadding),
                'padding-top': Math.floor((logoHeight / 2) - ($headerA.height() / 2))
            });
        }
    }

    headerInit();
    $(window).off('scroll.headerResizeEffect');
    $(window).on('scroll.headerResizeEffect', smallNav);


    var shrinkNum = 6;

    function smallNav() {
        var $offset = $(window).scrollTop();
        var $windowWidth = $(window).width();
        if ($offset > 0 && $windowWidth > 1000) {

            $("#header").addClass("small-nav");

            $("#header #logo img").stop(true, true).animate({
                "height": logoHeight - shrinkNum
            }, {queue: false, duration: 250, easing: "easeOutCubic"});

            $("#header").stop(true, true).animate({
                "padding-top": Math.ceil(headerPadding / 1.8)
            }, {queue: false, duration: 250, easing: "easeOutCubic"});


            var $headerA = $("#header header nav > ul > li > a");
            $headerA.stop(true, true).animate({
                "padding-bottom": Math.floor((((logoHeight - shrinkNum) / 2) - ($headerA.height() / 2)) + headerPadding / 1.8),
                "padding-top": Math.floor(((logoHeight - shrinkNum) / 2) - ($headerA.height() / 2))
            }, {queue: false, duration: 250, easing: "easeOutCubic"});

            $(window).off("scroll", smallNav);
            $(window).on("scroll", bigNav);
        }
    }

    function bigNav() {
        var $offset = $(window).scrollTop();
        var $windowWidth = $(window).width();
        if ($offset == 0 && $windowWidth > 1000) {

            $("#header").removeClass("small-nav");

            $("#header #logo img").stop(true, true).animate({
                "height": logoHeight,
            }, {queue: false, duration: 250, easing: "easeOutCubic"});

            $("#header").stop(true, true).animate({
                "padding-top": headerPadding
            }, {queue: false, duration: 250, easing: "easeOutCubic"});

            $("#header header nav > ul > li > a").stop(true, true).animate({
                "padding-bottom": ((logoHeight / 2) - ($("#header header nav > ul > li > a").height() / 2)) + headerPadding,
                "padding-top": (logoHeight / 2) - ($("#header header nav > ul > li > a").height() / 2)
            }, {queue: false, duration: 250, easing: "easeOutCubic"});

            $(window).off("scroll", bigNav);
            $(window).on("scroll", smallNav);
        }
    }


    //responsive nav
    $("body").on("click", "#toggle-nav", function () {
        $("#mobile-menu").stop(true, true).slideToggle(500);
        return false;
    });
});
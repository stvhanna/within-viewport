// Demo code
$(document).ready(function _init() {
    var $body = $("body"),
        boxCount = 100,
        boxSize = 20,
        boxHTML = "",
        i;

    // Make sure the demo will be wider than the device's screen so that vertical scroll bars appear
    //    but not so wide that you can't see at least four on screen at a time with a maximized browser window
    if (screen.width >= screen.height) {
        // Screen is wide/landscape
        boxSize = parseInt((screen.width + 400) / 10, 10);
    }
    else {
        boxSize = parseInt((screen.height + 400) / 10, 10);
    }

    // Generate boxes which will each be tested for their viewport within-ness
    i = 0;
    while (i < boxCount) {
        boxHTML += '<div class="box" id="box' + i + '" aria-hidden="false">' + i + '</div>';
        i++;
    }

    $("body")
        // Add a container and put the boxes inside
        .append('<div id="boxContainer" style="width:' + (boxSize * 10 + 20) + 'px;">' + boxHTML + '</div>')
        // Set the styles so everything is nice and proportional to this device's screen
        .append("<style>.box { width:" + boxSize + "px;height:" + boxSize + "px;line-height:" + boxSize + "px; }</style>");
});

// $(".box").withinViewport({sides: "top bottom", top: 100, bottom: 100});

// withinViewport($("#box1"), {sides: "top bottom", top: 100, bottom: 100});

// ScrollStart/ScrollStop events: http://james.padolsey.com/javascript/special-scroll-events-for-jquery/
(function(){var e=jQuery.event.special,t="D"+ +(new Date),n="D"+(+(new Date)+1);e.scrollstart={setup:function(){var n,r=function(t){var r=this,i=arguments;if(n){clearTimeout(n)}else{t.type="scrollstart";jQuery.event.handle.apply(r,i)}n=setTimeout(function(){n=null},e.scrollstop.latency)};jQuery(this).bind("scroll",r).data(t,r)},teardown:function(){jQuery(this).unbind("scroll",jQuery(this).data(t))}};e.scrollstop={latency:300,setup:function(){var t,r=function(n){var r=this,i=arguments;if(t){clearTimeout(t)}t=setTimeout(function(){t=null;n.type="scrollstop";jQuery.event.dispatch.apply(r,i)},e.scrollstop.latency)};jQuery(this).bind("scroll",r).data(n,r)},teardown:function(){jQuery(this).unbind("scroll",jQuery(this).data(n))}}})();

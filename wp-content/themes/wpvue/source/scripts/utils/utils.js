const $ = window.jQuery;
const s = {
    doc: $(document),
    win: $(window),
    size : {
        width : window.innerWidth || document.documentElement.clientWidth,
        height : window.innerHeight || document.documentElement.clientHeight
    },
    minScrollTime : 200,
    lastScrollFireTime : 0,
    scrollTimer : undefined
}

function init() {

    // bind all Module Actions
    console.log("utils initted!");
    bindEvents();
}

function bindEvents() {

    // Bind any actions to the window
    s.win.on('resize', function() {
        resize();
    });
    s.win.on('scroll', function() {
        scrollThrottle();
    });
}

function equalHeights(selector) {
    $(selector).attr('style', '');

    var h = Math.max.apply(Math, $.map($(selector),function(selector){
        return $(selector).height()
    }));

    $(selector).height(h);
}

function resize() {
    s.size = {
        width : window.innerWidth || document.documentElement.clientWidth,
        height : window.innerHeight || document.documentElement.clientHeight
    };

    // Call other functions that need a resize
    s.win.trigger('carbon-resize');
    // C.SmoothScroll.resize();
}

function scrollThrottle() {
    // throttle function to save performance on scroll
    // adjust settings.minScrollTime value to change how often the scroll event fires
    var now = new Date().getTime();

    if (!s.scrollTimer) {
        if (now - s.lastScrollFireTime > (3 * s.minScrollTime)) {

            fireScrollEvent();   // fire immediately on first scroll
            s.lastScrollFireTime = now;

        }
        s.scrollTimer = setTimeout(function() {

            s.scrollTimer = null;
            s.lastScrollFireTime = new Date().getTime();
            fireScrollEvent();

        }, s.minScrollTime);
    }
}

function fireScrollEvent() {
    var scrollTop = s.doc.scrollTop();
    // console.log(scrollTop);

    s.win.trigger({
        type:'carbon-scroll',
        scrollTop: scrollTop
    });
}

export {init as default, equalHeights, scrollThrottle, fireScrollEvent};

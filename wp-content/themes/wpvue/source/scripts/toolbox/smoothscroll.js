/*
 * Title: Smooth Scroll
 * Description: Animate the scroll to an anchor on the page.
 * Author: John Heiner
 */

/**
 * Parameters:
 * - Target: A DOM node to scroll to, no default
 * - Offset: offset in px, default = 0
 * - Speed: speed in ms, default = 500
 * Usage: C.SmoothScroll.scroll(target, Offset, speed );
 */

const $ = window.jQuery;

const s = {
    element : $('.js-smooth-scroll'),
    win : $(window),
    doc : $(document),
    html : $('html'),
    body : $('body'),
    speed : 500,
    offset : 0
};

function init() {
    bindEvents();
}

function bindEvents() {
    s.element.on('click', e => {
        e.preventDefault();
        let href = $(this).attr('href');
        scroll(href);
    });
}

function scroll(target, offset, speed) {
    // Check if speed/offset is defined,
    // if not, use settings.speed/settings.offset
    speed = speed || s.speed;
    offset = offset || s.offset;

    let distance = parseInt($(target).offset().top);

    $("html, body").animate({
        scrollTop : distance - offset
    }, speed);
}

export {init as default, scroll}

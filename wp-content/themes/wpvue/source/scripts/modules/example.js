/*
 * Title: Example Module
 * Description: Example of a modules with a binded event and a few functions.
 * Author: John Heiner
 */

const $ = window.jQuery;

const s = {
    node: $('.js-simple-math'),
    max: 5,
    min: 2
}

function init() {
    // bind all Module Actions
    bindEvents();
    calc(s.max);
}

function bindEvents() {
    s.node.on('click', function(e) {
        e.preventDefault();
        calc(s.max);
    });
}

function calc(num) {
    console.log(num - s.min); // 5 - 2 = 3
}

export {init as default, calc}

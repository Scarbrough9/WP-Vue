/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _utils = __webpack_require__(2);
	
	var _utils2 = _interopRequireDefault(_utils);
	
	var _smoothscroll = __webpack_require__(3);
	
	var _smoothscroll2 = _interopRequireDefault(_smoothscroll);
	
	var _example = __webpack_require__(4);
	
	var _example2 = _interopRequireDefault(_example);
	
	var _exampleSimple = __webpack_require__(5);
	
	var _exampleSimple2 = _interopRequireDefault(_exampleSimple);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	// Vanilla JS version of $(document).ready() works in IE9+
	// Import the init functions
	// Default export: import ANY_NAME_YOU_WANT from 'folder/module'
	// Named export: import { FUNCTION as ANY_NAME } from 'folder/module'
	document.addEventListener('DOMContentLoaded', function () {
	    (0, _utils2.default)();
	    (0, _smoothscroll2.default)();
	    (0, _example2.default)();
	    (0, _exampleSimple2.default)();
	});

/***/ },
/* 1 */,
/* 2 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	var $ = window.jQuery;
	var s = {
	    doc: $(document),
	    win: $(window),
	    size: {
	        width: window.innerWidth || document.documentElement.clientWidth,
	        height: window.innerHeight || document.documentElement.clientHeight
	    },
	    minScrollTime: 200,
	    lastScrollFireTime: 0,
	    scrollTimer: undefined
	};
	
	function init() {
	
	    // bind all Module Actions
	    console.log("utils initted!");
	    bindEvents();
	}
	
	function bindEvents() {
	
	    // Bind any actions to the window
	    s.win.on('resize', function () {
	        resize();
	    });
	    s.win.on('scroll', function () {
	        scrollThrottle();
	    });
	}
	
	function equalHeights(selector) {
	    $(selector).attr('style', '');
	
	    var h = Math.max.apply(Math, $.map($(selector), function (selector) {
	        return $(selector).height();
	    }));
	
	    $(selector).height(h);
	}
	
	function resize() {
	    s.size = {
	        width: window.innerWidth || document.documentElement.clientWidth,
	        height: window.innerHeight || document.documentElement.clientHeight
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
	        if (now - s.lastScrollFireTime > 3 * s.minScrollTime) {
	
	            fireScrollEvent(); // fire immediately on first scroll
	            s.lastScrollFireTime = now;
	        }
	        s.scrollTimer = setTimeout(function () {
	
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
	        type: 'carbon-scroll',
	        scrollTop: scrollTop
	    });
	}
	
	exports.default = init;
	exports.equalHeights = equalHeights;
	exports.scrollThrottle = scrollThrottle;
	exports.fireScrollEvent = fireScrollEvent;

/***/ },
/* 3 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
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
	
	var $ = window.jQuery;
	
	var s = {
	    element: $('.js-smooth-scroll'),
	    win: $(window),
	    doc: $(document),
	    html: $('html'),
	    body: $('body'),
	    speed: 500,
	    offset: 0
	};
	
	function init() {
	    bindEvents();
	}
	
	function bindEvents() {
	    var _this = this;
	
	    s.element.on('click', function (e) {
	        e.preventDefault();
	        var href = $(_this).attr('href');
	        scroll(href);
	    });
	}
	
	function scroll(target, offset, speed) {
	    // Check if speed/offset is defined,
	    // if not, use settings.speed/settings.offset
	    speed = speed || s.speed;
	    offset = offset || s.offset;
	
	    var distance = parseInt($(target).offset().top);
	
	    $("html, body").animate({
	        scrollTop: distance - offset
	    }, speed);
	}
	
	exports.default = init;
	exports.scroll = scroll;

/***/ },
/* 4 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	/*
	 * Title: Example Module
	 * Description: Example of a modules with a binded event and a few functions.
	 * Author: John Heiner
	 */
	
	var $ = window.jQuery;
	
	var s = {
	    node: $('.js-simple-math'),
	    max: 5,
	    min: 2
	};
	
	function init() {
	    // bind all Module Actions
	    bindEvents();
	    calc(s.max);
	}
	
	function bindEvents() {
	    s.node.on('click', function (e) {
	        e.preventDefault();
	        calc(s.max);
	    });
	}
	
	function calc(num) {
	    console.log(num - s.min); // 5 - 2 = 3
	}
	
	exports.default = init;
	exports.calc = calc;

/***/ },
/* 5 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	/*
	 * Title: Example Simple Module
	 * Description: Example of a simple module with just an init function
	 * Author: John Heiner
	 */
	
	function init() {
	  console.log("Simple Example initted!");
	}
	
	exports.default = init;

/***/ }
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgNzAwZTYxYmE2MDNjNDg1MzRkNDA/ZmFiNSIsIndlYnBhY2s6Ly8vL1VzZXJzL3NjYXJicm91Z2hib29rL1NpdGVzL3dvcmRwcmVzcy93d3cvd3B2dWUvaHRkb2NzL3dwLWNvbnRlbnQvdGhlbWVzL0NhcmJvbi9zb3VyY2Uvc2NyaXB0cy9jYXJib25fc2NyaXB0cy5qcyIsIndlYnBhY2s6Ly8vL1VzZXJzL3NjYXJicm91Z2hib29rL1NpdGVzL3dvcmRwcmVzcy93d3cvd3B2dWUvaHRkb2NzL3dwLWNvbnRlbnQvdGhlbWVzL0NhcmJvbi9zb3VyY2Uvc2NyaXB0cy91dGlscy91dGlscy5qcyIsIndlYnBhY2s6Ly8vL1VzZXJzL3NjYXJicm91Z2hib29rL1NpdGVzL3dvcmRwcmVzcy93d3cvd3B2dWUvaHRkb2NzL3dwLWNvbnRlbnQvdGhlbWVzL0NhcmJvbi9zb3VyY2Uvc2NyaXB0cy90b29sYm94L3Ntb290aHNjcm9sbC5qcyIsIndlYnBhY2s6Ly8vL1VzZXJzL3NjYXJicm91Z2hib29rL1NpdGVzL3dvcmRwcmVzcy93d3cvd3B2dWUvaHRkb2NzL3dwLWNvbnRlbnQvdGhlbWVzL0NhcmJvbi9zb3VyY2Uvc2NyaXB0cy9tb2R1bGVzL2V4YW1wbGUuanMiLCJ3ZWJwYWNrOi8vLy9Vc2Vycy9zY2FyYnJvdWdoYm9vay9TaXRlcy93b3JkcHJlc3Mvd3d3L3dwdnVlL2h0ZG9jcy93cC1jb250ZW50L3RoZW1lcy9DYXJib24vc291cmNlL3NjcmlwdHMvbW9kdWxlcy9leGFtcGxlLXNpbXBsZS5qcyJdLCJuYW1lcyI6WyJkb2N1bWVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCIkIiwid2luZG93IiwialF1ZXJ5IiwicyIsImRvYyIsIndpbiIsInNpemUiLCJ3aWR0aCIsImlubmVyV2lkdGgiLCJkb2N1bWVudEVsZW1lbnQiLCJjbGllbnRXaWR0aCIsImhlaWdodCIsImlubmVySGVpZ2h0IiwiY2xpZW50SGVpZ2h0IiwibWluU2Nyb2xsVGltZSIsImxhc3RTY3JvbGxGaXJlVGltZSIsInNjcm9sbFRpbWVyIiwidW5kZWZpbmVkIiwiaW5pdCIsImNvbnNvbGUiLCJsb2ciLCJiaW5kRXZlbnRzIiwib24iLCJyZXNpemUiLCJzY3JvbGxUaHJvdHRsZSIsImVxdWFsSGVpZ2h0cyIsInNlbGVjdG9yIiwiYXR0ciIsImgiLCJNYXRoIiwibWF4IiwiYXBwbHkiLCJtYXAiLCJ0cmlnZ2VyIiwibm93IiwiRGF0ZSIsImdldFRpbWUiLCJmaXJlU2Nyb2xsRXZlbnQiLCJzZXRUaW1lb3V0Iiwic2Nyb2xsVG9wIiwidHlwZSIsImRlZmF1bHQiLCJlbGVtZW50IiwiaHRtbCIsImJvZHkiLCJzcGVlZCIsIm9mZnNldCIsImUiLCJwcmV2ZW50RGVmYXVsdCIsImhyZWYiLCJzY3JvbGwiLCJ0YXJnZXQiLCJkaXN0YW5jZSIsInBhcnNlSW50IiwidG9wIiwiYW5pbWF0ZSIsIm5vZGUiLCJtaW4iLCJjYWxjIiwibnVtIl0sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsdUJBQWU7QUFDZjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7O0FDbkNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7QUFFQTtBQVJBO0FBQ0E7QUFDQTtBQU9BQSxVQUFTQyxnQkFBVCxDQUEwQixrQkFBMUIsRUFBOEMsWUFBVztBQUNyRDtBQUNBO0FBQ0E7QUFDQTtBQUNILEVBTEQsRTs7Ozs7Ozs7Ozs7O0FDVEEsS0FBTUMsSUFBSUMsT0FBT0MsTUFBakI7QUFDQSxLQUFNQyxJQUFJO0FBQ05DLFVBQUtKLEVBQUVGLFFBQUYsQ0FEQztBQUVOTyxVQUFLTCxFQUFFQyxNQUFGLENBRkM7QUFHTkssV0FBTztBQUNIQyxnQkFBUU4sT0FBT08sVUFBUCxJQUFxQlYs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QUlIOztBQUVELFVBQVM0QixJQUFULENBQWNDLEdBQWQsRUFBbUI7QUFDZnhDLGFBQVFDLEdBQVIsQ0FBWXVDLE1BQU14RCxFQUFFc0QsR0FBcEIsRUFEZSxDQUNXO0FBQzdCOztTQUVlaEIsTyxHQUFSdkIsSTtTQUFpQndDLEksR0FBQUEsSTs7Ozs7Ozs7Ozs7QUMvQnpCOzs7Ozs7QUFNQSxVQUFTeEMsSUFBVCxHQUFnQjtBQUNaQyxXQUFRQyxHQUFSLENBQVkseUJBQVo7QUFDSDs7U0FFZXFCLE8sR0FBUnZCLEkiLCJmaWxlIjoiY2FyYm9uX3NjcmlwdHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSlcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcblxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0ZXhwb3J0czoge30sXG4gXHRcdFx0aWQ6IG1vZHVsZUlkLFxuIFx0XHRcdGxvYWRlZDogZmFsc2VcbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubG9hZGVkID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXygwKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCA3MDBlNjFiYTYwM2M0ODUzNGQ0MCIsIi8vIEltcG9ydCB0aGUgaW5pdCBmdW5jdGlvbnNcbi8vIERlZmF1bHQgZXhwb3J0OiBpbXBvcnQgQU5ZX05BTUVfWU9VX1dBTlQgZnJvbSAnZm9sZGVyL21vZHVsZSdcbi8vIE5hbWVkIGV4cG9ydDogaW1wb3J0IHsgRlVOQ1RJT04gYXMgQU5ZX05BTUUgfSBmcm9tICdmb2xkZXIvbW9kdWxlJ1xuaW1wb3J0IHV0aWxzIGZyb20gJ3V0aWxzL3V0aWxzJztcbmltcG9ydCBzbW9vdGhzY3JvbGwgZnJvbSAndG9vbGJveC9zbW9vdGhzY3JvbGwnO1xuaW1wb3J0IGV4YW1wbGUgZnJvbSAnbW9kdWxlcy9leGFtcGxlJztcbmltcG9ydCBleGFtcGxlU2ltcGxlIGZyb20gJ21vZHVsZXMvZXhhbXBsZS1zaW1wbGUnO1xuXG4vLyBWYW5pbGxhIEpTIHZlcnNpb24gb2YgJChkb2N1bWVudCkucmVhZHkoKSB3b3JrcyBpbiBJRTkrXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgZnVuY3Rpb24oKSB7XG4gICAgdXRpbHMoKTtcbiAgICBzbW9vdGhzY3JvbGwoKTtcbiAgICBleGFtcGxlKCk7XG4gICAgZXhhbXBsZVNpbXBsZSgpO1xufSk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gL1VzZXJzL3NjYXJicm91Z2hib29rL1NpdGVzL3dvcmRwcmVzcy93d3cvd3B2dWUvaHRkb2NzL3dwLWNvbnRlbnQvdGhlbWVzL0NhcmJvbi9zb3VyY2Uvc2NyaXB0cy9jYXJib25fc2NyaXB0cy5qcyIsImNvbnN0ICQgPSB3aW5kb3cualF1ZXJ5O1xuY29uc3QgcyA9IHtcbiAgICBkb2M6ICQoZG9jdW1lbnQpLFxuICAgIHdpbjogJCh3aW5kb3cpLFxuICAgIHNpemUgOiB7XG4gICAgICAgIHdpZHRoIDogd2luZG93LmlubmVyV2lkdGggfHwgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudFdpZHRoLFxuICAgICAgICBoZWlnaHQgOiB3aW5kb3cuaW5uZXJIZWlnaHQgfHwgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudEhlaWdodFxuICAgIH0sXG4gICAgbWluU2Nyb2xsVGltZSA6IDIwMCxcbiAgICBsYXN0U2Nyb2xsRmlyZVRpbWUgOiAwLFxuICAgIHNjcm9sbFRpbWVyIDogdW5kZWZpbmVkXG59XG5cbmZ1bmN0aW9uIGluaXQoKSB7XG5cbiAgICAvLyBiaW5kIGFsbCBNb2R1bGUgQWN0aW9uc1xuICAgIGNvbnNvbGUubG9nKFwidXRpbHMgaW5pdHRlZCFcIik7XG4gICAgYmluZEV2ZW50cygpO1xufVxuXG5mdW5jdGlvbiBiaW5kRXZlbnRzKCkge1xuXG4gICAgLy8gQmluZCBhbnkgYWN0aW9ucyB0byB0aGUgd2luZG93XG4gICAgcy53aW4ub24oJ3Jlc2l6ZScsIGZ1bmN0aW9uKCkge1xuICAgICAgICByZXNpemUoKTtcbiAgICB9KTtcbiAgICBzLndpbi5vbignc2Nyb2xsJywgZnVuY3Rpb24oKSB7XG4gICAgICAgIHNjcm9sbFRocm90dGxlKCk7XG4gICAgfSk7XG59XG5cbmZ1bmN0aW9uIGVxdWFsSGVpZ2h0cyhzZWxlY3Rvcikge1xuICAgICQoc2VsZWN0b3IpLmF0dHIoJ3N0eWxlJywgJycpO1xuXG4gICAgdmFyIGggPSBNYXRoLm1heC5hcHBseShNYXRoLCAkLm1hcCgkKHNlbGVjdG9yKSxmdW5jdGlvbihzZWxlY3Rvcil7XG4gICAgICAgIHJldHVybiAkKHNlbGVjdG9yKS5oZWlnaHQoKVxuICAgIH0pKTtcblxuICAgICQoc2VsZWN0b3IpLmhlaWdodChoKTtcbn1cblxuZnVuY3Rpb24gcmVzaXplKCkge1xuICAgIHMuc2l6ZSA9IHtcbiAgICAgICAgd2lkdGggOiB3aW5kb3cuaW5uZXJXaWR0aCB8fCBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50V2lkdGgsXG4gICAgICAgIGhlaWdodCA6IHdpbmRvdy5pbm5lckhlaWdodCB8fCBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50SGVpZ2h0XG4gICAgfTtcblxuICAgIC8vIENhbGwgb3RoZXIgZnVuY3Rpb25zIHRoYXQgbmVlZCBhIHJlc2l6ZVxuICAgIHMud2luLnRyaWdnZXIoJ2NhcmJvbi1yZXNpemUnKTtcbiAgICAvLyBDLlNtb290aFNjcm9sbC5yZXNpemUoKTtcbn1cblxuZnVuY3Rpb24gc2Nyb2xsVGhyb3R0bGUoKSB7XG4gICAgLy8gdGhyb3R0bGUgZnVuY3Rpb24gdG8gc2F2ZSBwZXJmb3JtYW5jZSBvbiBzY3JvbGxcbiAgICAvLyBhZGp1c3Qgc2V0dGluZ3MubWluU2Nyb2xsVGltZSB2YWx1ZSB0byBjaGFuZ2UgaG93IG9mdGVuIHRoZSBzY3JvbGwgZXZlbnQgZmlyZXNcbiAgICB2YXIgbm93ID0gbmV3IERhdGUoKS5nZXRUaW1lKCk7XG5cbiAgICBpZiAoIXMuc2Nyb2xsVGltZXIpIHtcbiAgICAgICAgaWYgKG5vdyAtIHMubGFzdFNjcm9sbEZpcmVUaW1lID4gKDMgKiBzLm1pblNjcm9sbFRpbWUpKSB7XG5cbiAgICAgICAgICAgIGZpcmVTY3JvbGxFdmVudCgpOyAgIC8vIGZpcmUgaW1tZWRpYXRlbHkgb24gZmlyc3Qgc2Nyb2xsXG4gICAgICAgICAgICBzLmxhc3RTY3JvbGxGaXJlVGltZSA9IG5vdztcblxuICAgICAgICB9XG4gICAgICAgIHMuc2Nyb2xsVGltZXIgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuXG4gICAgICAgICAgICBzLnNjcm9sbFRpbWVyID0gbnVsbDtcbiAgICAgICAgICAgIHMubGFzdFNjcm9sbEZpcmVUaW1lID0gbmV3IERhdGUoKS5nZXRUaW1lKCk7XG4gICAgICAgICAgICBmaXJlU2Nyb2xsRXZlbnQoKTtcblxuICAgICAgICB9LCBzLm1pblNjcm9sbFRpbWUpO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gZmlyZVNjcm9sbEV2ZW50KCkge1xuICAgIHZhciBzY3JvbGxUb3AgPSBzLmRvYy5zY3JvbGxUb3AoKTtcbiAgICAvLyBjb25zb2xlLmxvZyhzY3JvbGxUb3ApO1xuXG4gICAgcy53aW4udHJpZ2dlcih7XG4gICAgICAgIHR5cGU6J2NhcmJvbi1zY3JvbGwnLFxuICAgICAgICBzY3JvbGxUb3A6IHNjcm9sbFRvcFxuICAgIH0pO1xufVxuXG5leHBvcnQge2luaXQgYXMgZGVmYXVsdCwgZXF1YWxIZWlnaHRzLCBzY3JvbGxUaHJvdHRsZSwgZmlyZVNjcm9sbEV2ZW50fTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAvVXNlcnMvc2NhcmJyb3VnaGJvb2svU2l0ZXMvd29yZHByZXNzL3d3dy93cHZ1ZS9odGRvY3Mvd3AtY29udGVudC90aGVtZXMvQ2FyYm9uL3NvdXJjZS9zY3JpcHRzL3V0aWxzL3V0aWxzLmpzIiwiLypcbiAqIFRpdGxlOiBTbW9vdGggU2Nyb2xsXG4gKiBEZXNjcmlwdGlvbjogQW5pbWF0ZSB0aGUgc2Nyb2xsIHRvIGFuIGFuY2hvciBvbiB0aGUgcGFnZS5cbiAqIEF1dGhvcjogSm9obiBIZWluZXJcbiAqL1xuXG4vKipcbiAqIFBhcmFtZXRlcnM6XG4gKiAtIFRhcmdldDogQSBET00gbm9kZSB0byBzY3JvbGwgdG8sIG5vIGRlZmF1bHRcbiAqIC0gT2Zmc2V0OiBvZmZzZXQgaW4gcHgsIGRlZmF1bHQgPSAwXG4gKiAtIFNwZWVkOiBzcGVlZCBpbiBtcywgZGVmYXVsdCA9IDUwMFxuICogVXNhZ2U6IEMuU21vb3RoU2Nyb2xsLnNjcm9sbCh0YXJnZXQsIE9mZnNldCwgc3BlZWQgKTtcbiAqL1xuXG5jb25zdCAkID0gd2luZG93LmpRdWVyeTtcblxuY29uc3QgcyA9IHtcbiAgICBlbGVtZW50IDogJCgnLmpzLXNtb290aC1zY3JvbGwnKSxcbiAgICB3aW4gOiAkKHdpbmRvdyksXG4gICAgZG9jIDogJChkb2N1bWVudCksXG4gICAgaHRtbCA6ICQoJ2h0bWwnKSxcbiAgICBib2R5IDogJCgnYm9keScpLFxuICAgIHNwZWVkIDogNTAwLFxuICAgIG9mZnNldCA6IDBcbn07XG5cbmZ1bmN0aW9uIGluaXQoKSB7XG4gICAgYmluZEV2ZW50cygpO1xufVxuXG5mdW5jdGlvbiBiaW5kRXZlbnRzKCkge1xuICAgIHMuZWxlbWVudC5vbignY2xpY2snLCBlID0+IHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBsZXQgaHJlZiA9ICQodGhpcykuYXR0cignaHJlZicpO1xuICAgICAgICBzY3JvbGwoaHJlZik7XG4gICAgfSk7XG59XG5cbmZ1bmN0aW9uIHNjcm9sbCh0YXJnZXQsIG9mZnNldCwgc3BlZWQpIHtcbiAgICAvLyBDaGVjayBpZiBzcGVlZC9vZmZzZXQgaXMgZGVmaW5lZCxcbiAgICAvLyBpZiBub3QsIHVzZSBzZXR0aW5ncy5zcGVlZC9zZXR0aW5ncy5vZmZzZXRcbiAgICBzcGVlZCA9IHNwZWVkIHx8IHMuc3BlZWQ7XG4gICAgb2Zmc2V0ID0gb2Zmc2V0IHx8IHMub2Zmc2V0O1xuXG4gICAgbGV0IGRpc3RhbmNlID0gcGFyc2VJbnQoJCh0YXJnZXQpLm9mZnNldCgpLnRvcCk7XG5cbiAgICAkKFwiaHRtbCwgYm9keVwiKS5hbmltYXRlKHtcbiAgICAgICAgc2Nyb2xsVG9wIDogZGlzdGFuY2UgLSBvZmZzZXRcbiAgICB9LCBzcGVlZCk7XG59XG5cbmV4cG9ydCB7aW5pdCBhcyBkZWZhdWx0LCBzY3JvbGx9XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gL1VzZXJzL3NjYXJicm91Z2hib29rL1NpdGVzL3dvcmRwcmVzcy93d3cvd3B2dWUvaHRkb2NzL3dwLWNvbnRlbnQvdGhlbWVzL0NhcmJvbi9zb3VyY2Uvc2NyaXB0cy90b29sYm94L3Ntb290aHNjcm9sbC5qcyIsIi8qXG4gKiBUaXRsZTogRXhhbXBsZSBNb2R1bGVcbiAqIERlc2NyaXB0aW9uOiBFeGFtcGxlIG9mIGEgbW9kdWxlcyB3aXRoIGEgYmluZGVkIGV2ZW50IGFuZCBhIGZldyBmdW5jdGlvbnMuXG4gKiBBdXRob3I6IEpvaG4gSGVpbmVyXG4gKi9cblxuY29uc3QgJCA9IHdpbmRvdy5qUXVlcnk7XG5cbmNvbnN0IHMgPSB7XG4gICAgbm9kZTogJCgnLmpzLXNpbXBsZS1tYXRoJyksXG4gICAgbWF4OiA1LFxuICAgIG1pbjogMlxufVxuXG5mdW5jdGlvbiBpbml0KCkge1xuICAgIC8vIGJpbmQgYWxsIE1vZHVsZSBBY3Rpb25zXG4gICAgYmluZEV2ZW50cygpO1xuICAgIGNhbGMocy5tYXgpO1xufVxuXG5mdW5jdGlvbiBiaW5kRXZlbnRzKCkge1xuICAgIHMubm9kZS5vbignY2xpY2snLCBmdW5jdGlvbihlKSB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgY2FsYyhzLm1heCk7XG4gICAgfSk7XG59XG5cbmZ1bmN0aW9uIGNhbGMobnVtKSB7XG4gICAgY29uc29sZS5sb2cobnVtIC0gcy5taW4pOyAvLyA1IC0gMiA9IDNcbn1cblxuZXhwb3J0IHtpbml0IGFzIGRlZmF1bHQsIGNhbGN9XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gL1VzZXJzL3NjYXJicm91Z2hib29rL1NpdGVzL3dvcmRwcmVzcy93d3cvd3B2dWUvaHRkb2NzL3dwLWNvbnRlbnQvdGhlbWVzL0NhcmJvbi9zb3VyY2Uvc2NyaXB0cy9tb2R1bGVzL2V4YW1wbGUuanMiLCIvKlxuICogVGl0bGU6IEV4YW1wbGUgU2ltcGxlIE1vZHVsZVxuICogRGVzY3JpcHRpb246IEV4YW1wbGUgb2YgYSBzaW1wbGUgbW9kdWxlIHdpdGgganVzdCBhbiBpbml0IGZ1bmN0aW9uXG4gKiBBdXRob3I6IEpvaG4gSGVpbmVyXG4gKi9cblxuZnVuY3Rpb24gaW5pdCgpIHtcbiAgICBjb25zb2xlLmxvZyhcIlNpbXBsZSBFeGFtcGxlIGluaXR0ZWQhXCIpO1xufVxuXG5leHBvcnQge2luaXQgYXMgZGVmYXVsdH07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gL1VzZXJzL3NjYXJicm91Z2hib29rL1NpdGVzL3dvcmRwcmVzcy93d3cvd3B2dWUvaHRkb2NzL3dwLWNvbnRlbnQvdGhlbWVzL0NhcmJvbi9zb3VyY2Uvc2NyaXB0cy9tb2R1bGVzL2V4YW1wbGUtc2ltcGxlLmpzIl0sInNvdXJjZVJvb3QiOiIifQ==
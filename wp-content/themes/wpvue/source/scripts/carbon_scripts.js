// Import the init functions
// Default export: import ANY_NAME_YOU_WANT from 'folder/module'
// Named export: import { FUNCTION as ANY_NAME } from 'folder/module'
import utils from 'utils/utils';
import smoothscroll from 'toolbox/smoothscroll';
import example from 'modules/example';
import exampleSimple from 'modules/example-simple';

// Vanilla JS version of $(document).ready() works in IE9+
document.addEventListener('DOMContentLoaded', function() {
    utils();
    smoothscroll();
    example();
    exampleSimple();
});

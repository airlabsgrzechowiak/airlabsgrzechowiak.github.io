window._ = require('lodash');

try {
    window.$ = window.jQuery = require('jquery');
} catch (e) {}

import ScrollReveal from "scrollreveal";
window.sr = ScrollReveal();

$(document).ready(function() {
    sr.reveal('.reveal-1', { delay: 500 });
    sr.reveal('.reveal-1-sequence', { delay: 500 }, 300);
});
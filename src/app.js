window._ = require('lodash');

try {
    window.$ = window.jQuery = require('jquery');
} catch (e) {}

window.Vue = require('vue');
Vue.use(require('vue-scrollto'), { offset: -50});

import ScrollReveal from "scrollreveal";
window.sr = ScrollReveal();

const app = new Vue({
    el: '#app'
});

$(document).ready(function() {
    sr.reveal('.rv1', { delay: 500 });
    sr.reveal('.rv2', { delay: 700 });
    sr.reveal('.rv3', { delay: 1100 });
    sr.reveal('.rv4', { delay: 1400 });
    sr.reveal('.rv5', { delay: 2000 });
    sr.reveal('.rseq', { delay: 300 }, 300);
});
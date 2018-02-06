let mix = require('laravel-mix');

mix.js('src/app.js', 'public/dist/')
   .sass('src/app.scss', 'public/dist/')
    .setPublicPath('public/dist');

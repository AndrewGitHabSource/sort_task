const mix = require('laravel-mix');

mix.js('resources/js/app.js', 'public/js')
    .vue()
    .postCss('resources/css/app.css', 'public/css', [

    ]);

const path = require('path');

mix.alias({
    ziggy: path.resolve('vendor/tightenco/ziggy/dist')
});





const { mix } = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.js('resources/assets/js/app.js', 'public/js')
mix.sass('resources/assets/sass/app.scss', 'public/css');
mix.styles([
       'node_modules/fullpage.js/dist/jquery.fullpage.min.css'
   ], 'public/css/vendor.css');
mix.scripts([
       'node_modules/jquery/dist/jquery.js',
       'node_modules/fullpage.js/dist/jquery.fullpage.js',
       'node_modules/fullpage.js/dist/jquery.fullpage.extensions.min.js'
   ], 'public/js/vendor.js');
if (mix.config.inProduction) {
    mix.version();
}

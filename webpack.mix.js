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


mix.styles([ //vendor
       'node_modules/fullpage.js/dist/jquery.fullpage.min.css'
   ], 'public/css/vendor.css');

mix.scripts([ //vendor
       'node_modules/jquery/dist/jquery.js',
       'node_modules/fullpage.js/vendors/jquery.easings.min.js',
       'node_modules/fullpage.js/vendors/jquery.slimscroll.min.js',
       'node_modules/fullpage.js/vendors/scrolloverflow.min.js',
       'node_modules/fullpage.js/dist/jquery.fullpage.js',
       'resources/assets/js/bootstrap.js'
   ], 'public/js/vendor.js');

mix.js('resources/assets/js/app.js', 'public/js')

mix.sass('resources/assets/sass/app.scss', 'public/css');

if (mix.config.inProduction) {
    mix.version();
}

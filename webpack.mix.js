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
       'node_modules/fullpage.js/dist/jquery.fullpage.min.css',
       'node_modules/bootstrap/dist/css/bootstrap.css',
       'node_modules/admin-lte/dist/css/AdminLTE.css',
   ], 'public/css/vendor.css');


mix.sass('resources/assets/sass/app.scss', 'public/css/app.css');

mix.scripts([ //vendor
       'node_modules/jquery/dist/jquery.js',
       'node_modules/bootstrap/dist/js/bootstrap.js',
       'node_modules/fullpage.js/vendors/jquery.easings.min.js',
       'node_modules/fullpage.js/vendors/jquery.slimscroll.min.js',
       'node_modules/fullpage.js/vendors/scrolloverflow.min.js',
       'node_modules/fullpage.js/dist/jquery.fullpage.js',
       'node_modules/admin-lte/dist/js/app.js',
   ], 'public/js/vendor.js');

// mix.js('resources/assets/js/app.js', 'public/js')
mix.scripts([
      'resources/assets/js/app.js'
  ], 'public/js/app.js');


if (mix.config.inProduction) {
    mix.version();
}

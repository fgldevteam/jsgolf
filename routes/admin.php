<?php

Route::get('/admin', 'AdminController@index');
Route::resource('/admin/golf-event', 'Golf\GolfEventAdminController');
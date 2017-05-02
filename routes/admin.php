<?php

Route::get('/admin', 'AdminController@index');
Route::resource('/admin/event', 'Event\EventAdminController');
<?php

namespace App\Http\Controllers\Event;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Models\Event\Event;

class EventAdminController extends Controller
{
    public function index()
    {
    	return Event::all();
    }
}

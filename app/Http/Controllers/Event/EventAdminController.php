<?php

namespace App\Http\Controllers\Event;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Models\Event\Event;
use App\Models\Event\EventType;

class EventAdminController extends Controller
{
    public function index()
    {
    	$events = Event::getAllEventDetails();
    	return view('admin.events.index')->with('events', $events);
    }

    public function create()
    {
    	$eventTypes = EventType::all();
    	return $eventTypes;
    }
}

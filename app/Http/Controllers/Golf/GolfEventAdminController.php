<?php

namespace App\Http\Controllers\Golf;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Models\Golf\GolfEvent;

class GolfEventAdminController extends Controller
{
    public function index()
    {
    	return $golfEvents = GolfEvent::getAllEvents();
    }

    public function create()
    {
    	return view('admin.golf-events.create');
    }

    public function store()
    {

    }

    public function show($id)
    {
    	return GolfEvent::getEventById($id);
    }

    public function edit($id)
    {
    	return GolfEvent::getEventById($id);
    }

    public function update($id)
    {

    }
    public function delete($id)
    {

    }
}

<?php

namespace App\Models\Golf;

use Illuminate\Database\Eloquent\Model;

class GolfEvent extends Model
{
    protected $table = 'golf_events';

    public function images()
    {
    	return $this->hasMany('App\Models\Golf\GolfEventImages', 'golf_event_id', 'id');
    }

    public static function getAllEvents()
    {
    	return Self::with('images')->get();
    }

    public static function getEventById($id)
    {
    	return Self::with('images')->find($id);
    }
}

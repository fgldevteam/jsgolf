<?php

namespace App\Models\Golf;

use Illuminate\Database\Eloquent\Model;

class GolfEvent extends Model
{
    protected $table = 'golf_events';
    protected $fillable = ['name', 'description', 'date', 'time', 'location', 'location_postal_code', 'agenda', 'rules', 'player_price', 'team_price'];

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

    public static function createGolfEvent($request)
    {
        GolfEvent::create($request);
    }
}

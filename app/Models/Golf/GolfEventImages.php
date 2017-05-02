<?php

namespace App\Models\Golf;

use Illuminate\Database\Eloquent\Model;

class GolfEventImages extends Model
{
    protected $table = 'golf_event_images';

    public function golf_events()
    {
    	return $this->belongsTo('App\Models\Golf\GolfEvent', 'id', 'golf_event_id');
    } 
}

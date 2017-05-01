<?php

namespace App\Models\Event;

use Illuminate\Database\Eloquent\Model;

class EventType extends Model
{
    protected $table = 'event_types';

    protected $fillable = ['event_type'];

    public function event()
    {
    	return $this->hasMany('App\Models\Event\Event', 'event_type_id', 'id' );
    }
}

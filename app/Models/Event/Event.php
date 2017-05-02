<?php

namespace App\Models\Event;

use Illuminate\Database\Eloquent\Model;

class Event extends Model
{
    protected $table = 'events';
    protected $fillable = ['name', 'description', 'event_type_id'];

    public function event_type()
    {
    	return $this->hasOne('App\Models\Event\EventType', 'id', 'event_type_id');
    }
}

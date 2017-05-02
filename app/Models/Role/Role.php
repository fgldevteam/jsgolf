<?php

namespace App\Models\Role;

use Illuminate\Database\Eloquent\Model;
use App\Models\User\UserRole;

class Role extends Model
{
    protected $table = 'roles';

    protected $fillable = ['role_name'];

    public function role_users()
    {
    	return $this->hasMany('App\Models\User\UserRole', 'role_id');
    }
   
}

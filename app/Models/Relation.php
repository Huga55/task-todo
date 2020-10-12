<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Relation extends Model
{
    use HasFactory;

    public function leaders()
    {
    	return $this->belongsToMany('App\Models\User', 'relation_user', 'id', 'leader_id');
    }

    public function worker()
    {
    	return $this->belongsToMany('App\Models\User', 'relation_user', 'id', 'worker_id');
    }
}

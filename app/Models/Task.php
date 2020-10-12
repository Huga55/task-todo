<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Task extends Model
{
    use HasFactory;

    public function status()
    {
    	return $this->belongsTo('App\Models\Status');
    }

    public function priority()
    {
    	return $this->belongsTo('App\Models\Priority');
    }
}

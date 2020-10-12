<?php

namespace App\Models;

use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;

class User extends Authenticatable
{
    use HasFactory, Notifiable;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'name',
        'password',
    ];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'password',
        'remember_token',
    ];

    /**
     * The attributes that should be cast to native types.
     *
     * @var array
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
    ];

    public function workerTasks()
    {
        return $this->hasMany('App\Models\Task', 'user_worker_id');
    }

    public function creatorTasks()
    {
        return $this->hasMany('App\Models\Task', 'user_creator_id');
    } 

    public function leaders()
    {
        return $this->belongsToMany('App\Model\Relation', 'leader_id', 'id');
    }

    public function workers()
    {
        return $this->belongsToMany('App\Model\Relation', 'worker_id', 'id');
    }
}

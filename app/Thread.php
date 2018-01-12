<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Thread extends Model
{
    protected $fillable = ['user_id', 'title', 'content'];

    public function author()
    {
        return $this->belongsTo('App\User');
    }
}

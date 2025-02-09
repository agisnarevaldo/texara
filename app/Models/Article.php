<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Article extends Model
{
    use HasFactory;

    // Field-field yang boleh diisi secara massal
    protected $fillable = [
        'user_id',
        'title',
        'slug',
        'content',
        'image',
    ];

    // Relasi artikel dengan user (penulis)
    public function user()
    {
        return $this->belongsTo(User::class);
    }
}

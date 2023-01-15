<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Todos extends Model
{
    public $timestamps = false;
    protected $primaryKey = 'todos_id';
    protected $table = 'tbl_todos';
}

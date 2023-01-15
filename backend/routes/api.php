<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\API\IndexController;


/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::get('/index', [IndexController::class, 'todo_index']);
Route::post('/add-todos', [IndexController::class, 'add_todos']);
Route::post('/del-todos', [IndexController::class, 'del_todos']);
Route::post('/del-all-todos', [IndexController::class, 'del_all_todos']);
Route::post('/done-all-todos', [IndexController::class, 'done_all_todos']);
Route::post('/edit-todos', [IndexController::class, 'edit_todos']);


<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ProfileController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});
Route::middleware('auth:api')->get('/test', function (Request $request) {
    return "hello";
});
// Route::middleware('auth:api')->post('/user', 'ProfileController@store');
Route::put('/users/{id}', [ProfileController::class, "update"]);
Route::delete('/users/{id}', [ProfileController::class, "destroy"]);


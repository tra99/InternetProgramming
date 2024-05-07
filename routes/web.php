<?php

use Illuminate\Support\Facades\Route;

use App\Http\Controllers\uploadImageController;


Route::get('/', function () {
    return view('welcome');
});
// Route::get('/gallery', function () {
//     return view('gallery/index');
// });
// Route::get('/upload', function () {
//     return view('gallery/upload');
// });

Route::controller(uploadImageController::class)->group(function () {
    Route::get('/gallery','index');
    Route::get('/upload','create');
    Route::post('/store','store');
});

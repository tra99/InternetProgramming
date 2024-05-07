<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

use App\Models\Image;


class uploadImageController extends Controller
{

    public function index()
    {
        $data = Image::all();


        return view('gallery.index',compact("data"));

    }

    public function create()
    {
        return view('gallery/upload');
    }

    public function store(Request $request)
    {
        $request->validate([
            'image' => 'required|max:2048' // Validation rules for upload
        ]);

        $upload = new Image();

        $image = $request->file('image');



        $image = Storage::disk('minio')->putFile('', $image); // Upload a file

        $upload->path = $image;
        $upload->save();

        $data = Image::all();


        return view('gallery.index',compact("data"));
    }
}

<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Http\Response;
use App\Models\Author;
use App\Models\User;

class AuthorController extends Controller
{
    public function create(Request $request)
    {
        $request->validate([
            'author_name' => 'required',
            'username'    => 'required',
        ]);

        $user = new User();
        $user->name     = $request->username;
        $user->email    = $request->username . '@gmail.com';
        $user->password = bcrypt('12345678'); // Hashing the password
        $user->save();

        $author = new Author();
        $author->name = $request->author_name;
        $author->user_id = $user->id;
        $author->save();

        // Fetch the articles directly
        $articles = $author->articles;

        return response()->json($articles, Response::HTTP_OK);
    }
    public function getArticlesByAuthor(Request $request)
    {
        $request->validate([
            'author_name' => 'required'
        ]);

        $author = Author::where('name', $request->author_name)
            ->with(['articles' => function ($query) {
                $query->select('id', 'name', 'author_id', 'created_at', 'updated_at');
            }])
            ->first(['id', 'name', 'user_id']);

            return $author->articles;
    }

}
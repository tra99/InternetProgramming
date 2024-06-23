<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Http\Response;

use App\Models\Article;
use App\Models\Author;

class ArticleController extends Controller
{
    public function create(Request $request){
        $request->validate(
            [
                'article_name'       => 'required',
                'author_name'        => 'required'
            ]
        );

        $authorId = Author::select('id')
        ->where('name',$request->author_name)
        ->first();

        $article = new Article();
        $article->name = $request->article_name;
        $article->author_id = $authorId->id;
        $article->save();

        $article = Article::with(['author'])
        ->where('author_id', $article->author_id)
        ->orderBy('id','desc')
        ->first();

        return response()->json([
            'article'         => $article,
            'message'        => "Article '".$article->name."' created successfully."
        ], Response::HTTP_OK);
    }

    public function allArticlesOfAuthor(Request $request)
    {
        $request->validate([
            'author_name' => 'required'
        ]);

        $author = Author::with(['articles'])
            ->select('id','name','user_id')
            ->where('name', $request->author_name)
            ->first();
        // return $author-> articles;

        if (!$author) {
            return response()->json([
                'message' => "Author not found"
            ], Response::HTTP_NOT_FOUND);
        }

        // Collect all audiences
        $audiences = [];
        foreach ($author->articles as $article) {
            foreach ($article->audiences as $audience) {
                $audiences[] = $audience;
            }
        }

        return response()->json([
            'audiences' => $audiences,
            // 'message' => "All audiences of articles by author '".$request->author_name."'"
        ], Response::HTTP_OK);
    }
 
}

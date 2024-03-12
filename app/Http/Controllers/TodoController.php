<?php

namespace App\Http\Controllers;

use App\Models\Todo;
use Illuminate\Http\Request;

class TodoController extends Controller
{
    //
    public function index(){
        $todos = Todo::all();

        return view('todo.index',[$todos,'todo']);
    }
    public function add(){
        $todos = Todo::all();

        return view('todo.index',[$todos,'todo']);
    }
    public function edit(){
        $todos = Todo::all();

        return view('todo.index',[$todos,'todo']);
    }
    public function delete(){
        $todos = Todo::all();

        return view('todo.index',[$todos,'todo']);
    }
}

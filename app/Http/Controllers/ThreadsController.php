<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class ThreadsController extends Controller
{
    public function store(Request $request)
    {
        $request->validate([
            'title' => 'required',
            'content' => 'required',
        ]);

        $thread = Thread::create([
            'title' => $request->title,
            'content' => $request->content
        ]);

        return redirect('/threads/' . $thread->id);
    }
}

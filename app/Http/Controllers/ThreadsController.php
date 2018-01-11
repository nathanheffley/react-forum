<?php

namespace App\Http\Controllers;

use App\Thread;
use Illuminate\Http\Request;

class ThreadsController extends Controller
{
    public function show(Thread $thread)
    {
        return view('threads.show', compact('thread'));
    }

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

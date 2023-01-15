<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Todos;
use App\Http\Resources\TodosCollection;

class IndexController extends Controller
{
    public function todo_index(){
        $todo = Todos::get();
        return TodosCollection::collection($todo);
    }

    public function add_todos(Request $request){
        $todos = new Todos;
        $todos->todos_content = $request->todos_content;        
        $todos->todos_checked = 0;        
        $todos->todos_status = 0;     
        $todos->save();   

        $todo = Todos::get();
        return TodosCollection::collection($todo);
    }

    public function del_todos(Request $request){
        Todos::where('todos_id', $request->id)->delete();

        $todo = Todos::get();
        return TodosCollection::collection($todo);
    }

    public function del_all_todos(Request $request){
        foreach($request->params as $par){
            if($par['todos_checked'] === 1){
                Todos::where('todos_id', $par['todos_id'])->delete();
            }
        }

        $todo = Todos::get();
        return TodosCollection::collection($todo);
    }

    public function done_all_todos(Request $request){
        foreach($request->params as $par){
            if($par['todos_checked'] === 1){
                Todos::where('todos_id', $par['todos_id'])->update(['todos_status' => 1]);
            }
        }

        $todo = Todos::get();
        return TodosCollection::collection($todo);
    }

    public function edit_todos(Request $request){
        Todos::where('todos_id', $request->todos_id)->update(['todos_content' => $request->todos_content]);

        $todo = Todos::get();
        return TodosCollection::collection($todo);
    }

}

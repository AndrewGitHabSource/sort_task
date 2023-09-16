<?php

namespace App\Http\Controllers;

use App\Models\Task;
use Illuminate\Http\Request;
use Illuminate\Http\JsonResponse;

class HomeController extends Controller
{
    public function index(): JsonResponse {
        return response()->json(Task::orderBy('priority', 'ASC')->get());
    }

    public function reorderTasks(Request $request): void {
        foreach ($request->tasks as $item) {
            Task::where('id', $item['id'])->update(['priority'=> $item['priority']]);
        }
    }

    public function filterTasks(Request $request): JsonResponse {
        $tasks = count($request->projects) ?
            Task::whereIn('project_id', $request->projects)->orderBy('priority', 'ASC')->get() :
            Task::orderBy('priority', 'ASC')->get();

        return response()->json($tasks);
    }
}

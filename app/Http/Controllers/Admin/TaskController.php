<?php

namespace App\Http\Controllers\Admin;

use App\Models\Task;
use App\Models\Project;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Http\JsonResponse;
use App\Http\Requests\TaskRequest;

class TaskController extends Controller
{
    public function index(Request $request): JsonResponse {
        return response()->json(Task::all());
    }

    public function getTask(Request $request): JsonResponse {
        return response()->json(Task::find($request->id));
    }

    public function updateTask(TaskRequest $request): void {
        $task = $request->except(['id']);

        Task::where('id', '=', $request->id)->update($task);
    }

    public function saveTask(TaskRequest $request): void {
        Task::Create([
            'name' => $request->name,
            'priority' => $request->priority,
            'project_id' => $request->project_id,
        ]);
    }

    public function delete(Request $request): void {
        Task::where('id', '=', $request->id)->delete();
    }
}

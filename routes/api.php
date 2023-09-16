<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers as Controllers;

Route::get('/', [Controllers\HomeController::class, 'index'])->name('home');
Route::post('/filter', [Controllers\HomeController::class, 'filterTasks'])->name('filter');
Route::get('/projects', [Controllers\ProjectController::class, 'getProjects'])->name('projects');
Route::post('/reorder', [Controllers\HomeController::class, 'reorderTasks'])->name('reorder');
Route::post('/auth/login', [Controllers\AuthController::class, 'login'])->name("login");
Route::get('/auth/user', [Controllers\AuthController::class, 'user'])->name("user");

Route::middleware('auth:sanctum')->prefix('admin')->group(function () {
    Route::get('/tasks', [Controllers\Admin\TaskController::class, 'index'])->name('admin.tasks');
    Route::get('/task/get', [Controllers\Admin\TaskController::class, 'getTask'])->name('admin.get.task');
    Route::post('/task/update', [Controllers\Admin\TaskController::class, 'updateTask'])->name('admin.update.task');
    Route::post('/post/save', [Controllers\Admin\TaskController::class, 'saveTask'])->name('admin.save.task');
    Route::get('/post/delete', [Controllers\Admin\TaskController::class, 'delete'])->name('admin.delete.task');
});

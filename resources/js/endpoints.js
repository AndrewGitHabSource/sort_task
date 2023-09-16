import { $http } from "./api";

export const getAllTasks = async () => {
    return await $http.get(route('admin.tasks'));
}

export const getAllProjects = async () => {
    return await $http.get(route('projects'));
}

export const reorderTasks = async (tasks) => {
    return await $http.post(route('reorder'), {'tasks': tasks});
}

export const filter = async (projects) => {
    return await $http.post(route('filter'), {'projects': projects});
}

export const getTask = async (id) => {
    return await $http.get(route('admin.get.task'), {
        "params": {id},
    });
}

export const updateTask = async (task) => {
    return await $http.post(route('admin.update.task'), task);
}

export const saveTask = async (task) => {
    return await $http.post(route('admin.save.task'),
        task);
}

export const deletePost = async (id) => {
    return await $http.get(route('admin.delete.task'), {
        "params": {
            id,
        },
    });
}

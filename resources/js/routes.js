import Home from './components/Front/Home.vue';
import Login from './components/Front/Login.vue';
import Dashboard from './components/Admin/Dashboard.vue';
import EditTask from './components/Admin/EditTask.vue';
import SaveTask from './components/Admin/SaveTask.vue';

export const routes = [
    {
        name: 'home',
        path: '/',
        component: Home,
    },
    {
        name: 'login',
        path: '/login',
        component: Login,
    },
    {
        name: 'dashboard',
        path: '/dashboard',
        component: Dashboard,
        meta: {
            auth: true,
        },
    },
    {
        name: 'editTask',
        path: '/admin/edit-task/:id',
        component: EditTask,
        meta: {
            auth: true,
        },
    },
    {
        name: 'SaveTask',
        path: '/admin/save-task',
        component: SaveTask,
        meta: {
            auth: true,
        },
    },
];

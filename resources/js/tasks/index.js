import { $http } from '../api.js';
import {filter, reorderTasks} from '../endpoints.js';

export default {
    state() {
        return {
            tasks: null,
        }
    },

    getters: {
        allTasks(state) {
            return state.tasks;
        }
    },

    mutations: {
        setTasks(state, payload) {
            state.tasks = payload;
        }
    },

    actions: {
        async getTasks(context) {
            try {
                let response =  await $http.get('/');
                context.commit('setTasks', response.data);
            } catch (error) {
                console.log(error);
            }
        },

        async reorder(context, tasks) {
            try {
                await reorderTasks(tasks);
            } catch (error) {
                console.log(error);
            }
        },

        async filter(context, selectedProjects) {
            try {
                let {data} = await filter(selectedProjects);
                context.commit('setTasks', data);
            } catch (error) {
                console.log(error);
            }
        }
    },
}

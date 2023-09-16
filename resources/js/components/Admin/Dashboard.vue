<template>
    <div class="container">
        <h1>Admin panel</h1>

        <h2>Tasks</h2>

        <nav>
            <el-button @click="addTask()" type="primary">Add Task</el-button>
        </nav>

        <div class="container" v-loading="isLoading">
            <el-table :data="tasks.key" style="width: 100%">
                <el-table-column label="Name" prop="name" sortable />

                <el-table-column label="Priority" prop="priority" sortable />

                <el-table-column align="right">
                    <template #default="scope">
                        <el-button size="small" @click="edit(scope.row)">Edit</el-button>

                        <el-button size="small" type="danger" @click="drop(scope.row)">Delete</el-button>
                    </template>
                </el-table-column>
            </el-table>
        </div>
    </div>
</template>

<script>
    import { inject, reactive, onMounted, ref } from "vue";
    import { getAllTasks, deletePost } from '../../endpoints.js';

    export default {
         setup() {
            const isLoading = ref(true);
            let router = inject("router");
            let form = reactive({
                "name": "",
                "priority": "",
            });
            let tasks = reactive({"key": null});

            const getTasks = async () => {
                isLoading.value = true;

                try {
                    let {data} = await getAllTasks();
                    tasks.key = data;
                } catch (error) {
                    console.log(error);
                } finally {
                    isLoading.value = false;
                }
            }

            const edit = ({id}) => {
                router.push({name: 'editTask', params: {id}});
            }

            const addTask = () => {
                router.push({name: 'SaveTask' });
            }

            const drop = async ({id}) => {
                try {
                    await deletePost(id);
                    let {data} = await getAllTasks();
                    tasks.key = data;
                } catch (error) {
                    console.log(error);
                }
            }

            onMounted(getTasks);

            return {
                isLoading,
                edit,
                drop,
                form,
                tasks,
                addTask,
            }
        }
    }
</script>

<style scoped>
    .container {
        min-height: 400px;
    }

    .form-element {
        max-width: 30%;
    }

    .form-filter {
        display: flex;
        justify-content: space-between;
    }

    nav {
        margin-bottom: 20px;
    }
</style>

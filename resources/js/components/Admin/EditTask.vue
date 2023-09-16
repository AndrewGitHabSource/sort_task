<template>
    <div class="container">
        <h2>Edit Task</h2>

        <el-form :model="task" label-width="120px">
            <el-form-item label="Name">
                <el-input v-model="task.name" />
            </el-form-item>

            <el-form-item label="Priority">
                <el-input v-model="task.priority" />
            </el-form-item>

            <el-form-item label="Project">
                <el-select v-model="task.project_id" class="m-2" placeholder="Select" size="large">
                    <el-option
                        v-for="item in projects.key"
                        :key="item.id"
                        :label="item.title"
                        :value="item.id"
                    />
                </el-select>
            </el-form-item>

            <el-form-item>
                <el-button type="primary" @click="onSubmit">Save</el-button>

                <el-button>Cancel</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>

<script>
import {reactive, onMounted, ref, inject} from "vue";
import {getTask, updateTask, getAllProjects} from '../../endpoints.js';
import { useRoute } from 'vue-router';

export default {
    setup() {
        let router = inject("router");
        const route = useRoute();
        let projects = reactive({'key': [{
            "id": "",
            "title": "",
        }]});
        let task = reactive({
            "id": "",
            "name": "",
            "priority": "",
            "project_id": "",
        });
        let initTask = (data) => {
            task.id = data.id;
            task.name = data.name;
            task.priority = data.priority;
            task.project_id = data.project_id;
        };

        const onSubmit = async () => {
            try {
                await updateTask(task);
                router.push({name: 'dashboard'});
            } catch (error) {
                console.log(error);
            }
        }

        onMounted(async () => {
            try {
                let projectsData = await getAllProjects();
                projects.key = projectsData.data;

                let {data} = await getTask(route.params.id);
                initTask(data);
            } catch (error) {
                console.log(error);
            }
        });

        return {
            task,
            onSubmit,
            projects,
        }
    }
}
</script>

<style scoped>
    .image {
        display: flex;
    }

    .image-container {
        max-width: 400px;
        margin-right: 40px;
    }

    .image-container img {
        max-width: 100%;
    }

    .button-select {
        position: relative;
        top: 2px;
    }

    .el-button--primary {
        margin: 0 10px 0 0;
    }
</style>

<template>
    <div class="container">
        <h2>Create Post</h2>

        <el-form :model="post" label-width="120px">
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
            </el-form-item>
        </el-form>
    </div>
</template>

<script>
import {reactive, ref, inject, onMounted} from "vue";
import {getAllProjects, saveTask} from '../../endpoints.js';

export default {
    setup() {
        let router = inject("router");
        let title = ref("Edit");
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

        onMounted(async () => {
            try {
                let projectsData = await getAllProjects();
                projects.key = projectsData.data;
            } catch (error) {
                console.log(error);
            }
        });

        const onSubmit = async () => {
            try {
                let formData = new FormData();
                formData.append("name", task.name);
                formData.append("priority", task.priority);
                formData.append("project_id", task.project_id);

                await saveTask(formData);
                router.push({name: 'dashboard'});
            } catch (error) {
                console.log(error);
            }
        }

        return {
            title,
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

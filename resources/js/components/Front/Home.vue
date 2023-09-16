<template>
    <div class="container">
        <h1>List Tasks</h1>

        <el-checkbox-group v-model="selectedProjects">
            <el-checkbox v-for="item in projects.key"
                :key="item.id"
                :label="item.id"
                :checked="checked.indexOf(item.id.toString()) >= 0"
                v-model="item.id"
                @change="check">
                {{item.title}}
            </el-checkbox>
        </el-checkbox-group>

        <draggable
            :list="tasks"
            :disabled="false"
            @change="change"
            item-key="id"
            class="list-group"
            ghost-class="ghost"
        >
            <template #item="{ element }">
                <div class="task-item">
                    <h3>id - {{element.id}}</h3>
                    <h3>{{element.name}}</h3>

                    <span>Priority: {{ element.priority }}</span>

                    <div class="button-edit">
                        <router-link :to="{name:'editTask', params: { 'id': element.id }}">Edit task</router-link>
                    </div>
                </div>
            </template>
        </draggable>
    </div>
</template>

<script>
import {inject, reactive, ref} from "vue";
import { computed } from "vue";
import { onMounted } from "vue";
import draggable from "vuedraggable";
import {getAllProjects} from '../../endpoints.js';
import { useRouter, useRoute } from 'vue-router';

export default {
    components: {
        draggable,
    },
    setup() {
        const router = inject("router");
        const route = useRoute();
        const store = inject("store");
        const tasks = computed(() => store.getters.allTasks);
        const projects = reactive({'key': [{
            "id": "",
             "title": "",
        }]});
        const selectedProjects = ref([]);
        const checked = ref([]);

        onMounted(async () => {
            try {
                let {data} = await getAllProjects();
                projects.key = data;
            } catch (error) {
                console.log(error);
            }

            if (route.query?.projects) {
                checked.value = route.query?.projects.split(',');
                store.dispatch('filter', route.query?.projects.split(','));
            } else {
                store.dispatch('getTasks');
            }
        });

        const change = () => {
            store.getters.allTasks.forEach((item, index) => (item.priority = index + 1));
            store.dispatch('reorder', store.getters.allTasks);
        }

        const check = async () => {
            router.push({ query: { projects: [selectedProjects.value] }})
            store.dispatch('filter', selectedProjects.value);
        }

        return {
            checked,
            tasks,
            projects,
            selectedProjects,
            change,
            check,
        }
    }
}
</script>

<style scoped>
    ul li {
        margin-bottom: 20px;
        border: 1px solid #718096;
        padding: 10px;
    }

    strong {
        display: block;
    }

    ::v-deep .task-item {
        width: 350px;
        padding: 10px 5px;
        border: 1px solid #000;
        margin-bottom: 5px;
    }

    ::v-deep .task-item h3 {
        margin: 0;
    }

    .button-edit {
        width: 100px;
        text-align: center;
        border: 1px solid #1a202c;
        margin-top: 5px;
    }
</style>

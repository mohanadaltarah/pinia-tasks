<template>
  <main>
    <!--  heading  -->
    <header>
      <div>
        <img alt="" src="./assets/copy%2018-%20sirat.png">
      </div>
      <h1>Sirat tasks</h1>
    </header>

    <!-- new task form   -->
    <div class="new-task-form">
      <TaskForm/>
    </div>


    <!-- toggle nav    -->
    <nav class="filter">
      <button @click="filter='all'">All tasks</button>
      <button @click="filter='favs'">Favorite tasks</button>
    </nav>

    <!--  task list  -->
    <div v-if="filter === 'all'" class="task-list">
      <p>{{ taskStore.countTotal }} tasks to do</p>
      <div v-for="task in taskStore.tasks" :key="task.id">
        <TaskDetails :task="task"/>
      </div>
    </div>
    <!-- favs list-->
    <div v-if="filter === 'favs'" class="favs-list">
      <p>{{ taskStore.countFavs }} favorite tasks to do</p>
      <div v-for="task in taskStore.favs" :key="task.id">
        <TaskDetails :task="task"/>
      </div>
    </div>
  </main>
</template>

<script setup>
import {useTaskStore} from "@/stores/TaskStore.js";
import TaskDetails from "@/components/TaskDetails.vue";
import TaskForm from "@/components/TaskForm.vue";

import {ref} from "vue";

const taskStore = useTaskStore();
const filter = ref("all");


</script>

<style lang="sass" scoped>

</style>

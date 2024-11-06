<template>
  <main>
    <!--  heading  -->
    <header>
      <div class="img-container">
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

    <!--    loading     -->
    <div v-if="loading === true" class="loading">
      loading tasks.....
    </div>

    <div v-if="filter === 'all'" class="task-list">
      <p>{{ countTotal }} tasks to do</p>
      <div v-for="task in tasks" :key="task.id">
        <TaskDetails :task="task"/>
      </div>
    </div>
    <!-- favs list-->
    <div v-if="filter === 'favs'" class="favs-list">
      <p>{{ countFavs }} favorite tasks to do</p>
      <div v-for="fav in favs" :key="fav.id">
        <TaskDetails :task="fav"/>
      </div>
    </div>
    <div class="reset">
      <button @click="taskStore.$reset">reset</button>
    </div>

  </main>
</template>

<script setup>
import TaskDetails from "@/components/TaskDetails.vue";
import TaskForm from "@/components/TaskForm.vue";

import {ref} from "vue";
import {useTaskStore} from "@/stores/TaskStore.js";
import {storeToRefs} from "pinia";

const taskStore = useTaskStore();

const {tasks, loading, favs, countTotal, countFavs} = storeToRefs(taskStore)
taskStore.getTasks();

const filter = ref("all");


</script>

<style lang="sass" scoped>

</style>

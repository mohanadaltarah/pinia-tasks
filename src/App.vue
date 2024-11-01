<template>
  <main>
    <!--  heading  -->
    <header>
      <div>
        <img alt="" src="./assets/copy%2018-%20sirat.png">
      </div>
      <h1>Sirat tasks</h1>
    </header>

    <!--  task list  -->
    <div class="task-list">
      <div v-for="task in taskStore.tasks" :key="task.id">
        <p>{{ task.title }}</p>
      </div>
    </div>
  </main>
</template>

<script setup>
import {useTaskStore} from "@/stores/TaskStore.js";

const taskStore = useTaskStore();


</script>

<style lang="sass" scoped>

</style>

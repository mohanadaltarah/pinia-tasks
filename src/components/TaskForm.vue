<template>
  <form action="" @submit.prevent="handleSubmit">
    <input v-model="newTask"
           placeholder="I need to..."
           type="text">
    <button>Add</button>

  </form>
</template>

<script setup>

import {useTaskStore} from "@/stores/TaskStore.js";
import {ref} from "vue";

const taskStore = useTaskStore();

const newTask = ref("");

const handleSubmit = () => {
  if (newTask.value.length > 0) {
    taskStore.addTask({
      title: newTask.value,
      id: Math.floor(Math.random() * 10000),
      isFav: false
    });
    newTask.value = "";
  }
}
</script>


<style lang="sass" scoped>

</style>
<template>
  <main>
    <!--  heading  -->
    <header>
      <div>
        <img alt="" src="./assets/copy%2018-%20sirat.png">
      </div>
      <h1>Sirat tasks</h1>
    </header>
  </main>
</template>

<script setup>
import {useTaskStore} from "@/stores/TaskStore.js";

const taskStore = useTaskStore();


</script>

<style lang="sass" scoped>

</style>

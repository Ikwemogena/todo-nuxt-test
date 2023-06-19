<template >
    <div >
        <h1 class="text-7xl py-7">
            {{ todo.title }} Details
        </h1>
        <div class="border">
            <!-- <h2 class="text-3xl font-bold">{{ todo.title }}</h2> -->
            <p>{{ todo.description }}</p>
            <p>Priority: {{ todo.priority }}</p>
            <p>Date: {{ todo.date }}</p>
        </div>

    </div>
</template>

<script setup>
// import { defineProps } from 'vue';
  
  const props = defineProps({
    todo: {
      type: Object,
      required: true
    }
  });

</script>

<style scoped>

</style>

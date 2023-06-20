<template>
    <div class="p-8">
        <header class="flex justify-between">
            <h1 class="font-bold text-xl">TO-DO</h1>
            <nav>
                <ul class="flex gap-4 justify-between">
                    <li>To-Do</li>
                    <li>About</li>
                    <li>More</li>
                </ul>
            </nav>
            <div>
                <h1>{{ currentTime }}</h1>
            </div>
        </header>

        <Preloader />

        <slot />
        
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';

const currentTime = ref('');

onMounted(() => {
  updateCurrentTime();
});

function updateCurrentTime() {
  setInterval(() => {
    const date = new Date();
    const hours = date.getHours().toString().padStart(2, '0');
    const minutes = date.getMinutes().toString().padStart(2, '0');
    const seconds = date.getSeconds().toString().padStart(2, '0');
    currentTime.value = `${hours}:${minutes}:${seconds}`;
  }, 1000);
}
</script>

<style scoped>

</style>
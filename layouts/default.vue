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
                <h1>Time</h1>
            </div>
        </header>

        <Preloader />

        <slot />
        
        

    </div>
</template>

<script setup>
</script>

<style scoped>

</style>
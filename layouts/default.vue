<template>
    <div>
        <Preloader />
        <div class="flex h-screen">            
            <aside class="w-1/5 flex flex-col justify-between py-4">
                <div>
                    <h1 class="text-xl font-bold p-4 m-0">TO-DO</h1>
                <!-- Menu content goes here -->
                <ul class="p-4 text-xl w-28">
                    <NuxtLink to="/" class="mb-4 flex items-center"><img src="../assets/icons/home-icon.svg" alt="" class="mr-2 icon-white">Home</NuxtLink>
                    <NuxtLink to="/tasks" class="mb-4 flex items-center mt-2"><img src="../assets/icons/task-square.svg" alt="" class="mr-2">Tasks</NuxtLink>
                    <NuxtLink to="/old" class="mb-4 flex items-center mt-2"><img src="../assets/icons/archive.svg" alt="" class="mr-2">Archive</NuxtLink>
                    <NuxtLink class="mb-4 flex items-center mt-2"><img src="../assets/icons/note-favorite.svg" alt="" class="mr-2">Reminders</NuxtLink>
                </ul>
                </div>
                <!-- Profile section  -->
                <div class="p-4 flex">
                    <img class="w-12 h-12 rounded-full" src="https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?cs=srgb&dl=pexels-mohamed-abdelghaffar-771742.jpg&fm=jpg" alt="Profile Image">
                    <div class="ml-3">
                        <h4 class="text-lg font-semibold">John Doe</h4>
                        <p class="text-gray-500">john.doe@example.com</p>
                    </div>
                    <img src="../assets/icons/more-icon.svg" alt="">
                </div>
            </aside>
            <main class="flex-1">
                <!-- Main content goes here -->
                <!-- <h1 class="text-2xl font-bold mt-4 ml-4">Main Content</h1>
                <p class="ml-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> -->
                <slot />
            </main>
        </div>


    </div>
</template>

<script setup>

</script>

<style scoped>
.router-link-exact-active {
    background-color: #183440;
    color: #FFFFFF;
    border-radius: 12px;
    width: 160px;
    padding: 8px 0px 8px 12px;
    display: flex;
    gap: 10px;
}

</style>
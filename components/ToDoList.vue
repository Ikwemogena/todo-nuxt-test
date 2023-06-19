<template>
    <div>
      <div class="flex justify-between gap-5">
        <div class="flex flex-col justify-center items-center">
        <h1 class="text-7xl">List Items</h1>
  
        <div class="flex gap-4 items-center">
          <p>Filter Icon</p>
          <p>All</p>
          <p>Status</p>
          <p>Important</p>
          <p>Completed</p>
          <p>Search</p>
          <button @click="openForm" class="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-md">Add Task</button>
        </div>
  
        
  
        <div v-if="toDoList.length > 0">
          <ul class="text-6xl border-black">
            <li v-for="(todo, index) in toDoList" :key="todo.id" class="border flex justify-between items-center">
                
              <div>
                <label>
                    <input type="checkbox" v-model="todo.completed" @change="moveCompletedTodoToBottom(todo)" class="mr-2">
                    <span :class="{ 'font-bold': !todo.completed, 'line-through': todo.completed, 'cursor-pointer': !todo.completed }" @click="selectTodoDetails(todo)">{{ todo.title }}</span>
                </label>
                <!-- <h3 class="font-bold cursor-pointer" @click="selectTodoDetails(todo)">{{ todo.title }}</h3> -->
                <!-- <h3 :class="{ 'font-bold': !todo.completed, 'line-through': todo.completed, 'cursor-pointer': !todo.completed }" @click="toggleTodoCompletion(todo)">{{ todo.title }}</h3> -->
              </div>
              <button @click="deleteTodo(index)" class="text-rose-500 text-xl">Delete</button>
            </li>
          </ul>
        </div>
        <div v-else>
          <h1 class="text-3xl flex justify-center items-center">No tasks yet</h1>
        </div>

        
      </div>
      <hr class="w-8">
      
      <div>
        <!-- <h1 class="text-7xl">
            View ToDoList
        </h1> -->
            <div v-if="toDoList.length == 0">
                <h1 class="text-3xl flex justify-center items-center">Create a to do</h1>
            </div>

            <h1 class="flex justify-center items-end text-5xl" v-else-if="toDoList.length > 0">
                Select a to do item to view details
            </h1>
            <ToDoListDetails :todo="selectedTodo" v-if="selectedTodo" class="ml-4" />

        <div >
            <!-- <ToDoListDetails :todo="selectedTodo" v-else-if="selectedTodo" class="ml-4" /> -->
        </div>
      </div>
      </div>
  
      <!-- Modal -->
      <div v-if="showModal" class="fixed inset-0 flex items-center justify-center z-50">
        <div class="bg-white w-96 p-8 rounded-lg">
          <h2 class="text-3xl font-bold mb-4">Add Task</h2>
          <form @submit.prevent="addTodo" class="text-2xl">
            <input type="text" v-model="newTodoText" class="border border-gray-300 px-4 py-2 mx-2 rounded-md focus:outline-none focus:ring focus:border-blue-500">
            <textarea v-model="description" class="border border-gray-300 px-4 py-2 mx-2 rounded-md focus:outline-none focus:ring focus:border-blue-500" rows="4" cols="23" placeholder="Description"></textarea>
            <select v-model="priority" class="border border-gray-300 px-4 py-2 mx-2 rounded-md focus:outline-none focus:ring focus:border-blue-500">
              <option value="low">Low</option>
              <option value="medium">Medium</option>
              <option value="high">High</option>
            </select>
            <input type="date" v-model="date" class="border border-gray-300 px-4 py-2 mx-2 rounded-md focus:outline-none focus:ring focus:border-blue-500">
            <div class="flex justify-end mt-4">
              <button @click="closeForm" class="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-md mr-4">Cancel</button>
              <button class="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-md" type="submit">Add</button>
            </div>
          </form>
        </div>
      </div>
    </div>
</template>
  
<script setup>
// import { ref } from 'vue';

const newTodoText = ref('');
const description = ref('');
const priority = ref('low');
const date = ref('');
const showModal = ref(false);

const toDoList = ref([]);

const selectedTodo = ref(null);

function selectTodoDetails(todo) {
    selectedTodo.value = todo;
    console.log('Selected todo:', todo);
}

function addTodo() {
    newTodoText.value = newTodoText.value.trim();

    if (newTodoText.value !== '') {
        toDoList.value = [
        ...toDoList.value,
        {
            id: toDoList.value.length + 1,
            title: newTodoText.value,
            description: description.value,
            priority: priority.value,
            date: date.value
        }
        ];

        console.log('Adding todo:', newTodoText.value, description.value);
        newTodoText.value = '';
        description.value = '';
        priority.value = 'low';
        date.value = '';
        closeModal();
    }
}

function deleteTodo(index) {
    toDoList.value.splice(index, 1);
}

function openForm() {
    showModal.value = true;
}

function closeForm() {
    showModal.value = false;
}

function closeModal() {
    showModal.value = false;
}

function toggleTodoCompletion(todo) {
    todo.completed = !todo.completed;
    if (todo.completed) {
        toDoList.value.splice(toDoList.value.indexOf(todo), 1);
        toDoList.value.push(todo);
    }
}

function moveCompletedTodoToBottom(todo) {
    if (todo.completed) {
    toDoList.value.splice(toDoList.value.indexOf(todo), 1);
    toDoList.value.push(todo);
    }
}

//   console.log(toDoList);
</script>

<style scoped>
.line-through {
    text-decoration: line-through;
}
</style>
  
<template>
    <div class="p-6">
        <!-- <Preloader /> -->
        <!-- <h2>;knoeru9</h2> -->
        <!-- <TestToDo /> -->

        <div class="flex justify-between items-center">
            <div>
                <h1 class="text-2xl font-bold">Welcome, Mogena</h1>
                <p class="">Let's get your day organised by creating a task</p>
            </div>
            <div class="flex gap-4">
                <button>New Task</button>
                <p>calendar</p>
            </div>
        </div>
        <div>
            <div class="flex justify-between mt-4">
                <div class="segmented-buttons">
                <button
                v-for="(option, index) in options"
                :key="index"
                :class="['segmented-button', { active: selectedOption === option }, 'pr-8']"
                @click="selectOption(option)"
                >
                {{ option }}
                </button>
            </div>

            <div>
                <p>filters</p>
            </div>
        </div>

        <!-- <p>You are viewing {{ selectedOption }} tasks</p> -->

        <!-- <div class="grid grid-cols-2 gap-4 p-6">
      <div v-for="item in filteredTodoList" :key="item.id" class="border p-6 rounded-md max-w-lg flex flex-col justify-between">
        <p>{{ item }}</p>
      </div>
    </div> -->
        
    </div>

    <div class="grid grid-cols-2 gap-4 p-6">
        <!-- <div v-for="item in todo_list" :key="item.id" class="border p-6 rounded-md max-w-lg flex flex-col justify-between"> -->
            <div v-for="item in filteredTodoList" :key="item.id" class="border p-6 rounded-md max-w-lg flex flex-col justify-between">
            <div>
                <h2 class="text-lg font-bold mb-2">{{ item.title }}</h2>
                <div class="flex mb-2">
                    <p class="mr-2">{{ item.category}}</p>
                    <p class="mr-2">for loop</p>
                </div>
                <p class="text-sm text-gray-700 mb-4 description-lines">
                {{ item.description }}
            </p>
            </div>
            
            <div class="mark-completed flex items-center px-4 py-1 text-white rounded-md text-center">
                <input type="checkbox" class="mr-2" v-model="item.completed" @change="updateToDo(item)">
                <p class="text-center">Mark as Completed</p>
            </div>
        </div>
    </div>

    <!-- <ToDoList /> -->

    </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue';
import { useRouter } from 'vue-router';

const options = ref(['All', 'Completed', 'In progress', 'Archive']);
const selectedOption = ref('All');
const todo_list = ref([]);

function selectOption(option) {
  selectedOption.value = option;
}


const filteredTodoList = computed(() => {
  if (selectedOption.value === 'Completed') {
    return todo_list.value.filter((item) => item.completed);
  } else if (selectedOption.value === 'In progress') {
    return todo_list.value.filter((item) => !item.completed);
  } else {
    return todo_list.value;
  }
});



// import supabase from '~/server/api/supabase.js';
// const options = ref(['All', 'Completed', 'In progress', 'Archive']);
// const selectedOption = ref('All');

// function selectOption(option) {
//   selectedOption.value = option;
// }

// const user = supabase.auth.user; 



// let { data: todo_list, error } = await supabase
//   .from('todo_list')
//   .select('*')
//   .eq('user_id', user.id); 

//   console.log(todo_list)


// async function updateToDo(item) {
//   try {
//     const { data, error } = await supabase
//       .from('todo_list')
//       .update({ completed: item.completed })
//       .match({ id: item.id });

//     if (error) {
//       console.error('Error updating task:', error);
//     } else {
//       console.log('Task updated successfully');
//     }
//   } catch (error) {
//     console.error('Error updating task:', error);
//   }
// }

// const filteredTodoList = computed(() => {
//   if (selectedOption.value === 'Completed') {
//     return todo_list.filter((item) => item.completed);
//   } else if (selectedOption.value === 'In progress') {
//     return todo_list.filter((item) => !item.completed);
//   } else {
//     return todo_list;
//   }
// });


// onMounted(async () => {
//   // Wait for the client to initialize before accessing $supabase
//   await supabase.auth.refreshSession();
//   user.value = supabase.auth.user();

//   if (user.value) {
//     // Fetch tasks only if a user is authenticated
//     const { data, error } = await supabase
//       .from('todo_list')
//       .select('*')
//       .eq('user_id', user.value.id);

//     if (error) {
//       console.error('Error fetching tasks:', error);
//     } else {
//       todo_list = data;
//     }
//   }
// });



</script>

<style scoped>
.segmented-buttons {
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
  border: 1px solid #183440;
  border-radius: 1rem;
}

.segmented-buttons::before,
.segmented-buttons::after {
  content: '';
  flex: 1;
  height: 1px;
  background-color: #183440;
  margin: auto;
}


.segmented-button {
  /* border: 1px solid red; */
  /* border-radius: 1rem; */
  /* background-color: #e1e1e1; */
  color: #183440;
  padding: 10px 30px;
  font-size: 14px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.segmented-button.active {
    background-color: rgba(24, 52, 64, 0.1);
  /* background-color: #FFFFFF; */
  color: #183440;
}

.mark-completed {
    border: 1px solid rgba(24, 52, 64, 0.6);
    color: rgba(24, 52, 64, 0.6);
    font-size: 1rem;

}

.description-lines {
  max-height: 5em;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 5;
  -webkit-box-orient: vertical;
}



</style>
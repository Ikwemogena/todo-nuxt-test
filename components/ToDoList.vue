<template>
    <div>
      
    </div>
</template>
  
<script setup>
// import { ref } from 'vue';

// const newTodoText = ref('');
// const description = ref('');
// const priority = ref('low');
// const date = ref('');
// const showModal = ref(false);

// const toDoList = ref([]);

// const selectedTodo = ref(null);

// function selectTodoDetails(todo) {
//     selectedTodo.value = todo;
//     console.log('Selected todo:', todo);
// }

// function addTodo() {
//     newTodoText.value = newTodoText.value.trim();

//     if (newTodoText.value !== '') {
//         toDoList.value = [
//         ...toDoList.value,
//         {
//             id: toDoList.value.length + 1,
//             title: newTodoText.value,
//             description: description.value,
//             priority: priority.value,
//             date: date.value
//         }
//         ];

//         console.log('Adding todo:', newTodoText.value, description.value);
//         newTodoText.value = '';
//         description.value = '';
//         priority.value = 'low';
//         date.value = '';
//         closeModal();
//     }
// }

// function deleteTodo(index) {
//     toDoList.value.splice(index, 1);
// }

// function openForm() {
//     showModal.value = true;
// }

// function closeForm() {
//     showModal.value = false;
// }

// function closeModal() {
//     showModal.value = false;
// }

// function toggleTodoCompletion(todo) {
//     todo.completed = !todo.completed;
//     if (todo.completed) {
//         toDoList.value.splice(toDoList.value.indexOf(todo), 1);
//         toDoList.value.push(todo);
//     }
// }

// function moveCompletedTodoToBottom(todo) {
//     if (todo.completed) {
//     toDoList.value.splice(toDoList.value.indexOf(todo), 1);
//     toDoList.value.push(todo);
//     }
// }

//   console.log(toDoList);
</script>

<style scoped>
.line-through {
    text-decoration: line-through;
}
</style>
  
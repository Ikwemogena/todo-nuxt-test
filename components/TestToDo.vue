<template>
    <div>
        <ul>
      <!-- <li v-for="item in toDoList" :key="item.id">{{ item.to_do_items }}</li> -->
      <li v-for="item in toDoList" :key="item.id">{{ item.to_do_items }}</li>
      <!-- {{ toDoList }} -->
    </ul>

    </div>
</template>

<script setup>
import { createClient } from '@supabase/supabase-js';
// const supabaseUrl = 'YOUR_SUPABASE_URL';
// const supabaseKey = 'YOUR_SUPABASE_PUBLIC_KEY';
// const { supabaseUrl, supabaseKey} = useRuntimeConfig()
const supabaseUrl = 'https://fkvnvhdjidzlfhimwqpo.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZrdm52aGRqaWR6bGZoaW13cXBvIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODcyMjM0NzUsImV4cCI6MjAwMjc5OTQ3NX0.wcN8iPzD4e_0sueun1BAs4puPc6vbPg4OMQdFf3MLy4'
const supabase = createClient(supabaseUrl, supabaseKey);

// console.log(supabaseUrl, supabaseKey)

// const toDoList = ref([]);

// const fetchToDoList = async () => {
//   try {
//     // const { data, error } = await supabase.from('toDoList').select('to_do_items');
//     const { data: toDoList, error }= await supabase
//         .from('toDoList')
//         .select('to_do_items')
//         // .select('*')
    
//     if (error) {
//       console.error('Error fetching ToDo list:', error);
//       return;
//     }

//     console.log(toDoList)
    
//     // toDoList.value = toDoList;
//   } catch (error) {
//     console.error('Error fetching ToDo list:', error);
//   }
// };

// onMounted(fetchToDoList);


let { data: toDoList, error } = await supabase
  .from('toDoList')
  .select('*')


  console.log(toDoList)


// import { createClient } from '@supabase/supabase-js';

// const { supabaseUrl, supabaseKey} = useRuntimeConfig()
// // const client = useSupabaseClient()
// const supabase = createClient(supabaseUrl, supabaseKey);


// let { data: toDoList, error } = await supabase
//   .from('toDoList')
//   .select('to_do_items')




// let { data: test, error } = await supabase
//   .from('test')
//   .select('name')




</script>

<style scoped>

</style>
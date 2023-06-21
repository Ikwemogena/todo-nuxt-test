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
import supabase from '~/server/api/supabase.js';

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
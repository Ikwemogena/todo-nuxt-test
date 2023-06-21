<template>
    <div>
      <h1>Login</h1>
  
      <form @submit="login">
        <label for="email">Email</label>
        <input v-model="email" type="email" required>
  
        <label for="password">Password</label>
        <input v-model="password" type="password" required>
  
        <button type="submit">Login</button>
      </form>
    </div>
  </template>
  
  <script>
  import supabase from '~/server/api/supabase.js';

  export default {
    data() {
      return {
        email: '',
        password: ''
      };
    },
    methods: {
        async login(event) {
  event.preventDefault();

  try {
    const { data, error } = await supabase.auth.signInWithPassword({
      email: 'morgz@to-do.com',
      password: 'testemail',
    });

    if (error) {
      console.error('Error signing in:', error.message);
      // Handle the error appropriately
    } else if (data) {
      console.log('User signed in:', data);
      // Redirect the user to the home page or any other desired route
      this.$router.push('/');
    }
  } catch (error) {
    console.error('Error signing in:', error.message);
    // Handle any unexpected errors
  }
}

    }
  }
  </script>
  
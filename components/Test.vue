<template>
  <div class="form-popup" id="myForm">
    <form class="form-container" @submit="submitForm">
      <h1>Login</h1>

      <label for="email"><b>Email</b></label>
      <input v-model="email" type="text" placeholder="Enter Email" name="email" required>

      <label for="psw"><b>Password</b></label>
      <input v-model="password" type="password" placeholder="Enter Password" name="psw" required>

      <button type="submit" class="btn">Login</button>
      <button type="button" class="btn cancel" @click="closeForm()">Close</button>
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
    async submitForm(event) {
      event.preventDefault();

      // Log form details
      console.log('Form submitted with email:', this.email);
      console.log('Form submitted with password:', this.password);

      try {
        const { user, error } = await supabase.auth.signIn({
          email: this.email,
          password: this.password
        });

        if (error) {
          console.error('Error signing in:', error.message);
          // Handle the error appropriately
        } else if (user) {
          console.log('User signed in:', user);
          // Handle the successful sign-in

          // Redirect to the home page
          this.$router.push('/home');

          // Reload the page
          location.reload();
        } else {
          console.error('Unexpected response:', user);
          // Handle the unexpected response
        }
      } catch (error) {
        console.error('Error signing in:', error.message);
        // Handle any unexpected errors
      }
    },
    closeForm() {
      // Implement the closeForm() method if needed
    }
  }
};
</script>

<style scoped>
.form-popup {
    display: block;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 9;
  }
  
  .form-container {
    max-width: 300px;
    padding: 20px;
    background-color: #fefefe;
    border: 1px solid #ccc;
    border-radius: 5px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  }
  
  .form-container h1 {
    text-align: center;
    margin-bottom: 20px;
  }
  
  .form-container label {
    font-weight: bold;
  }
  
  .form-container input[type="text"],
  .form-container input[type="password"] {
    width: 100%;
    padding: 12px 20px;
    margin: 8px 0;
    border: 1px solid #ccc;
    box-sizing: border-box;
  }
  
  .form-container button[type="submit"],
  .form-container button[type="button"] {
    width: 100%;
    padding: 10px 20px;
    margin: 10px 0;
    border: none;
    background-color: #4caf50;
    color: white;
    cursor: pointer;
  }
  
  .form-container button[type="button"] {
    background-color: #f44336;
  }
  
  .form-container button[type="submit"]:hover,
  .form-container button[type="button"]:hover {
    opacity: 0.8;
  }
</style>
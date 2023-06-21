<template>
    <div>
        <!-- <button @click="openForm()">Open Form</button> -->
        <!-- <div  class="form-popup" id="myForm">
            <form class="form-container">
                <h1>Login</h1>

                <label for="email"><b>Email</b></label>
                <input v-model="email" type="text" placeholder="Enter Email" name="email" required>

                <label for="psw"><b>Password</b></label>
                <input v-model="password" type="password" placeholder="Enter Password" name="psw" required>

                <button type="submit" class="btn">Login</button>
                <button type="button" class="btn cancel" @click="closeForm()">Close</button>
            </form>
        </div> -->

        <!-- <div class="form-popup" id="myForm">
            <form class="form-container">
                <h1>Login</h1>

                <label for="email"><b>Email</b></label>
                <input v-model="email" type="text" placeholder="Enter Email" name="email" required>

                <label for="psw"><b>Password</b></label>
                <input v-model="password" type="password" placeholder="Enter Password" name="psw" required>

                <button type="submit" class="btn">Login</button>
                <button type="button" class="btn cancel" @click="closeForm()">Close</button>
            </form>
        </div> -->

        <Test />


    </div>
</template>

<script setup>
// v-if="showModal"
const showModal = ref(false);
const email = ref('')
const password = ref('')
const isSignUp = ref(false)


const signUp = async () => {

}


const login = async () => {
    
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
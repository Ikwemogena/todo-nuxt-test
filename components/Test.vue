<template>
    <div>
      <div class="chips-container">
        <div class="chips-list">
          <div v-for="(chip, index) in chips" :key="index" class="chip">
            {{ chip }}
            <span class="chip-remove" @click="removeChip(index)">&times;</span>
          </div>
        </div>
        <input type="text" v-model="newChip" @keydown.enter="addChip" class="chip-input" placeholder="Add a chip">
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        chips: [],
        newChip: '',
      };
    },
    methods: {
      addChip() {
        if (this.newChip.trim() !== '') {
          this.chips.push(this.newChip.trim());
          this.newChip = '';
        }
      },
      removeChip(index) {
        this.chips.splice(index, 1);
      },
    },
  };
  </script>
  
  <style scoped>
  .chips-container {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    border: 1px solid #ccc;
    border-radius: 4px;
    padding: 4px;
  }
  
  .chips-list {
    display: flex;
    flex-wrap: wrap;
  }
  
  .chip {
    display: flex;
    align-items: center;
    background-color: #eee;
    border-radius: 16px;
    padding: 4px 8px;
    margin: 2px;
  }
  
  .chip-remove {
    cursor: pointer;
    color: #999;
    font-size: 12px;
    margin-left: 4px;
  }
  
  .chip-input {
    flex-grow: 1;
    border: none;
    outline: none;
    font-size: 14px;
    padding: 4px;
  }
  </style>
  
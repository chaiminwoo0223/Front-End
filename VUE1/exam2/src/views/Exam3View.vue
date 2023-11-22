<template>
    <div>
      <h1>Exam3</h1>
      <input type="text" v-model="value"/>
      <br>
      <MyMessage :inputValue="value"></MyMessage>
    </div>
  </template>
  
  <script>
  import MyMessage from '../views/MyMessage.vue'
  export default {
    name: "Exam3View",
    components: {
        MyMessage
    },
    data() {
    return {
      value:""
      };
    }
  }
  </script>
  
  <style scoped>
  div { padding: 30px; margin: 30px auto; width: 500px;
    border: 1px solid #ccc; box-shadow: 3px 3px 3px #aaa; }
  input[type=text] { padding: 5px; margin-right: 5px; width: 200px; }
  </style>  
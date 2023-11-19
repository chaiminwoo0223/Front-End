<template>
    <div>
      <h1>Exam4</h1>
      <table>
        <tr><td>index</td><td>value</td></tr>
        <tr v-for="(todo) in todos" v-bind:key="todo.id">
          <td>{{ todo.id }}</td>
          <td>{{ todo.value }}</td>
        </tr>
      </table>
      <br>
    <div class="box" v-bind:class="color">
        <p>ExamFourChild</p>
        <input type="text" v-model="value" />
        <button type="button" v-on:click="addTodo">전달</button>
    </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "ExamFour",
    data() {
    return {
      todos: [],
      value: "",
      lastId: -1
      }
    },
    methods: {
        addTodo: function() {
      this.todos.push({id: ++this.lastId, value: this.value});
      this.value = "";
      }
    }
  }
  </script>
  
  <style scoped>
  div { padding: 30px; margin: 30px auto; width: 500px;
    border: 1px solid #ccc; box-shadow: 3px 3px 3px #aaa; }
  div.box { display: inline-block; padding: 20px; width: 450px; 
    border: 1px solid gray; text-align: center; background-color: #ffa; }
  table { border-collapse: collapse; margin-left: 50px; width: 80%; }
  tr:nth-child(1) { background-color: #eee; text-align: center; }
  td { border: 1px solid gray; padding: 6px; text-align: center; }
  input[type=text] { padding: 5px; margin-right: 5px; width: 200px; }
  button { padding: 0.3em 1.5em; }
  </style>  
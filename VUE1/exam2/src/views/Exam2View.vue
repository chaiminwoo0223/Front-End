<template>
    <div>
      <h1>Exam2</h1>
      <table>
        <tr v-for="(todo, index) in todos" v-bind:key="todo.id">
          <td>{{ todo.value }}</td>
          <td><button type="button" v-on:click="deleteTodo(index)">삭제</button></td>
        </tr>
      </table>
      <br>
        <input type="text" v-model="value" />
        <button type="button" v-on:click="addTodo">추가</button>
    </div>
  </template>
  
  <script>
  export default {
    name: "Exam2View",
    data() {
      return {
        todos: [
          { value: "zero" },
          { value: "one" },
          { value: "two" }
        ]
      }
    },
    methods: {
      deleteTodo(index) {
        if (confirm("삭제하시겠습니까?"))
          this.todos.splice(index, 1);
      },
      addTodo: function() {
      this.todos.push({id: ++this.lastId, value: this.value});
      this.value = "";
      }
    }
  }
  </script>
  
  <style scoped>
  div { padding: 30px; margin: 30px auto; width: 400px;
    border: 1px solid #ccc; box-shadow: 3px 3px 3px #aaa; }
  table { border-collapse: collapse; margin: 10px 10px; width: 380px; }
  tr:nth-child(1) { text-align: center; }
  td { border: 1px solid #808080;  }
  td:nth-child(1) { text-align: center; width: 150px; }
  td:nth-child(2) { text-align: center; width: 0px; padding-top: 8px; padding-bottom: 8px;}
  input[type=text] { padding: 5px; margin-right: 5px; width: 250px; }
  button { padding: 0.5em 1em; margin: 0.05em;}
  span { font-weight: bold; margin-left: 10px; cursor: pointer; float: right; }
  </style>  
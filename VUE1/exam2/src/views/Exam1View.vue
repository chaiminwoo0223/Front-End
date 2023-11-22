<template>
    <div class="box">
      <h1>Exam1</h1>
      <div v-for="(todo) in todos" :key="todo.id" class="todo-box-inline">{{ todo.title }}</div>
      <br>
      <input type="text" v-model="title" />
      <button type="button" v-on:click="addTodo">추가</button>
    </div>
  </template>
  
  <script>
  export default {
    name: "MyTodo",
    data() {
      return {
        todos: [
          { title: "zero" },
          { title: "one" },
          { title: "two" }
        ],
        title: "",
        lastId: 3
      };
    },
    methods: {
      addTodo() {
        if (this.title.trim() !== "") {
          this.todos.push({ id: ++this.lastId, title: this.title });
          this.title = "";
        }
      }
    }
  };
  </script>
  
  <style scoped>
  .box {
    padding: 30px; margin: 30px auto; width: 400px;
    border: 1px solid #ccc; box-shadow: 3px 3px 3px #aaa;
  }
  .todo-box-inline {
    display: inline-block;
    border: 1px solid #0c0101;
    padding: 10px;
    margin-left: 10px;
    white-space: nowrap;
  }
  input[type=text] { padding: 5px; margin-top: 20px; width: 150px; }
  button { padding: 0.3em 1.5em; margin-left: 10px; }
  </style>
  
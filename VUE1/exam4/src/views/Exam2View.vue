<template>
  <div>
    <h1>Exam2</h1>
    <table>
      <tr><td>ID</td><td>제목</td></tr>
      <tr v-for="(todo) in todos" :key="todo.id" :class="{ done: todo.done }">
        <td>{{ todo.id }}</td>
        <td>{{ todo.title }}</td>
      </tr>
    </table>
    <div class="input-container">
      <input type="text" v-model="title" placeholder="제목을 입력하세요"/>
      <button type="button" @click="addTodo">저장</button>
    </div>
  </div>
</template>
  
<script>
export default {
  name: "Exam2View",
  data() {
    return {
      todos: [
        { "id": 1, "title": "토지" }, 
        { "id": 2, "title": "죄와벌" }
      ],
      title: "",
      lastId: 2
    }
  },
  methods: {
    addTodo() {
      this.todos.push({id: ++this.lastId, title: this.title});
      this.title = "";
    }
  }
}
</script>  

<style scoped>
h1 { border-bottom: 1px solid gray; text-align: left; }
div { padding: 30px; margin: 30px auto; width: 600px; }
table { border-collapse: collapse; margin: 20px 0; width: 100%; }
tr:nth-child(1) { background-color: #ddd; text-align: center; }
td { border: 1px solid gray; padding: 6px; }
td:nth-child(1) { text-align: center; width: 30px; }
.input-container { display: flex; align-items: center; margin-top: 20px; }
input[type=text] { padding: 8px; margin-right: 10px; margin-left: -30px; margin-top: -30px;
                   border: 1px solid #ccc; font-size: 16px; width: calc(100% - 300px); }
button { padding: 10px 20px; font-size: 16px; margin-top: -30px; }
span { font-weight: bold; margin-left: 10px; cursor: pointer; float: right; }
tr.done { background-color: #f8f8f8; color: #bbb; text-decoration: line-through; }
</style>  
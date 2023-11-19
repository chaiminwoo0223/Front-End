<template>
    <div>
      <h1>Exam6</h1>
      <table>
        <tr><td>index</td><td>value</td></tr>
        <tr v-for="(todo, index) in receivedTodos" :key="index">
          <td>{{ todo.id }}</td>
          <td>{{ todo.value }}</td>
        </tr>
      </table>
      <br>
      <ExamSixChild @childData="updateReceivedTodos"></ExamSixChild>
    </div>
  </template>
  
  <script>
  import ExamSixChild from '../views/ExamSixChild.vue'
  export default {
    name: "ExamSix",
    components: {
    ExamSixChild
    },
    data() {
    return {
      receivedTodos: []
      };
    },
    methods: { 
    updateReceivedTodos(todos) { 
      this.receivedTodos = todos; // 자식 컴포넌트로부터 받은 데이터를 처리
      }
    }
  }
  </script>
  
  <style scoped>
  div { padding: 30px; margin: 30px auto; width: 500px;
    border: 1px solid #ccc; box-shadow: 3px 3px 3px #aaa; }
  table { border-collapse: collapse; margin-left: 50px; width: 80%; }
  tr:nth-child(1) { background-color: #eee; text-align: center; }
  td { border: 1px solid gray; padding: 6px; text-align: center; }
  </style>  
<template>
    <div id="StudentListView">
      <h1>학생 목록</h1>
      <table>
        <tr><td>id</td><td>학번</td><td>이름</td><td>전화</td><td>성별</td>
            <td>이메일</td><td>학과</td></tr>
        <tr v-for="student in students" v-bind:key="student.id" v-on:click="goEdit(student.id)">
          <td>{{ student.id }}</td>
          <td>{{ student.studentNo }}</td>
          <td>{{ student.name }}</td>
          <td>{{ student.phone }}</td>
          <td>{{ student.sex }}</td>
          <td>{{ student.email }}</td>
          <td>{{ student.departmentId }}</td>
        </tr>
      </table>
  
    </div>
  </template>
  
  <script>
  import { loadStudents } from '../studentService';
  
  export default {
    name: "StudentListView",
    data() {
      return {
        students: [ ]
      }
    },
    async mounted() {
     this.students = await loadStudents();
    },
    methods: {
      goEdit(id) {
        this.$router.push("/edit/" + id);
      }
    }
  }
  </script>
  
  <style scoped>
  h1 { border-bottom: 1px solid gray; }
  table { border-collapse: collapse; margin: 20px 0; width: 100%; }
  tr:nth-child(1) { background-color: #eee; text-align: center; }
  td { border: 1px solid gray; padding: 6px; }
  td:nth-child(1) { text-align: center; width: 30px; }
  tr:hover { background-color: #ffd; cursor: pointer }
  </style>  
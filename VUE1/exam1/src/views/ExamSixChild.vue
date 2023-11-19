<template>
    <div class="box">
        <p>ExamSixChild</p>
        <input type="text" v-model="value" />
        <button type="button" @click="addTodo">전달</button>
    </div>
</template>

<script>
  export default {
    name: "ExamSixChild",
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
      this.$emit('childData', this.todos);
      }
    }
  }
</script>
  
<style scoped>
  div.box { display: inline-block; padding: 20px; width: 450px; 
    border: 1px solid gray; text-align: center; background-color: #ffa; }
  input[type=text] { padding: 5px; margin-right: 5px; width: 200px; }
  button { padding: 0.3em 1.5em; }
</style>
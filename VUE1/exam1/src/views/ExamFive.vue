<template>
    <div>
      <h1>Exam5</h1>
      <select v-model="color">
      <option>yellow</option>
      <option>green</option>
      <option>blue</option>
      <option>red</option>
    </select>
    <br>
    <ExamFiveChild v-bind:class="color"></ExamFiveChild>
    </div>
</template>

<script>
import ExamFiveChild from '../views/ExamFiveChild.vue'
export default {
  name: 'ExamFive',
  components: {
    ExamFiveChild
  },
  data() {
    return {
      color: "yellow"
    };
  }
}
</script>

<style scoped>
  div { padding: 30px; margin: 30px auto; width: 500px;
    border: 1px solid #ccc; box-shadow: 3px 3px 3px #aaa; }
  select { padding: 5px; font-size: 15pt; width: 150px; margin: 10px; }
  .yellow { background-color: #ffa; }
  .green { background-color: #bfb; }
  .blue { background-color: #bbf; }
  .red { background-color: #fbb; }
</style>
<template>
    <div>
      <h1>Exam3</h1>
      <select v-model="color">
      <option>yellow</option>
      <option>green</option>
      <option>blue</option>
      <option>red</option>
    </select>
    <br>
    <div class="box" v-bind:class="color">ExamThreeChild</div>
    </div>
</template>

<script>
export default {
  name: 'ExamThree',
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
  div.box { display: inline-block; padding: 20px; width: 400px; 
        border: 1px solid gray; box-shadow: 5px 5px 5px #aaa; }
  select { padding: 5px; font-size: 15pt; width: 150px; margin: 10px; }
  .yellow { background-color: #ffa; }
  .green { background-color: #bfb; }
  .blue { background-color: #bbf; }
  .red { background-color: #fbb; }
</style>
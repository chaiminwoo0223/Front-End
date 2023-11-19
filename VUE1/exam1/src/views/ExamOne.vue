<template>
    <div>
      <h1>Exam1</h1>
      <p>202114058</p>
      <p>최민우</p>
      <p>{{ time }}</p>
    </div>
</template>
  
<script>
import moment from "moment";
export default {
  name: "ExamOne",
  data() {
    return { time: null };
  },
  mounted() {
    let callback = () => {
      this.time = moment().format("HH:mm:ss");
      console.log(this.time);
    }
    callback();
    setInterval(callback, 1000);
  }
}
</script>

<style scoped>
div { padding: 30px; margin: 30px auto; width: 500px;
    border: 1px solid #ccc; box-shadow: 3px 3px 3px #aaa; }
</style>
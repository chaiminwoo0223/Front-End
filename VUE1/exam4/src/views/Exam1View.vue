<template>
  <div class="box">
    <h1 class="title">Exam1</h1>
    <div class="content">
      <h1 class="count">{{ count }}</h1>
      <div class="buttons">
        <IncrementView @increment="incrementCount" />
        <IncrementView2 @increment2="incrementCount2" />
      </div>
    </div>
  </div>
</template>

<script>
import IncrementView from './IncrementView.vue';
import IncrementView2 from './IncrementView2.vue';

export default {
  name: 'Exam1View',
  components: {
    IncrementView,
    IncrementView2
  },
  data() {
    return {
      count: 0 // count 값 초기화
    };
  },
  methods: {
    incrementCount() {
      this.count++;
    },
    incrementCount2() {
      this.count--;
    },
  }
};
</script>

<style>
h1.title { text-align: left; margin-bottom: 10px; border-bottom: 1px solid gray; }
h1.count { font-size: 30px; text-align: left; }
.box { padding: 30px; margin: 30px auto; width: 600px; text-align: left; }
.content { display: flex; flex-direction: column; align-items: flex-start; }
.buttons { display: flex; flex-direction: row; align-items: center; }
button { font-size: 18px; padding: 10px 20px; margin-right: 10px; }
</style>
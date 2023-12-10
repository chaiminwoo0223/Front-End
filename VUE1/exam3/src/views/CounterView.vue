<template>
  <div class="box">
    <div>
      <h1>{{ count }}</h1>
    </div>
    <IncrementView @increment="incrementCount" />
  </div>
</template>

<script>
import IncrementView from './IncrementView.vue';

export default {
  name: 'CounterView',
  components: {
    IncrementView
  },
  data() {
    return {
      count: 0 // count 값 초기화
    };
  },
  methods: {
    incrementCount() {
      this.count++;
    }
  }
};
</script>

<style>
h1 { text-align: left; } 
.box { padding: 30px; margin: 30px auto; width: 600px; }
</style>  
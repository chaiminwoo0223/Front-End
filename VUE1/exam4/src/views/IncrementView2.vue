<template>
  <div>
    <button type="button" @click="increment2">--</button>
  </div>
</template>
  
<script>
export default {
  name: 'IncrementView2',
  methods: {
    increment2() {
      this.$emit('increment2');
    }
  }
};
</script>
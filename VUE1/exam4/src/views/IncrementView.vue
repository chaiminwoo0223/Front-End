<template>
    <div>
      <button type="button" @click="increment">++</button>
    </div>
</template>
  
<script>
export default {
  name: 'IncrementView',
  methods: {
    increment() {
      this.$emit('increment');
    }
  }
};
</script>
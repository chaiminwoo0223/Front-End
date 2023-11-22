<template>
    <div class="box">
        {{ inputValue }}
    </div>
</template>

<script>
  export default {
    name: "MyMessage",
    props: {
    inputValue: {
      type: String
      }
    },
    data() {
    return {
      value: ""
      }
    },
  }
</script>
  
<style scoped>
  div.box { display: inline-block; padding: 20px; width: 300px; 
    border: 1px solid gray; text-align: center; background-color: #ffa; }
</style>
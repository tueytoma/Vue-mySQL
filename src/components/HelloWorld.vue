<template>
  <div class="container">
    <img alt="Vue logo" src="../assets/logo.png">
    <span> This is Test </span> 
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.container {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>

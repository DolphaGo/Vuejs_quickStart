<template>
  <div class="main test">
    {{ msg }}
  </div>
</template>
<script>

export default {
  name: 'child1',
  data() {
    return {
      msg: 'Child1'
    }
  }
}
</script>
<style scoped>
.main {
  border: solid 1px black;
  background-color: yellow;
}
</style>

<template>
  <div class="main">
    {{ msg }}
    <child11 />
    {{ msg }}
  </div>
</template>
<script>

import Child11 from "@/components/Child11";

export default {
  name: 'child1',
  components: {Child11},
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

.test{
  background-color: blue;
}
</style>

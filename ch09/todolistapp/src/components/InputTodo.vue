<template>
  <div>
    <input class="input" type="text" id="task" v-model.trim="todo"
           placeholder="입력 후 엔터!" @keyup.enter="addTodo">
    <span class="addbutton" @click="addTodo">추 가</span>
  </div>
</template>

<script>
import Constant from "@/Constant";

export default {
  name: "input-todo",
  data: function () {
    return {
      todo: ""
    }
  },
  methods: {
    addTodo() {
      this.$store.commit(Constant.ADD_TODO, {todo: this.todo})
      this.todo = ""
    }
  }
}
</script>

<style scoped>
* {
  box-sizing: border-box;
}

.input {
  border: none;
  width: 75%;
  height: 35px;
  padding: 10px;
  float: left;
  font-size: 16px;
}

.addbutton {
  padding: 10px;
  width: 25%;
  height: 35px;
  background: #d9d9d9;
  color: #555;
  float: left;
  text-align: center;
  font-size: 13px;
  cursor: pointer;
  transition: 0.3s;
}
</style>

<template>
  <ul id="todolist">
    <li v-for="a in todolist" :key="a.id" :class="checked(a.done)" @click="doneABCD({id: a.id})">
      <span>{{ a.todo }}</span>
      <span v-if="a.done"> (완료)</span>
      <span class="close" @click.stop="oneTwoThree({id:a.id})">&#x00D7;</span>
    </li>
  </ul>
</template>
<script type="text/javascript">
import Constant from "@/Constant";
import {mapState, mapMutations} from 'vuex'

export default {
  name: 'List',
  computed: mapState(['todolist']),
  methods: {
    checked(done) {
      if (done) {
        return {
          checked: true
        }
      } else {
        return {
          checked: false
        }
      }
    },

    ...mapMutations({
      oneTwoThree: Constant.DELETE_TODO,
      doneABCD: Constant.DONE_TOGGLE
    })
  }

}
</script>

<style>
* {
  box-sizing: border-box;
}

ul {
  margin: 0;
  padding: 0;
}

ul li {
  cursor: pointer;
  position: relative;
  padding: 8px 8px 8px 40px;
  background: #eee;
  font-size: 14px;
  transition: 0.2s;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

ul li:hover {
  background: #ddd;
}

ul li.checked {
  background: #BBB;
  color: #fff;
  text-decoration: line-through;
}

ul li.checked::before {
  content: '';
  position: absolute;
  border-color: #fff;
  border-style: solid;
  border-width: 0px 1px 1px 0px;
  top: 10px;
  left: 16px;
  transform: rotate(45deg);
  height: 8px;
  width: 8px;
}

.close {
  position: absolute;
  right: 0;
  top: 0;
  padding: 8px 12px 8px 12px
}

.close:hover {
  background-color: #f44336;
  color: white;
}
</style>

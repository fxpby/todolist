<template>
  <ul class="todo-main">
    <Item
      v-for="(todo, index) in todos"
      :todo="todo"
      :index="index"
    />
  </ul>
</template>

<script>
  import localStorageUtil from "../utils/localStorageUtil";
  import Item from "./Item";
  import {mapState} from 'vuex'
  export default {
    name: "List",
    computed:{
      ...mapState(['todos'])
    },
    components:{
      Item
    },
    //深度监视
    watch:{
      todos:{
        deep:true,
        handler:localStorageUtil.saveTodos
      }
    }
  }
</script>

<style scoped>
  .todo-main {
    margin-left: 0px;
    border: 1px solid #ddd;
    border-radius: 2px;
    padding: 0px;
  }

  .todo-empty {
    height: 40px;
    line-height: 40px;
    border: 1px solid #ddd;
    border-radius: 2px;
    padding-left: 5px;
    margin-top: 10px;
  }
</style>
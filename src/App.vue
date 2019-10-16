<template>
  <div id="app">
    <Header/>
    <List/>
    <Footer/>
  </div>
</template>

<script>
  //引入组件
  import Header from "./components/Header";
  import List from "./components/List";
  import Footer from "./components/Footer";
  // import axios from 'axios'
  // Vue.prototype.$http = axios


  // import Item from "./components/Item";
  export default {
    name: 'app',
    components: {
      Header,
      List,
      Footer,
      // Item
    },
    methods:{
      // reqData(){
      //   let url = 'https://www.easy-mock.com/mock/5d40032d6a3ae527e747fea9/example/itlike/p_list'
      //   axios.get(url).then((response)=>{
      //     console.log(response);
      //   }).catch((error) => {
      //     console.log('error');
      //   })
      // }
    }
  }
</script>

<style>
</style>

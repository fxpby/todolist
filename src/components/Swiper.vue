<template>
  <div id="swiper">
    <swiper :options="swiperOption">
      <swiper-slide v-for="words in wordsList">
        <div class="words">
          <span>{{words.content}}</span>
        </div>
      </swiper-slide>
    </swiper>
    <div class="swiper-button-prev"></div>
    <div class="swiper-button-next"></div>
  </div>
</template>

<script>
  import 'swiper/dist/css/swiper.css'
  import { swiper, swiperSlide } from 'vue-awesome-swiper'
  import axios from 'axios'
  export default {
    name: "Swiper",
    data(){
      return{
        wordsList:[
          {id:1, content:'今日事，今日毕'},
          {id:2, content:'天道酬勤'},
          {id:3, content:'现在决定未来,知识改变命运'},
          {id:4, content:'细节决定成败'},
        ],
        swiperOption:{
          loop:true,
          autoplay:{
            disableOnInteraction:false,//手动点击按钮后轮播不停止
            delay:3000//时间间隔
          },
          navigation:{
            nextEl:'.swiper-button-next',
            preEl:'.swiper-button-prev'
          }
        }
      }
    },
    created(){
      // this.$http.get('/api/test').then(response => {
      //   console.log(response)
      // }).catch(response => {
      //   console.log(response)
      // })
    },
    methods:{
    },
    components:{
      swiper,
      swiperSlide
    }
  }
</script>

<style scoped>
  #swiper{
    width: 100%;
    position: relative;
  }
  span{
    width: 100%;
  }

  .words{
    width: 100%;
    height: 100px;
    line-height: 100px;
    text-align: center;
    background-color: #f1f1f1;
    box-shadow: 0px 0px 10px #abcdef;
  }

</style>
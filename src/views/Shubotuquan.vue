<template>
  <v-app style="background: var(--accent); padding-top: 64px;">
    <div id="shubotuquan">
      <img src="../assets/yu-bejing.png" class="yu-bejing">
      <img src="../assets/wenlu.png" class="wenlu">
      <div class="container">
        <div class="content">
          <h2>趙孟頫</h2>
          <h1 class="d-inline">書趵突泉詩</h1>
          <h5 class="mb-5">卷 紙本 縱：33.1公分 橫：83.3公分</h5>
          <hr>
          <div class="row">
            <div class="mx-auto col-sm-12 col-md-10 col-lg-6 col-12">
              <p>趙孟頫（1254－1322），字子昂，號松雪道人，為宋宗室，湖州（今浙江吳興）人。宋亡，入仕元，累官至翰林學士承旨，死後，追封魏國公，諡文敏。趵突泉在山東濟南市舊城西門外。趙孟頫服官濟南時，常游憩於此地。趙孟頫詩文書畫樂律無不精善，書法則篆籀分行草書無不冠絕古今。是唐以後書法的集大成者，對當時及後世影響很大。</p>
            </div>
          </div>
          <div class="row">
            <div class="mx-auto col-sm-12 col-md-10 col-lg-6 col-12">
              <p>＜書趵突泉詩＞作於元成宗元貞元年（1295）十二月，為周密作鵲華秋色之頃，最晚不超過大德八年（1304）周密卒年之前，亦即四十二歲到五十一歲間的作品。書法潤秀圓轉，這正是趙氏書風的特色，也是存世趙書中墨跡楷書罕見大字。卷中有「右二題」字句，今僅存其一，可見卷前已佚去。</p>
            </div>
          </div>
        </div>
        <div class="origin-text">
          <h3>書趵突泉詩原文</h3>
          <div class="row flex-wrap">
            <div class="mx-auto col-sm-12 col-md-10 col-lg-6 col-12">
              <p class="mb-16">趵突泉。濼水發源天下無，平地湧出白玉壺。谷虛久恐元氣洩，歲旱不愁東海枯，雲霧潤蒸華不注，波瀾聲震大明湖。時來泉上濯塵土，冰雪滿懷清興孤。右二題皆濟南近郭佳處，公瑾家故齊也，遂為書此。孟頫。</p>
            </div>
          </div>
        </div>
      </div>
      <!-- swiper ------------------------------------ -->
      <swiper class="swiper" style="background: #8c3c31; bottom: -4.6%;" :options="swiperOption">
        <swiper-slide style="height: 100vh;" v-for="(item, i) in items" :key="i">
          <img :src="item.src" height="100%">
        </swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
        <div slot="button-prev"></div>
        <div slot="button-next"></div>
      </swiper>
      <swiper class="swiper" style="position: absolute; bottom: 0;">
      <swiper-slide></swiper-slide>
        <img src="../assets/hongyun.jpg" class="hongyun">
        <img src="../assets/hongyun.jpg" class="hongyun2">
        <div class="swiper-button-prev"></div>
        <div class="swiper-button-next"></div>
      </swiper>
      <!-- ---------------------------------------------- -->
      <MovePosition></MovePosition>
    </div>
  </v-app>
</template>

<script>
import MovePosition from '../components/MovePosition.vue'
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'

export default {
  components: {
    MovePosition,
    Swiper,
    SwiperSlide
  },
  data () {
    return {
      // 輪播圖內容
      items: [
        { src: 'https://theme.npm.edu.tw/selection/att/collection/04001012/17010159.jpg' },
        { src: 'https://theme.npm.edu.tw/selection/att/collection/04001012/17010158.jpg' },
        { src: 'https://theme.npm.edu.tw/selection/att/collection/04001012/17010157.jpg' },
        { src: 'https://theme.npm.edu.tw/selection/att/collection/04001012/17010156.jpg' },
        { src: 'https://theme.npm.edu.tw/selection/att/collection/04001012/17010155.jpg' },
        { src: 'https://theme.npm.edu.tw/selection/att/collection/04001012/17010154.jpg' }
      ],
      swiperOption: {
        pagination: {
          el: '.swiper-pagination',
          type: 'fraction'
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        },
        loop: true
      }
    }
  }
}
</script>

<style lang="scss" scoped>
#shubotuquan {
  text-align: center;
}

.container {
  width: 70%;
  height: 48%;
  display: block;
}

p {
  text-indent: 2.5rem;
  padding: 20px;
}
.yu-bejing {
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  z-index: 0;
}
</style>

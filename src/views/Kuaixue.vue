<template>
  <v-app style="background: var(--accent);">
    <div id="kuaixue" style="margin-top: 64px;">
      <img src="../assets/mudan-beijing.png" class="mudan">
      <img src="../assets/wenlu.png" class="wenlu">
      <div class="container">
        <div class="content">
          <h2 class="ml-16">王羲之</h2>
          <h1 class="d-inline">快雪時晴帖</h1>
          <h5 class="mb-5">冊 紙本 縱：23公分 橫：14.8公分</h5>
          <hr>
          <div class="row">
            <div class="mx-auto col-sm-12 col-md-10 col-lg-6 col-12">
              <p class="pa-5">王羲之（303－361），祖籍山東，出身仕族世家，西晉末隨父南渡，作過右軍將軍，會稽內史，東晉永和年間（345－356）去職，與東土名士盡山水之游。熱衷詩歌，音樂與書法。他學書歷程是由近而古，轉益多師，取資廣博，尤其精研體勢，將秦篆漢隸各種不同的筆法，融於真行草體中，形成最佳體勢，所以唐朝人稱頌他「兼撮眾法，備成一家，為萬世宗師」。</p>
            </div>
          </div>
          <div class="row">
            <div class="mx-auto col-sm-12 col-md-10 col-lg-6 col-12">
                <p class="pa-5">這是一件行楷書短簡，內容是大雪之後向友人問候。明代鑑賞家詹景鳳指出，此蹟筆法圓勁古雅，意態閑逸，對趙孟頫的行書有很深的影響。從用筆來看，此帖多圓鈍的用筆，點畫勾挑都不露鋒，結體平穩勻稱，在優美的姿態之中，流露出質樸內斂的意韻。乾隆皇帝極珍愛此蹟，譽之為「天下無雙，古今鮮對」。乾隆十一年，他將此蹟與王獻之的「中秋帖」，王珣的「伯遠帖」合稱「三希」，寶藏在「三希堂」中。此帖一般認為是唐代精摹本。</p>
              </div>
          </div>
          </div>
        <div class="origin-text">
          <h3>快雪時晴帖原文</h3>
          <div class="row flex-wrap">
            <div class="mx-auto col-sm-12 col-md-10 col-lg-6 col-12">
              <p class="pa-5 pb-16">羲之頓首。快雪時晴。佳想安善。未果為結。力不次。王羲之頓首。山陰張侯。</p>
            </div>
          </div>
        </div>
      </div>
      <!-- swiper ------------------------------------ -->
      <swiper class="swiper" style="background: #8c3c31;" :options="swiperOption">
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
        { src: 'https://theme.npm.edu.tw/selection/att/collection/04001001/17010054.jpg' },
        { src: 'https://theme.npm.edu.tw/selection/att/collection/04001001/17010055.jpg' },
        { src: 'https://theme.npm.edu.tw/selection/att/collection/04001001/17010056.jpg' },
        { src: 'https://theme.npm.edu.tw/selection/att/collection/04001001/17010057.jpg' },
        { src: 'https://theme.npm.edu.tw/selection/att/collection/04001001/17010058.jpg' },
        { src: 'https://theme.npm.edu.tw/selection/att/collection/04001001/17010059.jpg' },
        { src: 'https://theme.npm.edu.tw/selection/att/collection/04001001/17010060.jpg' },
        { src: 'https://theme.npm.edu.tw/selection/att/collection/04001001/17010061.jpg' },
        { src: 'https://theme.npm.edu.tw/selection/att/collection/04001001/17010062.jpg' },
        { src: 'https://theme.npm.edu.tw/selection/att/collection/04001001/17010063.jpg' },
        { src: 'https://theme.npm.edu.tw/selection/att/collection/04001001/17010064.jpg' },
        { src: 'https://theme.npm.edu.tw/selection/att/collection/04001001/17010065.jpg' },
        { src: 'https://theme.npm.edu.tw/selection/att/collection/04001001/17010066.jpg' }
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
#kuaixue {
  text-align: center;
}

.container {
  width: 70%;
  height: 52.5%;
  display: block;
}

p {
  text-indent: 2.5rem;
}

.mudan {
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
}
</style>

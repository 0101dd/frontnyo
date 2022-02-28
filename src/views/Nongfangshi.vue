<template>
  <v-app style="background: var(--accent); padding-top: 64px;">
    <div id="nongfangshi">
      <img src="../assets/laohu-bejing.png" class="laohu-bejing">
      <img src="../assets/wenlu.png" class="wenlu">
      <div class="container">
        <div class="content">
          <h2>趙佶</h2>
          <h1 class="d-inline">穠芳詩帖</h1>
          <h5 class="mb-5">卷 絹本 縱：27.2公分 橫：263.8公分</h5>
          <hr>
          <div class="row">
            <div class="mx-auto col-sm-12 col-md-10 col-lg-6 col-12">
              <p>宋徽宗（1082－1135），姓趙名佶，宋代第八位皇帝，生活奢華，致使成為亡國之君。性好書畫，且稟賦極高，書畫無不精工，並善體物緣情，花鳥畫描繪，刻劃入微，尤為擅長。主導北宋晚期畫院，影響中國繪畫至鉅。宋徽宗書法，自號「瘦金書」。這種書風源自唐代薛稷（649－713）、薛曜（活動於684－704），再上則是同出自褚遂良（596－658）。</p>
            </div>
          </div>
          <div class="row">
            <div class="mx-auto col-sm-12 col-md-10 col-lg-6 col-12">
              <p>瘦金體書，特徵是筆畫細瘦，在轉折處，將藏鋒、露鋒、運轉、提頓等痕跡強化並保留下來，那就成為瘦金書的基本筆畫架構。如寫一橫，起筆處是尖，先斜下，而後橫行，收筆留有一頓點，即是特點之一。結體雖楷，而整體運筆，大都直來直往，飄忽快捷，似行如草。本幅朱絲欄界格，字大近5寸，為傳世所見徽宗書法字跡最大者，行筆於瘦金體中屬剛勁一格。</p>
            </div>
          </div>
        </div>
        <div class="origin-text">
          <h3>穠芳詩帖原文</h3>
          <div class="row flex-wrap">
            <v-spacer></v-spacer>
            <div class="col-sm-12 col-md-10 col-lg-6 col-12">
              <p>穠芳依翠萼，煥爛一庭中。零露霑如醉，殘霞照似融。丹青難下筆，造化獨留功。舞蝶迷香徑，翩翩逐晚風。</p>
            </div>
            <v-spacer></v-spacer>
          </div>
        </div>
        <div class="intro">
            <h3>穠芳詩帖介紹</h3>
          <div class="row">
            <div class="mx-auto col-sm-12 col-md-10 col-lg-6 col-12">
              <p>穠芳詩意境優美，大意為：濃艷的花傍著翠綠的葉，燦燦然開滿庭院。清晨沾了露珠的花朵，嬌羞如醉，黃昏的霞光照得它似乎要融化在晚風中。這樣美的景致畫家也難描繪，因為這是造化的鬼斧神工。但願能做一隻迷失在香徑中的蝶兒，自在地隨晚風翩翩起舞。</p>
            </div>
          </div>
          <div class="row">
            <div class="mx-auto col-sm-12 col-md-10 col-lg-6 col-12">
              <p>這卷大字瘦金書為絹地，瘦硬中不失腴潤之致，豪氣躍然，顯皇家氣象。卷後有陳邦彥觀款：「宣和書畫超軼千古，此卷以畫法作書，脫去筆墨畦逕，行間如幽蘭叢竹，冷冷作風雨聲，真神品也。」</p>
            </div>
          </div>
          <div class="row">
            <div class="mx-auto col-sm-12 col-md-10 col-lg-6 col-12">
              <p>對於這卷大字，蔣勳先生道出了這樣的感慨：我們知道我們在寫毛筆的時候，有一個東西叫鋒。我們從小寫字，父親教我們寫字都說你要藏鋒，寫到結尾的時候要收回來。老子的意思說鋒就是鋒芒，鋒芒是最容易斷的地方，所以中國有一個人情的哲學，就是說你最好不要冒尖，那個尖就是鋒。可是宋徽宗就是出鋒的，他所有的瘦金體，都是把別人不敢放出來的鋒芒，全部鋒芒畢露。我們果然看到了悲劇。可是我也感到說這個文化裡，如果沒有宋徽宗，我們大概也太圓滑了。</p>
            </div>
          </div>
          <div class="row">
            <div class="mx-auto col-sm-12 col-md-10 col-lg-6 col-12">
              <p class="mb-16">我覺得宋徽宗是這個文化裡惟一讓我看到年輕、熱情而敢於走向悲劇的。他是一個真正創造了美的帝王，他其實對自己的生命太清楚，他的那首詩後面說，「舞蝶迷香徑 翩翩逐晚風」，他說在開滿花的那個小路上面，他已經迷了路。他知道已經到了最後，一個皇朝的最沒落的時候。我覺得他最後是一個殉美的態度，他幾乎是用美做了他自己的一個殉亡。</p>
            </div>
          </div>
        </div>
      </div>
      <!-- swiper ------------------------------------ -->
      <swiper class="swiper" style="background: #8c3c31; bottom: -13.3%;" :options="swiperOption">
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
        { src: 'https://theme.npm.edu.tw/selection/att/collection/04001007/17010210.jpg' },
        { src: 'https://theme.npm.edu.tw/selection/att/collection/04001007/17010153.jpg' },
        { src: 'https://theme.npm.edu.tw/selection/att/collection/04001007/17010152.jpg' },
        { src: 'https://theme.npm.edu.tw/selection/att/collection/04001007/17010151.jpg' },
        { src: 'https://theme.npm.edu.tw/selection/att/collection/04001007/17010150.jpg' },
        { src: 'https://theme.npm.edu.tw/selection/att/collection/04001007/17010149.jpg' },
        { src: 'https://theme.npm.edu.tw/selection/att/collection/04001007/17010148.jpg' },
        { src: 'https://theme.npm.edu.tw/selection/att/collection/04001007/17010147.jpg' }
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
#nongfangshi {
  text-align: center;
}

.container {
  width: 70%;
  height: 55%;
  display: block;
}

p {
  text-indent: 2.5rem;
  padding: 20px;
}
.laohu-bejing {
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  z-index: 0;
}
</style>

<template>
  <v-app style="background: var(--accent); padding-top: 64px;">
    <div id="hanshi">
      <img src="../assets/shan2-beijing.png" class="shan2-bejing">
      <img src="../assets/wenlu.png" class="wenlu">
      <div class="container">
        <div class="content">
          <h2>蘇軾</h2>
          <h1 class="d-inline">書黃州寒食詩</h1>
          <h5 class="mb-5">卷 紙本 縱：34.2公分 橫：199.5公分</h5>
          <hr>
          <div class="row">
            <div class="mx-auto col-sm-12 col-md-10 col-lg-6 col-12">
              <p class="pa-5">蘇軾（1036－1101），四川眉山人，字子瞻，號東坡，曾被控以文字訕謗君上，被貶黃州。東坡一生，宦海浮沈，命運偃蹇，於文學藝術卻有不朽之地。〈書黃州寒食詩〉作於元豐五年（1082），書當在此後。詩是東坡自己明顯有悲奮感情的文詞，字裡行間也就隨著文詞不同的情緒波動，有所節奏變化。就行草書言，字形可大可小，較有自由變化，蘇東坡自謂字體「短長肥脊各有態」，在這卷書法裡字體的大小組合，揖讓進退，乃至於如「年、中、葦、紙」諸字，最後一筆直下成一長豎，在布白與行氣以至於整篇的章法形成一特殊行間布白。蘇書為宋代「尚意」書風的代表人物之一。</p>
            </div>
          </div>
          <div class="row">
            <div class="mx-auto col-sm-12 col-md-10 col-lg-6 col-12">
              <p class="pa-5">黃庭堅（1045－1105）於1100年陰曆九月前為此卷作跋，黃庭堅作跋，字形體之大，超過東坡本文寒食詩，雖自謙無佛處稱尊，然實百代爭勝，雙美並具。</p>
            </div>
          </div>
        </div>
        <div class="origin-text">
          <h3>書黃州寒食詩原文</h3>
          <div class="row flex-wrap">
            <div class="mx-auto col-sm-12 col-md-10 col-lg-6 col-12">
              <p class="pa-5">自我來黃州，已過三寒食。年年欲惜春，春去不容惜。今年又苦雨，兩月秋蕭瑟。臥聞海棠花，泥污燕支雪。闇中偷負去，夜半真有力。何殊病少年。子（點去），病起鬚已白。</p>
            </div>
          </div>
        </div>
        <div class="intro">
            <h3>書黃州寒食詩介紹</h3>
          <div class="row">
            <div class="mx-auto col-sm-12 col-md-10 col-lg-6 col-12">
              <p class="pa-5">〈寒食帖〉為傳世三大行書之一，北宋蘇軾手跡。這是他在宋神宗元豐二年（1079年）被貶為黃州團練副使時所書行草，共120字。歷代鑒賞家均對《寒食帖》推崇備至，稱道這是一篇曠世神品。與東晉王羲之〈蘭亭集序〉、唐代顏真卿〈祭侄文稿〉合稱為「天下三大行書」。</p>
            </div>
          </div>
          <div class="row">
            <div class="mx-auto col-sm-12 col-md-10 col-lg-6 col-12">
              <p class="pa-5">詩稿誕生後，幾經轉折，傳到了河南永安縣令張浩之手。由於張浩與「蘇門四學士」之一的黃庭堅相熟識，元符三年（1100年）七月，張浩攜詩稿到四川眉州青神縣謁見黃庭堅。黃庭堅一見詩稿，十分傾倒，又思及當時已遠謫海南的師友，激動之情難以自禁，於是欣然命筆，題跋于詩稿曰：「東坡此詩似李太白，猶恐太白有未到處。此書兼顏魯公、楊少師、李西臺筆意。試使東坡復為之，未必及此。它日東坡或見此書，應笑我于無佛處稱尊也」。黃庭堅論語精當，書法妙絕，氣酣而筆健，嘆為觀止，與蘇詩蘇字並列可謂珠聯壁合。</p>
            </div>
          </div>
          <div class="row">
            <div class="mx-auto col-sm-12 col-md-10 col-lg-6 col-12">
              <p class="pa-5 mb-16">到了近代，〈寒食帖〉的命運多舛。清咸豐十年（1860年）英法聯軍火燒圓明園，〈寒食帖〉險遭焚燬，旋即流落民間，輾轉由日本收藏家菊池惺堂購得。1923年9月，日本東京大地震，菊池家所藏古代名人字畫幾乎被毀一空，當時，菊池惺堂冒著生命危險，從烈火中將〈寒食帖〉搶救出來，一時傳為佳話。第二次世界大戰期間東京屢遭美國空軍轟炸，〈寒食帖〉幸而無恙，實屬萬幸。</p>
            </div>
          </div>
        </div>
      </div>
      <!-- swiper ------------------------------------ -->
      <swiper class="swiper" style="background: #8c3c31; bottom: -7.5%;" :options="swiperOption">
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
        { src: 'https://theme.npm.edu.tw/selection/att/collection/04001005/17010146.jpg' },
        { src: 'https://theme.npm.edu.tw/selection/att/collection/04001005/17010145.jpg' },
        { src: 'https://theme.npm.edu.tw/selection/att/collection/04001005/17010144.jpg' },
        { src: 'https://theme.npm.edu.tw/selection/att/collection/04001005/17010143.jpg' },
        { src: 'https://theme.npm.edu.tw/selection/att/collection/04001005/17010142.jpg' },
        { src: 'https://theme.npm.edu.tw/selection/att/collection/04001005/17010141.jpg' },
        { src: 'https://theme.npm.edu.tw/selection/att/collection/04001005/17010140.jpg' },
        { src: 'https://theme.npm.edu.tw/selection/att/collection/04001005/17010139.jpg' },
        { src: 'https://theme.npm.edu.tw/selection/att/collection/04001005/17010138.jpg' },
        { src: 'https://theme.npm.edu.tw/selection/att/collection/04001005/17010137.jpg' },
        { src: 'https://theme.npm.edu.tw/selection/att/collection/04001005/17010136.jpg' },
        { src: 'https://theme.npm.edu.tw/selection/att/collection/04001005/17010135.jpg' },
        { src: 'https://theme.npm.edu.tw/selection/att/collection/04001005/17010134.jpg' },
        { src: 'https://theme.npm.edu.tw/selection/att/collection/04001005/17009562.jpg' }
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
#hanshi {
  text-align: center;
}

.container {
  width: 70%;
  height: 60%;
  display: block;
}

p {
  text-indent: 2.5rem;
}

.shan2-bejing {
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  z-index: 0;
}
</style>

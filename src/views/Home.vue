<!-- 首頁******************************************************************* -->
<template>
<v-app style="background: white;" >
  <div id="home" class="text-center">
    <div id="router-ink2" style="top: 15%;"></div>
    <div class="banner">
      <div class="container">
        <p id="target" v-split-characters>書法是一種書寫的藝術，書法縱向穿透兩個層面：「使用」與「審美」；橫向跨越文字兩個層面：「文字」、「繪畫」。書法除了是書法家用以創作的主要表現和作品形式，也是一種研究書寫者心理與性格的工具。各地域依其在地歷史與文化發展出自有的書法特色，而書法至今仍廣泛應用於生活與藝術文化等層面。</p>
      </div>
    </div>
    <!-- 影片遮罩  -->
    <video src="../assets/Sequence 02.mp4" autoplay muted></video>
    <!-- 精選字帖-------------------------- -->
    <div class="book">
      <kinesis-container>
        <kinesis-element :strength="30">
          <img src="../assets/shan.png" width="30%" class="shan">
          </kinesis-element>
      </kinesis-container>
      <h1>精選字帖</h1>
          <!-- <img src="https://upload.cc/i1/2022/02/04/HGpIA9.png" class="he" alt="dd"> -->
      <bookswiper></bookswiper>
      <!-- <kinesis-container style="height: 100%;">
        <kinesis-element :strength="600">
          <img src="../assets/tu.png" alt="tu" width="12%"
          class="rabbit">
        </kinesis-element>
      </kinesis-container> -->
    </div>
    <!-- 書法入門-------------------------- -->
        <h1>書法入門</h1>
    <div class="information">
      <div class="container">
        <div class="box1">
            <router-link to="/maobi">
            <v-img
              src="../assets/yazi.jpg"
              width="100%"
            ></v-img>
            </router-link>

            <img src="../assets/bi.png"
              fluid
              style="position: absolute; top: 10px; left: 50px; height: 100%;">
            <div class="box1-text">
              <ul>
                <li>毛筆的種類</li>
                <li>毛筆的挑選</li>
                <li>毛筆的保養</li>
              </ul>
            </div>
          </div>
        <div class="box2">
          <router-link to="/mozhi">
          <v-img
            src="../assets/heye1.jpg"
            width="100%"
          ></v-img>
          </router-link>

          <img src="../assets/mo.png"
            fluid
            style="position: absolute; top: 10px; left: 30px; height: 85%;">
          <div class="box1-text">
            <ul>
              <li>選墨的重點</li>
              <li>墨的淡與濃</li>
              <li>用墨的注意事項</li>
            </ul>
          </div>
        </div>
        <div class="box3">
          <router-link to="/zhi">
          <v-img
            src="../assets/juhua.jpg"
            width="100%"
          ></v-img>
          </router-link>

          <img src="../assets/zhi.png"
            fluid
            style="position: absolute; top: 10px; left: 10px; height: 75%;">
          <div class="box1-text">
            <ul>
              <li>挑紙的要領</li>
              <li>紙的種類</li>
              <li>如何挑選宣紙</li>
            </ul>
          </div>
        </div>
        <div class="box4">
          <router-link to="/xuexi">
          <v-img
            src="../assets/heye2.jpg"
            width="100%"
          ></v-img>
          </router-link>

          <img src="../assets/zitie.png"
            fluid
            style="position: absolute; top: 10px; left: 10px; height: 75%;">
          <div class="box1-text">
            <ul>
              <li>書法的學習方式</li>
              <li>選擇合適的字帖</li>
              <li>正確的臨帖方法</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <!-- 客製專區-------------------------- -->
    <!-- <div class="shop">
      <h1>客製專區</h1>
    </div> -->
    <div class="blank"></div>
    <!-- footer圖片------------------------ -->
    <div class="footer-img">
      <v-img class="cloud1" src="../assets/yun1.png"></v-img>
      <v-img class="cloud2" src="../assets/yun2.png"></v-img>
      <v-img class="cloud3" src="../assets/yun3.png"></v-img>
    </div>
  </div>
</v-app>
</template>

<script>
import bookswiper from '../components/BookSwiper.vue'
import { gsap } from 'gsap'
import Vue from 'vue'
import VueSplitCharacters from 'vue-split-characters'
Vue.use(VueSplitCharacters)

// document.querySelector('video').defaultPlaybackRate = 2
// document.querySelector('video').play()

export default {
  components: {
    bookswiper
  },
  mounted () {
    gsap.set('#target span', {
      position: 'relative',
      display: 'inline-block',
      zIndex: '11'
    })
    gsap.from('#target span', {
      stagger: {
        each: 0.03,
        // delay: 0.1,
        from: 'random'
      },
      repeatDelay: 4,
      delay: 2,
      opacity: 0,
      x: '+=random(-500,500)',
      y: '+=random(-500,500)',
      z: '+=random(-500,500)',
      // repeat: -1,
      duration: 2,
      scale: 'random(-1,2)'
    })
    gsap.to('.cloud1', {
      duration: 25,
      repeat: -1,
      yoyo: false,
      ease: 'none',
      x: '1920px'
    })
    gsap.to('.cloud2', {
      duration: 95,
      repeat: -1,
      yoyo: false,
      ease: 'none',
      x: '900px'
    })
    gsap.to('.cloud3', {
      duration: 90,
      repeat: -1,
      yoyo: false,
      ease: 'slow',
      x: '-1500px'
    })
    // gsap.to('.he', {
    //   duration: 10,
    //   repeat: -1,
    //   ease: 'slow',
    //   x: '-2050px',
    //   y: '-300px'
    // })
  }
}
</script>

<style>
.blank {
  height: 500px;
}

.container {
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

video {
  position: absolute;
  bottom: 1160px;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  mix-blend-mode: screen;
  filter:brightness(1.2)
  /* z-index: -11; */
}

.banner {
  width: 100vw;
  height: 100vh;
  background: url(../assets/shou-ye-banner.png) no-repeat top/100% 100%;
  filter: drop-shadow(0px 4px 7px #3b392cd8);
}

.banner p {
  color: black;
  font-size: 40px;
  font-weight: normal;
  width: 70%;
  text-align: center;
  letter-spacing: 8px;
  line-height: 2.5;
  font-family: 'HanyiSentyTang';
}

.book, .information, .shop  {
  margin-top: 150px;
  height: 800px;
  z-index: 1;
}
/* 精選字帖------------------------------------- */
h1 {
  position: relative;
}

h1::before {
  content: '';
  position: absolute;
  bottom: 20px;
  right: -20px;
  background: url(../assets/circle.png) no-repeat center / cover;
  width: 50px;
  height: 50px;
}

.he {
  position: absolute;
  right: 3%;
  top: 33%;
}

.shan {
  position: absolute;
  left: -50px;
  top: 0px;
}

/* .rabbit {
  position:absolute;
  left: 60px;
  top: 300px;
  transform: rotate(-5deg);
  z-index: 50;
} */

/* 書法入門------------------------------------- */
.information {
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  margin-top: 50px;
  margin-left: 250px;
  height: 500px;
}

.box1,
.box2,
.box3,
.box4 {
  overflow: hidden;
  position: absolute;
  top: 0;
  left: 5%;
  width: 500px;
  height: 350px;
  border-radius: 10px;
  border: 3px solid var(--accent);
  background: white;
  cursor: pointer;
  transition: 1s;
  filter: drop-shadow(5px 5px 10px rgba(0, 0, 0, 0.287));
}

.box1-text {
  position: absolute;
  right: 75px;
  top: 70px;
  font-size: 2rem;
  font-weight: bold;
  font-family: 'HanyiSentyTang';
  color: var(--secondary);
}

.box2 {
  left: 20%;
}

.box3 {
  left: 35%;
}

.box4 {
  left: 50%;
}

.footer-img {
  width: 100vw;
  height: 25%;
  position: absolute;
  bottom: 0;
  /* z-index: 0; */
  background: url(../assets/shoue-ye-footer-beijing.png) no-repeat bottom/100%;
}

.cloud1 {
  position: absolute;
  bottom: 550px;
}

.cloud2 {
  position: absolute;
  bottom: 300px;
  left: 30%;
}

.cloud3 {
  position: absolute;
  bottom: 470px;
  right: 26%;
}
</style>

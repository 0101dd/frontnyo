<!-- 首頁******************************************************************* -->
<template>
<v-app style="background: white;">
  <div class="banner">
    <div class="container">
      <p id="target" v-split-characters>書法是一種書寫的藝術，書法縱向穿透兩個層面：「使用」與「審美」；橫向跨越文字兩個層面：「文字」、「繪畫」。書法除了是書法家用以創作的主要表現和作品形式，也是一種研究書寫者心理與性格的工具。各地域依其在地歷史與文化發展出自有的書法特色，而書法至今仍廣泛應用於生活與藝術文化等層面。</p>
    </div>
  </div>
  <!-- 影片遮罩 -->
  <!-- <video src="../assets/Ink Drop 2.mp4" autoplay muted loop></video> -->
  <!-- 精選字帖-------------------------- -->
  <div class="book">
    <h1>精選字帖</h1>
  </div>
  <!-- 書法入門-------------------------- -->
  <div class="information">
    <h1>書法入門</h1>
  </div>
  <!-- 客製專區-------------------------- -->
  <div class="shop">
    <h1>客製專區</h1>
  </div>
  <div class="blank"></div>
  <!-- footer圖片------------------------ -->
  <div class="footer-img">
    <v-img class="cloud1" src="../assets/yun1.png"></v-img>
    <v-img class="cloud2" src="../assets/yun2.png"></v-img>
    <v-img class="cloud3" src="../assets/yun3.png"></v-img>
  </div>
</v-app>
</template>

<script>
import { gsap } from 'gsap'
import Vue from 'vue'
import VueSplitCharacters from 'vue-split-characters'
Vue.use(VueSplitCharacters)

export default {
  mounted () {
    gsap.set('#target span', {
      position: 'relative',
      display: 'inline-block',
      zIndex: '11'
    })
    gsap.from('#target span', {
      stagger: {
        each: 0.05,
        delay: 0.1,
        repeatDelay: 5,
        from: 'random'
      },
      opacity: 0,
      x: '+=random(-500,500)',
      y: '+=random(-500,500)',
      z: '+=random(-500,500)',
      repeat: -1,
      duration: 2.5,
      scale: 'random(-1,2)',
      yoyo: true
    })
    gsap.from('.cloud1', {
      duration: 15,
      repeat: -1,
      yoyo: true,
      ease: 'none',
      x: '600px'
    })
    gsap.to('.cloud2', {
      duration: 25,
      repeat: -1,
      yoyo: true,
      ease: 'none',
      x: '50%'
    })
    gsap.from('.cloud3', {
      duration: 50,
      repeat: -1,
      yoyo: true,
      ease: 'slow',
      x: '70%'
    })
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
  filter:grayscale(1);
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
  height: 500px;
  z-index: 1;
}

.footer-img {
  width: 100vw;
  height: 100%;
  position: absolute;
  bottom: 0;
  z-index: 0;
  background: url(../assets/shoue-ye-footer-beijing.png) no-repeat bottom/100%;
}

.cloud1 {
  position: absolute;
  bottom: 350px;
}

.cloud2 {
  position: absolute;
  bottom: 200px;
  left: 30%;
}

.cloud3 {
  position: absolute;
  bottom: 570px;
  right: 26%;
}
</style>

<template>
  <v-app style="background: var(--accent); padding-top: 64px;">
    <div id="huaqi">
      <img src="../assets/meihua-beijing.png" class="meihua-bejing">
      <img src="../assets/wenlu.png" class="wenlu">
      <div class="container">
        <div class="content">
          <h2>黃庭堅</h2>
          <h1 class="d-inline">花氣熏人帖</h1>
          <h5 class="mb-5">冊 紙本 縱：30.7公分 橫：43.2公分 宋四家墨寶冊第九幅</h5>
          <hr>
          <div class="row">
            <div class="mx-auto col-sm-12 col-md-10 col-lg-6 col-12">
              <p class="pa-5">黃庭堅（1045－1105）字魯直，號涪翁，江西分寧人。二十三歲中進士，歷官山西太和知縣，校書郎，著作佐郎，起居舍人，鄂州、涪州、戎州、宜州等知州。與張耒、晁補之、秦觀同游蘇軾門，世稱「蘇門四學士」，尤長於詩，與蘇軾齊名。書法淵源多種，主要受顏真卿、蘇軾和南朝刻石＜瘞鶴銘＞影響，紹聖元年（1094）貶黔中，見懷素草書＜自敘帖＞，受到很多啟發，用筆趨於圓勁，多連綿草勢。</p>
            </div>
          </div>
          <div class="row">
            <div class="mx-auto col-sm-12 col-md-10 col-lg-6 col-12">
            <p class="pa-5">這件書蹟無款印，原是附在元祐二年（1087），寄揚州友人王鞏二詩之後，今已單獨成一帖。前面原有識語，說：「王晉卿（詵）數送詩來索和，老嬾不喜作，此曹狡猾，又頻送花來促詩，戲答。」可知原詩是為王詵作的。用筆剛強挺健，墨色有濃潤枯澀的變化，是一件難得的小品。</p>
          </div>
        </div>
      </div>
        <div class="origin-text">
          <h3>花氣熏人帖原文</h3>
          <div class="row flex-wrap">
            <div class="mx-auto col-12 col-lg-6">
              <p class="pa-5">花氣薰人欲破禪，心情其實過中年。春來詩思何所似，八節灘頭上水船。</p>
            </div>
          </div>
        </div>
        <div class="intro">
          <h3>花氣熏人帖介紹</h3>
          <div class="row">
            <div class="mx-auto col-sm-12 col-md-10 col-lg-6 col-12">
              <p class="pa-5">"花氣薰人"是黃庭堅的小品之作，一首28個字的小詩，以隨意自在的筆法寫來，非常爛漫天真，在黃庭堅講求結構的書法中也是不可多見的好作品。「花氣薰人慾破禪，心情其實過中年，春來詩思何所似，八節灘頭上水船。」「花朵開放時的香氣薰來，仿佛使平日修行禪定的功夫都被破除了，過了中年竟然還有這樣為花感動的心情，到了春天，有著寫詩的念頭，卻又像一層一層逆水的灘頭，船要上行，何其艱難啊!」作者為了傳達自己對年齡、歲月、春天、生命創作許多複雜的經驗，寫了這首詩，也用最自然的方式來書寫，把黃庭堅平日嚴謹的中鋒線和草書中的宛轉結合起來，構成一幅完美的小品，是欣賞書法不可多得的佳作。作品上有南宋「緝熙殿寶」的印，入過南宋內府。也有清代朝鮮人安儀周的收藏印安歧(安儀周)是當時最著名的大收藏家。</p>
            </div>
          </div>
          <div class="row">
            <div class="mx-auto col-sm-12 col-md-10 col-lg-6 col-12">
              <p class="pa-5">此帖筆勢蒼勁，拙勝於巧，肥筆有骨，瘦筆有肉，「變態縱橫，勁若飛動」。其美韻不亞於行楷書。「山谷書法，晚年大得藏真（懷素）三昧，此筆力恍惚，出神入鬼，謂之'草聖'宜焉！」（草書《李白憶舊遊詩卷》沈周題跋）此時黃庭堅的草書藝術已達到爐火純青的地步。此時草書書法，深得張旭，懷素草書飛動灑脫的神韻，而又有自己的風格。用筆緊峭，瘦勁奇崛，氣勢雄健，結體變化多端。</p>
            </div>
          </div>
        </div>
      </div>
      <div class="bg">
      <img
        src="https://theme.npm.edu.tw/selection/att/collection/04001006/%E5%9B%9B-1.jpg"
        style="height: 100vh;"
      >
      <img src="../assets/hongyun.jpg" class="hongyun">
        <img src="../assets/hongyun.jpg" class="hongyun2">
        <div class="swiper-button-prev"></div>
        <div class="swiper-button-next"></div>
      </div>
      <MovePosition></MovePosition>
    </div>
  </v-app>
</template>

<script>
import MovePosition from '../components/MovePosition.vue'

export default {
  components: {
    MovePosition
  }
}
</script>

<style lang="scss" scoped>
#huaqi {
  text-align: center;
}

.container {
  width: 70%;
  height: 65%;
  display: block;
}

p {
  text-indent: 2.5rem;
}
.bg {
  // background: linear-gradient(-165deg, var(--accent) 2%, var(--primary) 70%);
  background: #665b44;
  width: 100vw;
  height: 100vh;
  position: relative;
  z-index: 1;
}
.meihua-bejing {
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  z-index: 0;
}
</style>

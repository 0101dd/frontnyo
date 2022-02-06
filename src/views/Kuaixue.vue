<template>
  <v-app style="background: var(--accent);">
    <div id="kuaixue">
      <v-carousel height="100vh">
        <v-carousel-item v-for="(item, i) in items" :key="i" :src="item.src" height="100%"></v-carousel-item>
      </v-carousel>
      <div class="container">
        <div class="content">
          <h3>晉 西元265-420</h3>
          <h2>王羲之</h2>
          <h1>快雪時晴帖</h1>
          <h5>冊 紙本 縱：23公分 橫：14.8公分</h5>
          <div class="row">
            <div class="col-sm-6 col-12">
              <p>王羲之（303－361），祖籍山東，出身仕族世家，西晉末隨父南渡，作過右軍將軍，會稽內史，東晉永和年間（345－356）去職，與東土名士盡山水之游。熱衷詩歌，音樂與書法。他學書歷程是由近而古，轉益多師，取資廣博，尤其精研體勢，將秦篆漢隸各種不同的筆法，融於真行草體中，形成最佳體勢，所以唐朝人稱頌他「兼撮眾法，備成一家，為萬世宗師」。</p>
            </div>
            <div class="col-sm-6 col-12">
              <p>這是一件行楷書短簡，內容是大雪之後向友人問候。明代鑑賞家詹景鳳指出，此蹟筆法圓勁古雅，意態閑逸，對趙孟頫的行書有很深的影響。從用筆來看，此帖多圓鈍的用筆，點畫勾挑都不露鋒，結體平穩勻稱，在優美的姿態之中，流露出質樸內斂的意韻。乾隆皇帝極珍愛此蹟，譽之為「天下無雙，古今鮮對」。乾隆十一年，他將此蹟與王獻之的「中秋帖」，王珣的「伯遠帖」合稱「三希」，寶藏在「三希堂」中。此帖一般認為是唐代精摹本。</p>
            </div>
          </div>
        </div>
        <div class="origin-text">
          <h3>快雪時晴帖原文</h3>
          <div class="row flex-wrap">
            <v-spacer></v-spacer>
            <div class="col-sm-8 col-12">
              <p>羲之頓首。快雪時晴。佳想安善。未果為結。力不次。王羲之頓首。山陰張侯。</p>
            </div>
            <v-spacer></v-spacer>
          </div>
        </div>
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
      ]
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
  height: 50%;
  display: block;
}

p {
  text-indent: 2.5rem;
}
</style>

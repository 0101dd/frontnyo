<template>
  <v-app style="background: var(--accent);">
    <div id="qianziwen">
      <v-carousel height="100vh">
        <v-carousel-item v-for="(item, i) in items" :key="i" :src="item.src" height="100%" width="100vw"></v-carousel-item>
      </v-carousel>
      <div class="container">
        <div class="content">
          <h3>元 西元1279-1368</h3>
          <h2>趙孟頫</h2>
          <h1>書趵突泉詩</h1>
          <h5>卷 紙本 縱：33.1公分 橫：83.3公分</h5>
          <div class="row">
            <div class="col">
              <p>趙孟頫（1254－1322），字子昂，號松雪道人，為宋宗室，湖州（今浙江吳興）人。宋亡，入仕元，累官至翰林學士承旨，死後，追封魏國公，諡文敏。趵突泉在山東濟南市舊城西門外。趙孟頫服官濟南時，常游憩於此地。趙孟頫詩文書畫樂律無不精善，書法則篆籀分行草書無不冠絕古今。是唐以後書法的集大成者，對當時及後世影響很大。</p>
            </div>
            <div class="col">
              <p>＜書趵突泉詩＞作於元成宗元貞元年（1295）十二月，為周密作鵲華秋色之頃，最晚不超過大德八年（1304）周密卒年之前，亦即四十二歲到五十一歲間的作品。書法潤秀圓轉，這正是趙氏書風的特色，也是存世趙書中墨跡楷書罕見大字。卷中有「右二題」字句，今僅存其一，可見卷前已佚去。</p>
            </div>
          </div>
        </div>
        <div class="origin-text">
          <h3>書趵突泉詩原文</h3>
          <div class="row flex-wrap">
            <v-spacer></v-spacer>
            <div class="col-8">
              <p>趵突泉。濼水發源天下無，平地湧出白玉壺。谷虛久恐元氣洩，歲旱不愁東海枯，雲霧潤蒸華不注，波瀾聲震大明湖。時來泉上濯塵土，冰雪滿懷清興孤。右二題皆濟南近郭佳處，公瑾家故齊也，遂為書此。孟頫。</p>
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
        { src: 'https://theme.npm.edu.tw/selection/att/collection/04001012/17010159.jpg' },
        { src: 'https://theme.npm.edu.tw/selection/att/collection/04001012/17010158.jpg' },
        { src: 'https://theme.npm.edu.tw/selection/att/collection/04001012/17010157.jpg' },
        { src: 'https://theme.npm.edu.tw/selection/att/collection/04001012/17010156.jpg' },
        { src: 'https://theme.npm.edu.tw/selection/att/collection/04001012/17010155.jpg' },
        { src: 'https://theme.npm.edu.tw/selection/att/collection/04001012/17010154.jpg' }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
#qianziwen {
  text-align: center;
}

.container {
  width: 70%;
  // height: 50%;
  display: block;
}

p {
  text-indent: 2.5rem;
}
</style>

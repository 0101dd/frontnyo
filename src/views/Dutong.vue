<template>
  <v-app style="background: var(--accent); padding-top: 64px;">
    <div id="dutong">
      <img src="../assets/shan-bejing.png" class="shan-bejing">
      <img src="../assets/wenlu.png" class="wenlu">
      <div class="container">
        <div class="content">
          <h2>張旭</h2>
          <h1 class="d-inline">肚痛帖</h1>
          <h5 class="mb-5">縱：41公分 橫：34公分</h5>
          <hr>
          <div class="row">
            <div class="mx-auto col-sm-12 col-md-10 col-lg-6 col-12">
              <p class="pa-5">張旭（675—約750）是唐代著名的書法家，以草書著稱，被稱為「草聖」。他與懷素和尚齊名，並稱為「顛張狂素」。相傳唐文宗曾發出一道詔書，稱張旭的草書、李白的詩歌和裴旻的劍舞為天下的「三絕」。張旭性格豪放，喜好飲酒，不拘小節。杜甫在《飲中八仙歌》中，將其與李白、賀知章等人共列為飲中八仙。「張旭三杯草聖傳，脫帽露頂王公前，揮毫落紙如雲煙。」描寫了張旭飲酒後，在王公面前脫帽露頂、揮毫作書的場景。</p>
            </div>
          </div>
          <div class="row">
            <div class="mx-auto col-sm-12 col-md-10 col-lg-6 col-12">
              <p class="pa-5">張旭的書法初學張芝、王羲之、王獻之，又融入自己的風格，創造出瀟灑磊落、變化莫測的狂草。然而在癲狂中，仍然有著規範的章法。他的狂草非常自由，但又是可以辨讀的，並沒有失去章法而淪為抽象的繪畫。這種以自然天性為追求的創作風格，開創了浪漫主義書風，符合當時時代的審美趨向。他的草書作品有很多，如《古詩四帖》《草書心經》《郎官石柱記》等，而最有名的，當數《肚痛帖》。</p>
            </div>
          </div>
        </div>
        <div class="origin-text">
          <h3>肚痛帖原文</h3>
          <div class="row flex-wrap">
            <div class="mx-auto col-6">
              <p>忽肚痛不可堪，不知是冷熱所致，欲服大黃湯，冷熱俱有益。如何為計，非臨床。</p>
            </div>
          </div>
        </div>
        <div class="intro">
          <h3>肚痛帖介紹</h3>
          <div class="row">
            <div class="mx-auto col-sm-12 col-md-10 col-lg-6 col-12">
              <p class="pa-5">《肚痛帖》的真跡早已失傳，如今我們看到的是明代重刻的，存於西安碑林。全帖共6行30字。內容為：「忽肚痛不可堪，不知是冷熱所致，欲服大黃湯，冷熱俱有益。如何為計，非臨床。」看上去，是張旭肚子痛時給自己寫的一封診書。書帖的前三個字還比較規整，字與字並不相連，而從第四字開始，不知是不是因為作者肚子越來越痛，他越寫越快，字也越來越癲狂，縱橫豪放，顛味十足。這幅書法將草書的表現力發揮到了極致，在作者奮筆疾書的狂草中，我們似乎也感受到了泰山壓頂的氣概和張揚恣肆的宣洩。</p>
            </div>
          </div>
          <div class="row">
            <div class="mx-auto col-sm-12 col-md-10 col-lg-6 col-12">
              <p class="pa-5 mb-16">《肚痛帖》是張旭的代表作，是狂放大膽書風的代表。字如飛瀑奔瀉，時而濃墨粗筆，沉穩遒邁，時而細筆如絲，連綿直下，氣勢連貫，渾若天成。在粗與細、輕與重、虛與實、斷與連、疏與密、開與合、狂與正之間迴環往復，將諸多矛盾不可思議地合而為一，表現出如此的合諧一致，展現出一幅氣韻生動、生機勃勃、波瀾壯闊的藝術畫卷，天馬行空的胸襟與氣質，無處不體現作者創作時的藝術衝動和無拘無束。明王世貞跋：“張長史冊痛帖》及千文數行，出鬼入神，惝怳不可測。”清張廷濟《清儀閣題跋》雲：“顛、素俱善草書，顛以《肚痛帖》為最，素以《聖母帖》為最。”</p>
            </div>
          </div>
        </div>
      </div>
      <div class="bg">
        <img
          src="https://upload.cc/i1/2022/01/31/W0dz6D.jpg"
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
#dutong {
  text-align: center;
}

.container {
  width: 70%;
  height: 67%;
  display: block;
}

p {
  text-indent: 2.5rem;
}

.bg {
  // background: linear-gradient(-165deg, var(--accent) 2%, var(--primary) 70%);
  background: var(--accent);
  width: 100vw;
  height: 100vh;
  position: relative;
  z-index: 1;
}
.shan-bejing {
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  z-index: 0;
}
</style>

<template>
<v-app>
  <!-- <RouterTransition></RouterTransition> -->
  <div id="store">
    <div id="router-ink"></div>
    <v-container>
      <div class="row flex-wrap">
        <div class="col-12 col-sm-12 col-lg-6 d-flex" v-for="(item, i) in items" :key="i">
          <v-card class="d-sm-flex pa-5"
          elevation="5"
          style="background: var(--accent);">
            <iframe
              :src="item.iframe"
              width="300"
              height="300"
              style="border:0; margin-top: 10px;"
              loading="lazy">
            </iframe>
            <div class="card-text" style="width: 300px; margin-left: 30px;">
              <p class="store">{{ item.store }}</p>
              <p><span>地址：</span> {{ item.address }}</p>
              <p><span>電話：</span>{{ item.phone }}</p>
              <p><span>營業時間：</span></p>
              <p><span>星期一~五：</span>{{ item.workday }}</p>
              <p><span>星期六：</span>{{ item.week }}</p>
              <p><span>星期日：</span>{{ item.week2 }}</p>
              <a :href="item.src">詳細資訊</a>
            </div>
          </v-card>
        </div>
      </div>
    </v-container>
  </div>
</v-app>
</template>

<script>
// import RouterTransition from '../components/RouterTransition.vue'

export default {
  // components: {
  //   RouterTransition
  // },
  data () {
    return {
      items: [
        { store: '蕙風堂（大安區）', address: '106台北市大安區和平東路一段123號', phone: '02 2321 1380', iframe: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3615.210826509373!2d121.52521851497913!3d25.026918383975616!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3442a98503497edf%3A0x32afec8b74701a28!2zMTA25Y-w5YyX5biC5aSn5a6J5Y2A5ZKM5bmz5p2x6Lev5LiA5q61MTIz6Jmf!5e0!3m2!1szh-TW!2stw!4v1643877107938!5m2!1szh-TW!2stw', src: 'https://www.topline88.com/', workday: '10:30 ~ 21:00', week: '10:00 ~ 19:00', week2: '10:00 ~ 19:00' },
        { store: '蕙風堂（和平店）', address: '106台北市大安區和平東路一段77號', phone: '02 2351 1853', iframe: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3615.205308846589!2d121.52294535054276!3d25.027105683896863!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3442a99ad18f8ce9%3A0x88c31c673f5dba87!2zMTA25Y-w5YyX5biC5aSn5a6J5Y2A5ZKM5bmz5p2x6Lev5LiA5q61NzctMuiZnw!5e0!3m2!1szh-TW!2stw!4v1643889818197!5m2!1szh-TW!2stw', src: 'https://www.topline88.com/', workday: '10:00 ~ 18:30', week: '10:00 ~ 18:30', week2: '10:00 ~ 18:30' },
        { store: '正大光明筆墨紙硯專家 師大店', address: '100台北市中正區師大路169號', phone: '02 2363 1169', iframe: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3615.3934738820544!2d121.52479255054276!3d25.020717583899973!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3442a98e3f80cf91%3A0x24cfd20322a9309c!2zMTAw5Y-w5YyX5biC5Lit5q2j5Y2A5bir5aSn6LevMTY56Jmf!5e0!3m2!1szh-TW!2stw!4v1643890117399!5m2!1szh-TW!2stw', src: 'https://ctkm.com.tw/h/index?key=tbxdm', workday: '10:00 ~ 19:00', week: '10:00 ~ 18:00', week2: '公休' },
        { store: '小書齋筆墨莊', address: '100台北市中正區重慶南路一段11號', phone: '02 2361 4231', iframe: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3614.6426666805983!2d121.51122595054325!3d25.046197983887957!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3442a90cd8243607%3A0x14902a8f8004ed2f!2zMTAw5Y-w5YyX5biC5Lit5q2j5Y2A6YeN5oW25Y2X6Lev5LiA5q61MTHomZ8!5e0!3m2!1szh-TW!2stw!4v1643890436604!5m2!1szh-TW!2stw', src: 'https://stationery-store-1283.business.site/?utm_source=gmb&utm_medium=referral', workday: '10:00 ~ 21:00', week: '10:00 ~ 21:00', week2: '10:00 ~ 21:00' }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
#store {
  background:
  url('https://theme.npm.edu.tw/selection/att/collection/04009135/17010458.jpg') no-repeat center/cover;
}

.container {
  width: 70vw;
}

p {
  padding: 0;
  margin: 0;
  span {
    color: var(--primary);
    font-weight: bold;
  }
}

h1 {
  position: absolute;
  top: 30%;
  left: 50%;
  transform: translate(-50%, -30%);
  &::before {
    content: '';
    position: absolute;
    width: 112%;
    height: 45%;
    left: -5%;
    bottom: 18%;
    background: var(--info);
    // background: linear-gradient(#ded7b94f, #ded7b94f);
    // filter: blur(20px);
    z-index: -1;
  }
}

.list {
  width: 65%;
}

.store {
  font-size: 1.1rem;
  font-weight: bolder;
  color: var(--info);
}

a {
  color: var(--accent);
  background: var(--primary);
  width: 100px;
  height: 40px;
  border-radius: 30px;
  line-height: 40px;
  text-align: center;
  position: absolute;
  right: 20px;
  bottom: 20px;
  transition: 0.5s;
  &:hover {
    color: var(--primary);
    background: transparent;
    border: 1px solid var(--primary);
    transition: 0.5s;
  }
}

.btn-url {
  position: absolute;
  bottom: 20px;
  right: 20px;
}

</style>

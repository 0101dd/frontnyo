<!-- 字帖******************************************************************* -->
<template>
<v-app style="background: var(--accent);">
    <div id="router-ink"></div>
  <div id="book">
    <v-container>
      <div class="row">
        <div
          class="col"
          v-for="card in cards"
          :key="card.title"
        >
          <v-card
            max-width="300"
            class="elevation-5"
          >
        <router-link :to="card.page">
        <v-img
          :src="card.src"
          width="100%"
          fluid
        ></v-img></router-link>
        <v-card-text>
          <p>{{ card.title }} &emsp; {{ card.author }}</p>
        </v-card-text>
        <v-card-actions>
          <v-btn icon class="btn">
            <v-icon>mdi-bookmark</v-icon>
          </v-btn>
        </v-card-actions>
      </v-card>
        </div>
      </div>
    </v-container>
  </div>
</v-app>

</template>

<script>
export default {
  data () {
    return {
      cards: [
        { title: '書譜', author: '孫過庭', src: 'https://upload.cc/i1/2022/01/29/PvboRT.jpg', page: '/shupu' },
        { title: '自序帖', author: '懷素', src: 'https://upload.cc/i1/2022/01/29/sdvpf5.jpg', page: '/zixutie' },
        { title: '快雪時晴帖', author: '王羲之', src: 'https://theme.npm.edu.tw/selection/att/collection/04001001/17010057.jpg', page: '/kuaixue' },
        { title: '肚痛帖', author: '張旭', src: 'https://upload.cc/i1/2022/01/31/W0dz6D.jpg', page: '/dutong' },
        { title: '七言詩（花氣薰人帖）', author: '黃庭堅', src: 'https://theme.npm.edu.tw/selection/att/collection/04001006/%E5%9B%9B-1.jpg', page: '/huaqi' },
        { title: '黃州寒食帖', author: '蘇軾', src: 'https://theme.npm.edu.tw/selection/att/collection/04001005/17010135.jpg', page: '/hanshi' },
        { title: '穠芳詩帖', author: '趙佶', src: 'https://theme.npm.edu.tw/selection/att/collection/04001007/17010210.jpg', page: '/nongfangshi' },
        { title: '真草千字文', author: '智永', src: 'https://upload.cc/i1/2022/01/31/xbaG78.jpg', page: '/qianziwen' }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.container {
  width: 70vw;
}
.btn {
  position: absolute;
  right: 0;
  bottom: 10px;
}

.v-card__actions {
  padding: 0;
}
</style>

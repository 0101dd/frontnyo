<template>
  <v-app>
    <v-app-bar
    absolute
    elevate-on-scroll
    color="transparent"
    style="width: 100vw;"
    class="d-flex justify-end">
    <router-link to="/"><v-img src="./assets/logo.png" max-height="50" max-width="50" class="pt-5" style="cursor: pointer;">
    </v-img></router-link>
      <ul>
        <li><router-link to="/book">精選字帖</router-link></li>
        <li><a href="#">書法入門</a></li>
        <li><a href="#">作品專區</a></li>
        <li><a href="#">常見問題</a></li>
        <li><a href="#">客製專區</a></li>
        <li><a href="#">店家資訊</a></li>
      </ul>
      <v-btn icon class="mx-5">
        <v-icon
          large
          color="primary"
        >mdi-account-circle-outline</v-icon>
      </v-btn>
    </v-app-bar>
        <v-main>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>
export default {
  data () {
    return {
    }
  }
}
</script>

<style lang="scss" scoped>

ul {
  li {
    display: inline;
    padding: 0 10px;
    a {
      text-decoration: none;
      font-weight: bolder;
      letter-spacing: 2.5px;
      position: relative;
      &::before {
        content: "";
        width: 0px;
        height: 4px;
        position: absolute;
        bottom: -8px;
        left: -4px;
        background: var(--info);
        opacity: 0;
        transition: 0.5s;
      }
      &:hover::before {
        opacity: 1;
        width: 80px;
        transition: 0.5s;
      }
      &:hover {
        bottom: 4px;
      }
    }
  }
}
</style>

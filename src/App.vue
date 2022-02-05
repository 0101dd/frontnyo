<template>
  <v-app>
    <v-app-bar
    fixed
    elevate-on-scroll
    color="transparent"
    style="width: 100vw;"
    class="d-flex justify-end">
    <!-- <router-link to="/"><v-img src="./assets/logo.png" max-height="50" max-width="50" class="pt-5" style="cursor: pointer;">
    </v-img></router-link> -->
      <ul>
        <li><router-link to="/book">精選字帖</router-link></li>
        <v-menu
          open-on-hover
          bottom
          transition="slide-y-transition"
          offset-y
          close-delay="200"
        >
        <template v-slot:activator="{ on, attrs }">
          <li v-bind="attrs" v-on="on"><a href="#">書法入門</a></li>
        </template>
        <v-list>
          <v-list-item class="d-flex flex-column">
            <v-list-item-content>
            <v-list-item-title><router-link to="/maobi">毛筆介紹</router-link></v-list-item-title>
            </v-list-item-content>
            <v-list-item-content>
            <v-list-item-title><router-link to="/mozhi">墨汁介紹</router-link></v-list-item-title>
            </v-list-item-content>
            <v-list-item-content>
            <v-list-item-title><router-link to="/zhi">紙類介紹</router-link></v-list-item-title>
            </v-list-item-content>
            <v-list-item-content>
            <v-list-item-title><router-link to="/xuexi">學習方法</router-link></v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>
        </v-menu>
        <li><a href="#">作品專區</a></li>
        <li><router-link to="/question">常見問題</router-link></li>
        <li><a href="#">客製專區</a></li>
        <li><a href="#"><router-link to="/store">店家資訊</router-link></a></li>
      </ul>
      <v-menu
        open-on-hover
        bottom
        offset-y
        transition="slide-y-transition"
        close-delay="200"
        class="account"
      >
      <template v-slot:activator="{ on, attrs }">
        <v-icon
          class="mx-7 account-outline"
          large
          color="primary"
           v-bind="attrs" v-on="on"
        >mdi-account-circle-outline</v-icon>
      </template>
      <v-list>
          <v-list-item class="d-flex flex-column">
            <v-list-item-content>
            <v-list-item to="/dashboard/pro">會員主頁</v-list-item>
            </v-list-item-content>
            <v-list-item-content>
            <v-list-item to="/login">登入</v-list-item>
            </v-list-item-content>
            <v-list-item-content>
            <v-list-item to="/register">註冊</v-list-item>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-menu>
      <router-link to="/"><v-img src="./assets/logo.png" max-height="50" max-width="50" class="pt-5" style="cursor: pointer; position: absolute; left: -40%; top: 10px;">
    </v-img></router-link>
    </v-app-bar>
      <v-main>
        <transition name="animation">
          <router-view
          >
          </router-view>
        </transition>
            <!-- <vue-page-transition> -->
        <!-- </vue-page-transition> -->
      </v-main>
    <!-- footer---------------------- -->
    <v-footer
      padless
    >
      <v-card
      class="flex"
      flat
      tile
      >
      <v-card-title>
        <strong class="subheading">Get connected with us on social networks!</strong>

        <v-spacer></v-spacer>

        <v-btn
          v-for="icon in icons"
          :key="icon"
          class="mx-4"
          dark
          icon
        >
          <v-icon size="24px">
            {{ icon }}
          </v-icon>
        </v-btn>
      </v-card-title>

      <v-card-text class="py-2 text-center white--text">
        {{ new Date().getFullYear() }} / {{ new Date().getMonth() + 1}} — <strong>dd0101</strong>
      </v-card-text>
    </v-card>
    </v-footer>
  </v-app>
</template>

<script>

export default {

  data () {
    return {
      icons: [
        'mdi-facebook',
        'mdi-twitter',
        'mdi-linkedin',
        'mdi-instagram'
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
// .animation-enter-active {
//   animation: thisOne 1.2s steps(24);
// }

.router {
  position: absolute;
  left: 0;
  top: 0;
}

@keyframes thisOne {
  0% {
    -webkit-transform: translateY(-50%) translateX(-2%);
    -moz-transform: translateY(-50%) translateX(-2%);
    -ms-transform: translateY(-50%) translateX(-2%);
    -o-transform: translateY(-50%) translateX(-2%);
    transform: translateY(-50%) translateX(-2%);
  }
  50% {
    -webkit-transform: translateY(-50%) translateX(-98%);
    -moz-transform: translateY(-50%) translateX(-98%);
    -ms-transform: translateY(-50%) translateX(-98%);
    -o-transform: translateY(-50%) translateX(-98%);
    transform: translateY(-50%) translateX(-98%);
  }
  100% {
    -webkit-transform: translateY(-50%) translateX(-2%);
    -moz-transform: translateY(-50%) translateX(-2%);
    -ms-transform: translateY(-50%) translateX(-2%);
    -o-transform: translateY(-50%) translateX(-2%);
    transform: translateY(-50%) translateX(-2%);
  }
}

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

.v-card__title {
  color: white;
  background: var(--secondary);
}

.v-card__text {
  color: white;
  background: var(--primary);
}

.v-menu__content {
  min-width: 94px;
  top: 55px !important;
  // left: 1329px !important;
  transform-origin: left top;
  z-index: 8;
  .v-list {
      background-color: #ffffff60;
      .v-list-item__title {
        color: black;
        cursor: pointer;
        &:hover {
          color: var(--primary);
        }
      }
  }
}

.account-outline {
  cursor: pointer;
  &:hover {
    transition: 0.5s;
    transform: translateY(-4px);
  }
}

.v-list-item {
  min-height: 0px
}
</style>

<template>
  <v-app>
    <v-app-bar
    fixed
    elevation="2"
    color="#c4a66f"
    style="width: 100vw;"
    class="app-bar d-flex justify- space-between">
    <router-link to="/"><v-img src="./assets/logo.png" max-height="50" max-width="50" class="pt-5" style="cursor: pointer;">
    </v-img></router-link>
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
        <li><router-link to="/store">店家資訊</router-link></li>
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
      <v-list flat>
          <v-list-item class="d-flex flex-column">
            <v-list-item-content>
            <v-list-item :ripple="false" to="/dashboard/pro">會員主頁</v-list-item>
            </v-list-item-content>
            <v-list-item-content>
            <v-list-item :ripple="false" to="/login">登入</v-list-item>
            </v-list-item-content>
            <v-list-item-content>
            <v-list-item :ripple="false" to="/register">註冊</v-list-item>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-menu>
      <!-- <router-link to="/"><v-img src="./assets/logo.png" max-height="50" max-width="50" class="pt-5" style="cursor: pointer; position: absolute; left: -40%; top: 10px;">
    </v-img></router-link> -->
    </v-app-bar>
    <!-- --------------------------------------------------------- -->
    <div id="menu-sm" style="position: relative;">
        <v-btn
          color="secondary"
          dark
          icon
          large
          @click="sheet = !sheet"
          style="position: fixed; left: 520px; top: 800px; z-index: 111;"
        >
        <v-icon>mdi-menu</v-icon>
        </v-btn>
       <v-bottom-sheet v-model="sheet">
       <v-sheet
        class="text-center"
        height="67vh"
        color="accent"
       >
        <v-list flat style="background: var(--accent); padding: 50px 0 0 50px;">
        <v-list-item-content>
          <v-list-item @click="sheet = !sheet" :ripple="false" to="/book"><v-icon class="mr-3">mdi-bookshelf</v-icon>精選字帖</v-list-item>
        </v-list-item-content>
        <v-list-item-content>
          <v-list-group
            :ripple="false"
          >
            <template v-slot:activator>
              <v-list-item class="ml-n4"><v-icon class="mr-3">mdi-information-outline</v-icon>書法入門</v-list-item>
            </template>
              <v-list-item-content>
                <v-list-item class="ml-10" @click="sheet = !sheet" :ripple="false" to="/maobi">毛筆介紹</v-list-item>
              </v-list-item-content>
              <v-list-item-content>
                <v-list-item class="ml-10" @click="sheet = !sheet" :ripple="false" to="/mozhi">墨汁介紹</v-list-item>
              </v-list-item-content>
              <v-list-item-content>
                <v-list-item class="ml-10" @click="sheet = !sheet" :ripple="false" to="/zhi">紙類介紹</v-list-item>
              </v-list-item-content>
              <v-list-item-content>
                <v-list-item class="ml-10" @click="sheet = !sheet" :ripple="false" to="/xuexi">學習方法</v-list-item>
              </v-list-item-content>
          </v-list-group>
        </v-list-item-content>
        <v-list-item-content>
          <v-list-item><v-icon class="mr-3">mdi-book-open</v-icon>作品專區</v-list-item>
        </v-list-item-content>
        <v-list-item-content>
          <v-list-item @click="sheet = !sheet" :ripple="false" to="/question"><v-icon class="mr-3">mdi-comment-question-outline</v-icon>常見問題</v-list-item>
        </v-list-item-content>
        <v-list-item-content>
          <v-list-item><v-icon class="mr-3">mdi-shopping-outline</v-icon>客製專區</v-list-item>
        </v-list-item-content>
        <v-list-item-content>
          <v-list-item @click="sheet = !sheet" :ripple="false" to="/store"><v-icon class="mr-3">mdi-store-outline</v-icon> 店家資訊</v-list-item>
        </v-list-item-content>
        </v-list>
        <v-btn
          class="mt-6 close"
          text
          color="error"
          @click="sheet = !sheet"
          :ripple="false"
          plain="true"
          x-large
          style="position: absolute; bottom: 20px; left: 50%; transform: translateX(-50%);"
        >
          <v-icon>
            mdi-window-close
          </v-icon>
        </v-btn>
        <v-btn
          text
          color="primary"
          @click="sheet = !sheet"
          :ripple="false"
          plain="true"
          x-large
          style="position: absolute; bottom: 20px; left: 40%; transform: translateX(-50%);"
          to="/"
        >
        <v-icon>
          mdi-home
        </v-icon>
        </v-btn>
        </v-sheet>
      </v-bottom-sheet>
  </div>
    <!-- --------------------------------------------------------- -->
      <v-main><vue-page-transition>
        <router-view></router-view>
      </vue-page-transition>
        <!-- <transition name="animation">
        </transition> -->
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
        <strong class="subheading">這是一條夫特文字😎</strong>

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
        {{ new Date().getFullYear() }} — <strong>dd0101</strong>
      </v-card-text>
    </v-card>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  data () {
    return {
      sheet: false,
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
.v-list-item__icon {
  min-width: 360px;
}
.router {
  position: absolute;
  left: 0;
  top: 0;
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
      top: 0;
      transition: 0.5s;
      &:hover {
        transition: 0.5s;
        top: -6px;
      }
      &::before {
        content: "";
        width: 0px;
        height: 4px;
        position: absolute;
        bottom: -8px;
        left: -4px;
        background: var(--error);
        opacity: 0;
        transition: 0.5s;
      }
      &:hover::before {
        opacity: 1;
        width: 80px;
        transition: 0.5s;
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
      background-color: #ffffff;
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
  position: absolute;
  top: 0;
  right: -1120px;
  &:hover {
    transition: 0.5s;
    transform: translateY(-6px);
  }
}
.v-list-item {
  min-height: 0px
}
</style>

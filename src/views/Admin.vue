<template>
  <v-app id="inspire">
    <div id="router-link"></div>
    <v-navigation-drawer v-model="drawer" app color="secondary">
      <v-list rounded class="text-center mt-16" style="color: var(--error);" flat>
        <v-list-item router-link to="/admin/adminPro" :ripple="false">
            <v-list-item-title class="pro">會員管理</v-list-item-title>
        </v-list-item>
        <v-list-item router-link to="/admin/adminOrder" :ripple="false">
            <v-list-item-title>訂單管理</v-list-item-title>
        </v-list-item>
        <v-list-item router-link to="/admin/adminProduct" :ripple="false">
            <v-list-item-title>商品管理</v-list-item-title>
        </v-list-item>
        <v-list-item router-link to="/admin/adminQ" :ripple="false">
            <v-list-item-title>常見問題</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-main>
      <vue-page-transition>
        <router-view></router-view>
      </vue-page-transition>
    </v-main>
  </v-app>
</template>

<script>
export default {
  data () {
    return {
      drawer: null
    }
  }
}
</script>

<style lang="scss" scoped>
.pro {
  margin-top: 50px;
}
.v-list-item__title {
  background-color: var(--accent);
  padding: 10px 0;
  border-radius: 20px;
  font-weight: bolder;
}
.v-toolbar__content {
  display: none;
}

.v-navigation-drawer {
  top: 64px !important;
}

.v-navigation-drawer__content {
  position: absolute;
  top: 64px;
}

.v-main {
  padding: 0px !important;
  background: var(--accent);
}

</style>

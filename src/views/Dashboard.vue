<template>
  <v-app id="inspire">
    <div id="router-link"></div>
    <v-navigation-drawer v-model="drawer" app color="secondary">
      <v-list rounded class="text-center mt-16" style="color: var(--accent);" flat>
        <v-list-item router-link to="/dashboard/pro" :ripple="false">
          <v-list-item-content>
            <v-list-item-title>會員主頁</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item router-link to="/dashboard/order" :ripple="false">
          <v-list-item-content>
            <v-list-item-title>訂單查詢</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item router-link to="/">
          <v-list-item-content>
            <v-list-item-title>HOME</v-list-item-title>
          </v-list-item-content>
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
}
</script>

<style lang="scss" scoped>
.v-toolbar__content {
  display: none;
}

.v-main {
  padding: 0 !important;
}
</style>

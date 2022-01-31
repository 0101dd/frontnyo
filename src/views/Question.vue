<template>
<v-app>
  <div id="question">
    <v-container>
      <div class="list">
    <v-expansion-panel
      v-for="(item,i) in 5"
      :key="i"
    >
      <v-expansion-panel-header>
        Item
      </v-expansion-panel-header>
      <v-expansion-panel-content>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
      </v-expansion-panel-content>
    </v-expansion-panel>
      </div>

    </v-container>
  </div>
</v-app>
</template>

<style lang="scss" scoped>
.list {
  width: 65%;
}
</style>

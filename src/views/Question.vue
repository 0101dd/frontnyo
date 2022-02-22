<template>
<v-app>
  <!-- <RouterTransition></RouterTransition> -->
  <div id="question">
    <div id="router-ink"></div>
    <!-- <h1>常見問題</h1> -->
    <v-container>
      <div class="list">
        <v-expansion-panels focusable multiple>
          <v-expansion-panel
            v-for="(item,i) in arrayQ"
            :key="i"
          >
              <!-- expand-icon="mdi-menu-down" -->
            <v-expansion-panel-header
              color="primary"
              class="font-weight-black"
              style="color: var(--accent);"
            >
            <template v-slot:actions>
            <v-icon color="accent">
              $expand
            </v-icon>
          </template>
            {{ item.question }}
            </v-expansion-panel-header>
            <v-expansion-panel-content>
              {{ item.answer }}
            </v-expansion-panel-content>
          </v-expansion-panel>
        </v-expansion-panels>
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
      arrayQ: []
    }
  },
  async created () {
    try {
      const { data } = await this.api.get('/questions/all')
      this.arrayQ = data.result
    } catch (error) {
      this.$swal({
        icon: 'error',
        title: '錯誤',
        text: '取得失敗'
      })
    }
  }
}
</script>

<style lang="scss" scoped>
#question {
  background:
  linear-gradient(transparent,rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.35)),
  url('https://theme.npm.edu.tw/selection/att/collection/04000980/17010201.jpg') no-repeat center/cover;
}

h1 {
  position: absolute;
  top: 30%;
  left: 50%;
  transform: translate(-50%, -30%);
  // &::before {
  //   content: '';
  //   position: absolute;
  //   width: 112%;
  //   height: 45%;
  //   left: -5%;
  //   bottom: 18%;
  //   background: var(--info);
  //   // background: linear-gradient(#ded7b94f, #ded7b94f);
  //   // filter: blur(20px);
  //   z-index: -1;
  // }
}

.v-expansion-panel-content {
  padding: 15px 0 0 !important;
}

.list {
  width: 35%;
}

.mdi.mdi-menu-down::before {
  color: var(--accent) !important;
}
</style>

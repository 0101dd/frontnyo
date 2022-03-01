<template>
<div id="my-work-page" style="background: var(--accent);">
  <div class="container">
    <div class="row flex-column-reverse">
      <div class="col"
        v-for="myWork in works"
        :key="myWork.name"
      >
        <v-card
          elevation="10"
        >
          <img :src="myWork.image" style="width: 100%;">
          <div class="card-text pa-5">
            <h3 class="text-center">{{ myWork.name }}</h3>
            <p>{{ myWork.description }}</p>
          </div>
        </v-card>
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  data () {
    return {
      works: []
    }
  },
  methods: {},
  async created () {
    try {
      const { data } = await this.api.get('/userworks')
      this.works = data.result
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
.container {
  padding-top: 100px;
  width: 40vw;
  height: 100%;
}

p {
  width: 60%;
  margin: 0 auto;
  text-align: center;
}
</style>

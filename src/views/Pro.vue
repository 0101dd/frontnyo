<template>
<div id="pro">
  <h1>test text</h1>
  <v-data-table
    :headers="headers"
    :items="info"
    :items-per-page="5"
    ref="table"
    class="elevation-3"
  ></v-data-table>
</div>
</template>

<script>
export default {
  data () {
    return {
      info: [],
      headers: [
        {
          text: 'account',
          align: 'start',
          sortable: false,
          value: 'account'
        },
        { text: 'email', value: 'email' }
      ]
    }
  },
  async getUserInfo () {
    try {
      const { data } = await this.api.get('/users/me', {
        headers: {
          authorization: 'Bearer ' + this.user.token
        }
      })
      this.info = data.result
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
#pro {
  width: 100vw;
  height: 100vh;
  background: var(--accent);
}
</style>

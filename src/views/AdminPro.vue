<template>
<div id="users">
  <h1 class="text-center">會員管理</h1>
  <div class="container">
    <v-data-table
      :headers="headers"
      :items="users"
      :items-per-page="10"
      ref="table"
      class="elevation-3"
    >
    </v-data-table>
  </div>
</div>
</template>

<script>
export default {
  data () {
    return {
      users: [],
      form: {
        account: '',
        email: ''
      },
      headers: [
        {
          text: '會員帳號',
          align: 'start',
          sortable: false,
          class: 'primary white--text subtitle-1',
          width: '350px',
          value: 'account'
        },
        { text: '會員信箱', class: 'primary white--text subtitle-1', width: '450px', value: 'email' }
      ]
    }
  },
  async created () {
    try {
      const { data } = await this.api.get('/users/all', {
        headers: {
          authorization: 'Bearer ' + this.user.token
        }
      })
      this.users = data.result
    } catch (error) {
      this.$swal({
        icon: 'error',
        title: '錯誤',
        text: '取得商品失敗'
      })
    }
  }
  // async updated () {
  //   try {
  //     const { data } = await this.api.get('/users/all', {
  //       headers: {
  //         authorization: 'Bearer ' + this.user.token
  //       }
  //     })
  //     this.users = data.result
  //   } catch (error) {
  //     this.$swal({
  //       icon: 'error',
  //       title: '錯誤',
  //       text: '取得商品失敗'
  //     })
  //   }
  // }
}
</script>

<style lang="scss" scoped>
// #users {
//   width: 100vw;
//   height: 100vh;
//   background: var(--accent);
// }
h1 {
  margin: 100px 0 50px 0;
}
h1::before {
  content: '';
  display: none;
}
.container {
  width: 100%;
  height: 100%;
}
.v-data-table {
  width: 70%;
}
colgroup {
  &>col {
    width: 40% !important;
  }
}
.text-start {
  vertical-align: middle !important;
}
.v-sheet.v-card:not(.v-sheet--outlined) {
  box-shadow: none;
}

.delete-card {
  background: var(--accent);
  height: 170px;
}
.v-card__text.delete-title {
  font-weight: bold;
  font-size: 1.5rem;
  color: var(--primary);
  position: absolute;
  top: 30%;
  left: 18%;
  width: 300px;
}
</style>

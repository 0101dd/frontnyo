<template>
<div id="order">
  <h1 class="text-center">訂單查詢</h1>
  <router-link to="/dashboard/users">會員主頁</router-link>
  <router-link to="/dashboard/cart">購物清單</router-link>
  <router-link to="/dashboard/order">訂單查詢</router-link>
  <router-link to="/dashboard/userWorks">作品管理</router-link>
  <div class="container">
    <v-data-table
      :headers="headers"
      :items="orders"
      :items-per-page="5"
      :loading="loadTable"
      loading-text="加載中......."
      ref="table"
      class="elevation-3"
    >
    <template v-slot:item.date="{ item }">
      {{ new Date(item.date).toLocaleString('zh-tw') }}
    </template>
    <template v-slot:item.products.product="{ item }">
      <ul>
        <li class="product" v-for="i in item.products[0]" :key="'product' + i">
        {{ i.name }}
        </li>
      </ul>
    </template>
    <template v-slot:item.products.quantity="{ item }">
      <ul>
        <li v-for="i in item.products" :key="i">
        {{ i.quantity }}
        </li>
      </ul>
    </template>
    </v-data-table>
  </div>
</div>
</template>

<script>
export default {
  data () {
    return {
      loadTable: true,
      orders: [],
      headers: [
        { text: '日期', align: 'center', value: 'date', class: 'primary white--text subtitle-1' },
        { text: '單號', align: 'center', value: 'products.0._id', class: 'primary white--text subtitle-1' },
        { text: '名稱', align: 'center', value: 'products.product', class: 'primary white--text subtitle-1' },
        { text: '數量', align: 'center', value: 'products.quantity', class: 'primary white--text subtitle-1' }
      ]
    }
  },
  async created () {
    try {
      const { data } = await this.api.get('/orders/me', {
        headers: {
          authorization: 'Bearer ' + this.user.token
        }
      })
      this.orders = data.result
      this.loadTable = false
      // console.log('1' + JSON.stringify(this.orders))
      // console.log('2' + data)
    } catch (error) {
      this.$swal({
        icon: 'error',
        title: '失敗',
        text: '取得訂單失敗'
      })
    }
  }
}
</script>

<style lang="scss" scoped>
// #order {
//   width: 100vw;
//   height: 100vh;
//   background: var(--accent);
// }
a {
  display: none;
}
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
  background: var(--secondary);
  height: 170px;
}
.v-card__text.delete-title {
  font-weight: bold;
  font-size: 1.5rem;
  color: var(--accent);
  position: absolute;
  top: 30%;
  left: 18%;
  width: 300px;
}
</style>

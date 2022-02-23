<template>
<div id="order">
  <h1 class="text-center">訂單查詢</h1>
  <div class="container">
    <v-data-table
      :headers="headers"
      :items="orders"
      :items-per-page="5"
      ref="table"
      class="elevation-3"
    >
    <template v-slot:item.date="{ item }">
      {{ new Date(item.date).toLocaleString('zh-tw') }}
    </template>
    <template v-slot:item.products="{ item }">
      <ul>
        <li v-for="i in item.products" :key="i">
        {{ i.product.name }}
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
      orders: [],
      headers: [
        { text: '日期', align: 'center', value: 'date', class: 'primary white--text subtitle-1' },
        { text: '單號', align: 'center', value: 'products.0._id', class: 'primary white--text subtitle-1' },
        { text: '名稱', align: 'center', value: 'products', class: 'primary white--text subtitle-1' },
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
      // console.log(this.orders)
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

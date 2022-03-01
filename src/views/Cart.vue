<template>
<div id="cart">
  <h1 class="text-center">購物清單</h1>
  <router-link to="/dashboard/users">會員主頁</router-link>
  <router-link to="/dashboard/cart">購物清單</router-link>
  <router-link to="/dashboard/order">訂單查詢</router-link>
  <router-link to="/dashboard/userWorks">作品管理</router-link>
  <div class="container">
    <v-data-table
      :headers="headers"
      :items="products"
      :items-per-page="5"
      :loading="loadTable"
      loading-text="加載中......."
      ref="table"
      class="elevation-3"
    >
      <template v-slot:item.product.image="{ item }">
        <img :src="item.product.image" style="width: 100px; vertical-align: middle; padding: 5px 0;">
      </template>
    </v-data-table>
  </div>
  <v-btn
    class="mx-2 go-cart"
    absolute
    :ripple="false"
    @click="checkout"
    :disabled="products.length === 0"
    color="primary"
    style="bottom: 50px; right: 250px; height: 50px; width: 100px; font-size: 1.3rem; font-weight: bold; color: var(--accent);"
  >
    結帳
  </v-btn>
</div>
</template>

<script>
export default {
  data () {
    return {
      loadTable: true,
      products: [],
      headers: [
        { text: '商品圖片', align: 'center', value: 'product.image', class: 'primary white--text subtitle-1' },
        { text: '名稱', align: 'center', value: 'product.name', class: 'primary white--text subtitle-1' },
        { text: '數量', align: 'center', value: 'quantity', class: 'primary white--text subtitle-1' }
      ]
    }
  },
  methods: {
    async checkout () {
      try {
        await this.api.post('/orders', {}, {
          headers: {
            authorization: 'Bearer ' + this.user.token
          }
        })
        this.$router.push('/dashboard/order')
        this.$store.commit('user/updateCart', 0)
      } catch (error) {
        this.$swal({
          icon: 'error',
          title: '失敗',
          text: '結帳失敗'
        })
      }
    }
  },
  async created () {
    try {
      const { data } = await this.api.get('/users/me/cart', {
        headers: {
          authorization: 'Bearer ' + this.user.token
        }
      })
      this.products = data.result
      this.loadTable = false
      // console.log(this.products)
    } catch (error) {
      this.$swal({
        icon: 'error',
        title: '失敗',
        text: '取得購物車失敗'
      })
    }
  }
}
</script>

<style lang="scss" scoped>
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

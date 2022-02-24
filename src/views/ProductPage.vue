<template>
<v-app style="background: var(--accent);">
  <div id="router-ink"></div>
  <div id="product-page">
  <div class="container">
    <div class="row">
      <div class="col"
        v-for="product in products"
        :key="product.name"
      >
      <kinesis-container>
        <kinesis-element :strength="15" type="depth" style="display: flex; flex-wrap: wrap;">
          <v-card
            max-width="300"
            class="elevation-5"
          >
            <router-link :to="'/product/' + product._id">
            <v-img
              :src="product.image"
              width="300px"
              height="200px"
              fluid
            ></v-img></router-link>
            <v-card-text>
              <p style="display: inline; font-weight: bold; font-size: 1.1rem; color: var(--primary);">
              {{ product.name }}</p>
              <p style="display: inline;">&emsp;{{ '$' + product.price }}</p>
              <p class="category">{{ product.category }}</p>
            </v-card-text>
            <!-- <v-card-actions>
              <v-btn icon class="btn">
                <v-icon>mdi-bookmark</v-icon>
              </v-btn>
            </v-card-actions> -->
          </v-card>
        </kinesis-element>
      </kinesis-container>
      </div>
    </div>
  </div>
</div>
</v-app>

</template>

<script>
export default {
  data () {
    return {
      products: []
    }
  },
  async created () {
    try {
      const { data } = await this.api.get('/products')
      this.products = data.result
    } catch (error) {
      this.$swal({
        icon: 'error',
        title: '錯誤',
        text: '取得商品失敗'
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.container {
  width: 70%;
}
.category {
  background: var(--primary);
  color: var(--accent);
  padding: 1px 5px;
  margin-top: 4px;
  border-radius: 16px;
  width: 80px;
  text-align: center;
  font-size: 0.5rem;
}

.v-card__text {
  padding-bottom: 1px;
}
</style>

<template>
<div id="product">
  <div class="container">
    <div class="row">
      <div class="col col-sm-12 col-lg-6">
        <img :src="image">
      </div>
      <div class="col col-sm-12 col-lg-6">
        <h3>{{ name }}</h3>
        <p class="pb-3" style="white-space: break-spaces;">{{ description }}</p>
        <p class="price">{{ '$' + price }}</p>
        <hr>
        <p class="category">{{ category }}</p>
        <v-text-field
          class="quantity"
          label="數量"
          v-model="quantity"
          type="number"
          color="secondary"
          outlined
          :rule="quantityState"
        >
        </v-text-field>
        <v-btn
          v-model="quantity"
          large
          color="secondary"
          outlined
          :ripple="false"
          @click="addCart"
        >
          <v-icon>
            mdi-basket-outline
          </v-icon>
          加入購物車
        </v-btn>
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  data () {
    return {
      name: '',
      price: 0,
      description: '',
      image: '',
      sell: false,
      category: '',
      quantity: 0
    }
  },
  methods: {
    addCart () {
      this.$store.dispatch('user/addCart', { product: this.$route.params.id, quantity: this.quantity })
    }
  },
  computed: {
    quantityState () {
      return this.quantity === 0 ? null : this.quantity > 0
    }
  },
  async created () {
    try {
      const { data } = await this.api.get('/products/' + this.$route.params.id)
      this.name = data.result.name
      this.price = data.result.price
      this.description = data.result.description
      this.image = data.result.image
      this.sell = data.result.sell
      this.category = data.result.category
      document.title = `${this.name} | 書彙齋`
    } catch (error) {
      this.$route.push('/')
    }
  }
}
</script>

<style lang="scss" scoped>
#product {
  background: var(--accent);
}
.container {
  width: 70vw;
}
.row {
  // filter: drop-shadow(2px 1px 15px rgba(0, 0, 0, 0.493));
  align-items: center;
}
.col:first-child {
  // background: white;
  border-radius: 10px;
}
.col:last-child {
  border-radius: 10px;
  border: 2px solid var(--secondary);
  padding: 50px 0px;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
}
img {
  width: 500px;
  border-radius: 5px;
}
h3 {
  color: var(--secondary);
  font-weight: normal;
}
p {
  width: 70%;
  margin: 0;
}
hr {
  width: 75%;
  background-color: var(--secondary);
  margin-top: 15px;
}
.v-btn::before {
  display: none;
}
.v-btn {
  transition: 0.5s;
  position: absolute;
  right: 90px;
  bottom: 131px;
  &:hover {
    background: var(--secondary);
    color: var(--accent) !important;
    transition: 0.5s;
  }
}
.price {
  background: var(--secondary);
  color: var(--accent);
  border-radius: 8px;
  text-align: center;
  font-size: 2rem;
  font-weight: bold;
  line-height: 54px;
  margin: 20px 0px 20px 95px;
  align-self: flex-start;
  width: 23%;
  height: 54px;
  position: relative;
  z-index: 2;
}
.category {
  font-size: 0.5rem;
  // color: #ffffff81;
}

.quantity {
  position: absolute;
  bottom: 100px;
  left: 305px;
  width: 107px;
}
.v-btn:not(.v-btn--round).v-size--large {
  height: 54px !important;
}
</style>

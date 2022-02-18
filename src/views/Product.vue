<template>
<div id="product">
  <div class="container">
    <div class="row">
      <div class="col">
        <img :src="image">
      </div>
      <div class="col">
        <h3>{{ name }}</h3>
        <p class="pb-3">{{ description }}</p>
        <p class="price">{{ '$' + price }}</p>
        <hr>
        <p class="category">{{ category }}</p>
        <v-text-field
          label="數量"
          v-model="quantity"
          type="number"
          color="accent"
          outlined
          dark
          class="quantity"
        >
        </v-text-field>
        <v-btn
          v-model="quantity"
          large
          color="accent"
          outlined
          :ripple="false"
        >
          <v-icon>
            mdi-basket-outline
          </v-icon>
          加入購物車
        </v-btn>
      </div>
    </div>
  </div>
  <MovePosition></MovePosition>
</div>
</template>

<script>
import MovePosition from '../components/MovePosition.vue'
export default {
  components: {
    MovePosition
  },
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
  background: var(--secondary);
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
  border: 2px solid var(--accent);
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
  color: var(--accent);
  font-weight: normal;
}
p {
  color: white;
  width: 70%;
  margin: 0;
}
hr {
  width: 75%;
  background-color: var(--accent);
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
    background: var(--accent);
    color: var(--primary) !important;
    transition: 0.5s;
  }
}
.price {
  background: var(--accent);
  color: var(--secondary);
  border-radius: 8px;
  text-align: center;
  font-size: 2rem;
  font-weight: bold;
  line-height: 54px;
  margin: 20px 0px 20px 95px;
  align-self: flex-start;
  width: 23%;
  height: 54px;
}
.category {
  font-size: 0.5rem;
  color: #ffffff81;
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

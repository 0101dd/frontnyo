<template>
<div id="product-card">
  <v-card
    max-width="300"
    class="elevation-5"
  >
    <router-link :to="'/product/' + product._id">
    <v-img
      :src="product.image"
      width="100%"
      height="200px"
      fluid
    ></v-img></router-link>
    <v-card-text>
      <p style="font-weight: bold; font-size: 1.1rem; color: var(--primary);">
      {{ product.name }}</p>
      <p>&emsp;{{ '$' + product.price }}</p>
    </v-card-text>
    <!-- <v-card-actions>
      <v-btn icon class="btn">
        <v-icon>mdi-bookmark</v-icon>
      </v-btn>
    </v-card-actions> -->
  </v-card>
</div>
</template>

<script>
export default {
  props: {
    product: {
      type: Object,
      required: true
    }
  }
}
</script>

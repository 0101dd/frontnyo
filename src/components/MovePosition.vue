<template>
<div class="button">
  <a href="#" @click="back" class="move-back">
    <v-icon
      color="accent"
    >mdi-chevron-left</v-icon>
  </a>
  <a href="#" class="move-top">
    <v-icon
      color="accent"
    >mdi-chevron-up</v-icon>
  </a>
</div>
</template>

<script>
export default {
  methods: {
    back () {
      this.$router.go(-1)
    }
  }
}
</script>

<style lang="scss" scoped>
  .move-back, .move-top {
    height: 50px;
    width: 50px;
    border-radius: 50%;
    background: var(--primary);
    position: fixed;
    line-height: 50px;
    z-index: 0;
    right: -80px;
    transition: 0.7s;
  }

  .button {
    position: fixed;
    bottom: 0;
    right: 0;
    height: 100px;
    width: 100px;
  }

  .button:hover .move-back,
  .button:hover .move-top{
    right: 20px;
    transition: 0.7s;
  }

  .move-back {
    bottom: 20px;
  }

  .move-top {
    bottom: 80px;
  }
</style>

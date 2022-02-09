<template>
<div class="button">
  <v-icon
      color="primary"
    >mdi-chevron-left</v-icon>
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
    bottom: 400px;
    right: 0;
    height: 100px;
    width: 100px;
  }

  .button:hover .move-back,
  .button:hover .move-top{
    right: 20px;
    transition: 0.7s;
  }

  .button:hover>.mdi-chevron-left {
    opacity: 0;
    transition: 0.5s;
  }

  .move-back {
    bottom: 420px;
  }

  .move-top {
    bottom: 480px;
  }
</style>

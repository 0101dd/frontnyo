<template>
<v-app>
  <div id="register">
    <div class="overlay">
    </div>
  </div>
</v-app>
</template>

<style lang="scss" scoped>
#register,
.overlay::before {
  width: 100vw;
  height: 100vh;
  background:
  url(../assets/zhuce-beging.jpg) no-repeat fixed 0 0 / cover;
}

#register {
  display: flex;
  align-items: center;
  justify-content: center;
}

.overlay {
  max-height: 200px;
  margin: 0 auto;
  max-width: 768px;
  // overflow: hidden;
  position: relative;
  position: relative;
  text-align: center;
  z-index: 0;
  &::before {
    content: '';
    filter: blur(5px);
    height: 200px;
    left: 0;
    position: absolute;
    top: 0;
    width: 500px;
    z-index: -1;
  }
}
</style>

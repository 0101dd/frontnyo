<template>
<v-app>
  <div id="maobi">
    <div class="title-picture">
      <img
        src="../assets/pomo.png"
        width="40%"
        class="img"
      >
      <!-- <img
        src="../assets/baisemo.png"
        width="30%"
        class="baisemo"
      > -->
      <v-img
        src="../assets/bi.png"
        width="17%"
        style="position: absolute; top: 4%; left: 3%;"
        class="bi"
      ></v-img>
    </div>
  </div>
</v-app>
</template>

<script>
import gsap from 'gsap'

export default {
  mounted () {
    gsap.from('.bi', {
      duration: 1,
      ease: 'none',
      opacity: 0,
      delay: 2
    })
    gsap.set('.baisemo', {
      position: 'absolute',
      top: '-30%'
    })
    gsap.to('.baisemo', {
      duration: 1,
      ease: 'none',
      delay: 1,
      y: '1000px'
    })
    gsap.set('.img', {
      position: 'absolute',
      top: '-1000px'
    })
    gsap.to('.img', {
      duration: 2,
      ease: 'slow',
      delay: 1,
      y: '1000px'
    })
  }
}
</script>

<template>
  <div class="example-3d">
    <swiper class="swiper" :options="swiperOption">
      <swiper-slide><v-img src="https://upload.cc/i1/2022/01/29/PvboRT.jpg" height="100%"></v-img></swiper-slide>
      <swiper-slide><v-img src="https://upload.cc/i1/2022/01/29/sdvpf5.jpg" height="100%"></v-img></swiper-slide>
      <swiper-slide><v-img src="https://theme.npm.edu.tw/selection/att/collection/04001001/17010057.jpg" height="100%"></v-img></swiper-slide>
      <swiper-slide><v-img src="https://upload.cc/i1/2022/01/31/W0dz6D.jpg" height="100%"></v-img></swiper-slide>
      <swiper-slide><v-img src="https://theme.npm.edu.tw/selection/att/collection/04001006/%E5%9B%9B-1.jpg" height="100%"></v-img></swiper-slide>
      <swiper-slide><v-img src="https://theme.npm.edu.tw/selection/att/collection/04001005/17010135.jpg" height="100%"></v-img></swiper-slide>
      <swiper-slide><v-img src="https://theme.npm.edu.tw/selection/att/collection/04001007/17010210.jpg" height="100%"></v-img></swiper-slide>
      <swiper-slide><v-img src="https://upload.cc/i1/2022/01/31/xbaG78.jpg" height="100%"></v-img></swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'

export default {
  name: 'swiper-example-3d-cube',
  title: '3D Cube effect',
  components: {
    Swiper,
    SwiperSlide
  },
  data () {
    return {
      swiperOption: {
        loop: true,
        effect: 'cube',
        grabCursor: true,
        cubeEffect: {
          shadow: true,
          slideShadows: true,
          shadowOffset: 80,
          shadowScale: 0.94
        },
        pagination: {
          el: '.swiper-pagination'
        }
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  .example-3d {
    position: relative;
    overflow: hidden;
    height: 800px;
    // padding: 15px;
  }

  .swiper {
    width: 700px !important;
    height: 500px;
    position: absolute;
    left: 40%;
    top: 25%;
    margin-left: -150px;
    margin-top: -150px;

    .swiper-slide {
      display: flex;
      justify-content: center;
      align-items: center;
      text-align: center;
      font-weight: bold;
      // background-color: #2C8DFB;
      background-position: center;
      background-size: cover;
      color: white;
    }

    .swiper-pagination {
        display: none;

      .swiper-pagination-bullet.swiper-pagination-bullet-active {
        background-color: white;
      }
    }
  }
</style>

<template>
  <div>
    <div ref="slider" class="swiper">
      <div class="swiper-wrapper">
        <div v-for="sliders in sliders" :key="sliders.id" class="swiper-slide">
          <img :src="$store.state.base + sliders.image" alt="" class="pic" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
/* eslint-disable */

import Swiper from 'swiper/swiper-bundle.js'
import 'swiper/swiper-bundle.min.css'

export default {
  name: 'MainSlider',

  props: {
    sliders: {
      type: Array,
      required: true,
    },
  },

  mounted() {
    let slider = new Swiper(this.$refs.slider, {
      slidesPerView: 2.2,
      centeredSlides: true,
      loop: true,
      spaceBetween: 16,
      autoplay: {
        delay: 1,
      },
      speed: 30000,
      breakpoints: {
        767: {
          spaceBetween: 16,
          slidesPerView: 4.5,
        },
      },
    })
  },
}
</script>

<style scoped>
.swiper {
  padding: 64px 0 0 0;
}
.swiper-wrapper {
  align-items: flex-end;
}
.swiper-slide {
  width: 100%;
  height: 400px;
}
.swiper-slide:nth-child(2n) {
  height: 320px;
}
.swiper-slide:nth-child(3n) {
  height: 230px;
}
.pic {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
@media screen and (max-width: 992px) {
  .swiper-slide {
    width: 100%;
    height: 140px;
  }
  .swiper-slide:nth-child(2n) {
    height: 125px;
  }
  .swiper-slide:nth-child(3n) {
    height: 170px;
  }
}
</style>

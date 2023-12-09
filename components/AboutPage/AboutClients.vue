<template>
  <div>
    <div class="container">
      <h4 class="section__title">our clients</h4>
    </div>

    <div ref="slider" class="swiper">
      <div class="swiper-wrapper">
        <div v-for="data in partners" :key="data.id" class="swiper-slide">
          <img :src="$store.state.base + data.image" alt="" class="pic" />
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
  name: 'AboutClients',

  data() {
    return {}
  },

  props: {
    partners: {
      type: Array,
      required: true,
    },
  },

  mounted() {
    new Swiper(this.$refs.slider, {
      slidesPerView: 2.5,
      loop: true,
      centeredSlides: true,
      speed: 30000,
      autoplay: {
        delay: 1,
      },
      breakpoints: {
        767: {
          slidesPerView: 5,
        },
      },
    })
  },
}
</script>

<style scoped>
.swiper {
  padding-bottom: 120px;
}
.swiper-slide {
  height: 350px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-top: 1px solid var(--border);
  border-bottom: 1px solid var(--border);
  border-right: 1px solid var(--border);
}
.container {
  padding-top: 200px;
}
@media screen and (max-width: 992px) {
  .swiper {
    padding-bottom: 0;
  }
  .container {
    padding-top: 100px;
  }
  .section__title {
    margin-bottom: 1rem;
  }
  .swiper-slide {
    height: 130px;
  }
  .pic {
    width: 100px;
    object-fit: contain;
  }
}
</style>

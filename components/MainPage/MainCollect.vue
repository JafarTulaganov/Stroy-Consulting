<template>
  <div>
    <div class="container">
      <h4 class="section__title">
        A COLLECTION OF THE BEST PROJECTS IMPLEMENTED BY OUR TEAM
      </h4>
    </div>
    <div ref="slider" class="swiper">
      <div class="swiper-wrapper">
        <div v-for="data in projects" :key="data.id" class="swiper-slide">
          <nuxt-link to="/projects">
            <div class="img">
              <img
                :src="$store.state.base + data.images[0].image"
                alt=""
                class="pic"
              />
            </div>
            <div class="content">
              <p class="title">{{ data.title.en }}</p>
              <p class="txt" v-html="data.description.en"></p>
            </div>
          </nuxt-link>
        </div>
      </div>
      <div class="box">
        <div class="swiper-button-prev"><i class="bx bx-chevron-left"></i></div>
        <div class="swiper-pagination"></div>
        <div class="swiper-button-next">
          <i class="bx bx-chevron-right"></i>
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
  name: 'MainCollect',

  mounted() {
    new Swiper(this.$refs.slider, {
      slidesPerView: 1.5,
      loop: true,
      spaceBetween: 8,
      autoplay: {
        delay: 5000,
      },
      pagination: {
        el: '.swiper-pagination',
        type: 'fraction',
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      breakPoints: {
        767: {
          slidesPerView: 2,
          spaceBetween: 40,
        },
      },
    })
  },

  props: {
    projects: {
      type: Array,
      required: true,
    },
  },
}
</script>

<style scoped>
.main {
  overflow: hidden;
}
.container {
  padding: 200px 0 0 0;
}
.swiper {
  height: 735px;
}
.swiper-slide {
  position: relative;
}
.content {
  position: absolute;
  bottom: 32px;
  left: 100px;
  z-index: 3;
  transition: 1s;
  height: 0;
  opacity: 0;
  visibility: hidden;
}
.title {
  font-family: var(--angel);
  font-weight: 400;
  font-size: 45px;
  line-height: 45px;
  color: white;
  margin-bottom: 0.5rem;
}
.txt {
  font-weight: 400;
  font-size: 22px;
  line-height: 32px;
  color: white;
  max-width: 80%;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
}
.pic {
  width: 100%;
  height: 615px;
  object-fit: cover;
  transition: ease-in 0.5s;
}
.img {
  position: relative;
}
.img::after {
  background: linear-gradient(180deg, rgba(0, 0, 0, 0) 68.82%, #000000 100%);
  content: '';
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: 2;
}
.swiper-slide-active {
  width: 65% !important;
}
.swiper-slide-active .pic {
  height: 735px;
}
.swiper-slide-active .content {
  opacity: 1;
  visibility: visible;
  height: initial;
}
.swiper-pagination,
.swiper-button-prev,
.swiper-button-next {
  position: static;
  height: unset;
  width: unset;
  margin: 0;
}
.box {
  position: absolute;
  right: 22%;
  bottom: 2rem;
  display: flex;
  align-items: center;
  gap: 2rem;
}
.swiper-button-next::after,
.swiper-button-prev::after {
  display: none;
}
.swiper-button-next i,
.swiper-button-prev i {
  color: black;
  font-size: 32px;
  border: 1px solid black;
  border-radius: 50%;
  padding: 10px !important;
  display: flex;
  align-items: center;
  justify-content: center;
}
@media screen and (max-width: 1440px) {
  .box {
    right: 20%;
  }
}
@media screen and (max-width: 992px) {
  .container {
    padding-top: 100px;
  }
  .pic {
    height: 350px !important;
  }
  .content {
    bottom: 1rem;
    left: 10px;
    height: initial;
  }
  .title {
    font-weight: 400;
    font-size: 17px;
    line-height: 17px;
  }
  .txt {
    font-weight: 400;
    font-size: 10px;
    line-height: 16px;
  }
  .swiper {
    height: initial !important;
  }
  .box {
    position: static;
    padding-top: 20px;
    justify-content: center;
  }
}
</style>

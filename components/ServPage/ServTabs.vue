<template>
  <div>
    <div class="container">
      <div class="buttons">
        <button
          v-for="data in services"
          :key="data.id"
          :class="{ active: data.id === activeTab }"
          class="btn"
          @click="activeTab = data.id"
        >
          {{ data.title && data.title.en }}
        </button>
      </div>
      <div
        v-for="service in services"
        :key="service.id"
        class="tab"
        :class="{ active: service.id === activeTab }"
      >
        <div ref="slider" class="swiper">
          <div class="swiper-wrapper">
            <div
              v-for="service in service.projects"
              :key="service.id"
              class="swiper-slide"
              data-swiper-parallax="-23%"
            >
              <div class="left">
                <div class="txt" data-swiper-parallax="-500"></div>
                <h4 class="title" data-swiper-parallax="-700">
                  {{ service.title && service.title.en }}
                </h4>
              </div>
              <div class="mid">
                <img
                  :src="$store.state.base + service.images[0].image"
                  class="pic"
                  data-swiper-parallax="-900"
                  alt=""
                />
              </div>
              <div class="right">
                <p
                  class="txt"
                  data-swiper-parallax="-1100"
                  v-html="service.description && service.description.en"
                ></p>
              </div>
            </div>
          </div>
          <div class="box">
            <div class="swiper-button-prev">
              <i class="bx bx-chevron-left"></i>
            </div>
            <div class="swiper-pagination"></div>
            <div class="swiper-button-next">
              <i class="bx bx-chevron-right"></i>
            </div>
          </div>
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
  name: 'ServTabs',

  props: {
    services: {
      type: Array,
      required: true,
    },
    // projects: {
    //   type: Array,
    //   required: true,
    // },
  },

  data() {
    return {
      activeTab: 1,
    }
  },

  methods: {
    setActive(tab) {
      this.activeTab = tab
    },
    isActive(tab) {
      return this.activeTab === tab
    },
  },

  mounted() {
    console.log(this.services)
    new Swiper(this.$refs.slider, {
      slidesPerView: 1,
      pagination: {
        el: '.swiper-pagination',
        type: 'fraction',
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      speed: 1000,
      parallax: true,
    })
  },
}
</script>

<style scoped>
.buttons {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 72px;
  padding: 200px 0 40px 0;
}
.btn {
  font-family: var(--angel);
  font-weight: 400;
  font-size: 48px;
  line-height: 48px;
  padding: 28px 64px;
  border-radius: 0;
  color: var(--grey);
  border: 2px solid var(--grey);
  transition: 0.5s;
}
.btn:focus {
  outline: none;
  box-shadow: none;
}

.tab {
  display: none;
}
.tab.active {
  display: block;
}
.btn:hover {
  border-color: var(--gold);
  color: var(--gold);
}
.btn.active {
  border-color: var(--gold);
  background: var(--gold);
  color: black;
}
.swiper-slide {
  display: grid;
  align-items: center;
  grid-template-columns: 30% 40% 30%;
}
.pic {
  width: 100%;
  height: 740px;
  object-fit: cover;
}
.left .txt {
  font-weight: 400;
  font-size: 18px;
  line-height: 32px;
  color: var(--grey);
  max-width: 320px;
  margin-bottom: 220px;
}
.title {
  font-weight: 600;
  font-size: 40px;
  line-height: 55px;
  max-width: 320px;
}
.left,
.right {
  padding: 24px;
}
.right {
  border-top: 1px solid var(--border);
}
.left {
  border-bottom: 1px solid var(--border);
}
.right .txt {
  font-weight: 500;
  font-size: 28px;
  line-height: 42px;
  max-width: 390px;
}
.box {
  position: absolute;
  left: 24px;
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
.swiper-pagination,
.swiper-button-prev,
.swiper-button-next {
  position: static;
  height: unset;
  width: unset;
  margin: 0;
}
@media screen and (max-width: 1540px) {
  .buttons {
    gap: 1rem;
  }
}
@media screen and (max-width: 1440px) {
  .btn {
    font-size: 32px;
    padding: 1rem 2rem;
  }
}
@media screen and (max-width: 992px) {
  .container {
    padding: 0 1rem;
  }
  .buttons {
    padding-top: 64px;
    gap: 14px;
  }
  .btn {
    font-weight: 400;
    font-size: 14px;
    line-height: 14px;
    padding: 12px 1rem;
    height: 55px;
  }
  .swiper-slide {
    grid-template-columns: repeat(1, 1fr);
  }
  .left {
    padding: 0;
  }
  .left .txt {
    margin-bottom: 1rem;
    font-weight: 400;
    font-size: 12px;
    line-height: 16px;
  }
  .pic {
    height: 380px;
  }
  .title {
    font-weight: 600;
    font-size: 16px;
    line-height: 24px;
  }
  .right {
    padding: 1rem 0;
  }
  .right .txt {
    font-weight: 500;
    font-size: 13px;
    line-height: 17px;
  }
  .box {
    position: static;
    justify-content: center;
  }
}
@media screen and (max-width: 400px) {
  .buttons {
    flex-wrap: wrap;
  }
}
</style>

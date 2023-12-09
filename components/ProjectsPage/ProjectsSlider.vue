<template>
  <div class="main">
    <div v-for="service in services" :key="service.id" class="wrap row">
      <div class="col-lg-3 col-xs-12 content">
        <h4 class="title">{{ service.title && service.title.en }}</h4>
        <p class="sub" v-html="service.description.en"></p>
        <p class="txt">
          Foreseeing the end of the war, Eimac Products began to expand its
          expertise to include
        </p>
        <div class="box">
          <div
            class="swiper-button-prev"
            :class="'swiper-button-prev' + service.id"
          >
            <i class="bx bx-chevron-left"></i>
          </div>
          <div
            class="swiper-pagination"
            :class="'swiper-pagination' + service.id"
          ></div>
          <div
            class="swiper-button-next"
            :class="'swiper-button-next' + service.id"
          >
            <i class="bx bx-chevron-right"></i>
          </div>
        </div>
      </div>
      <div class="col-lg-9 col-xs-12">
        <div ref="slider" class="swiper" :class="'swiper' + service.id">
          <div class="swiper-wrapper">
            <div
              v-for="data in service.projects"
              :key="data.id"
              class="swiper-slide"
            >
              <div class="img">
                <img :src="$store.state.base + data.images[0].image" alt="" />
              </div>
              <p class="name">{{ data.title && data.title.en }}</p>
              <p class="stroke" v-html="data.description.en"></p>
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
  name: 'ProjectsSlider',

  mounted() {
    this.services.forEach((element) => {
      new Swiper('.swiper' + element.id, {
        slidesPerView: 1.7,
        pagination: {
          el: '.swiper-pagination' + element.id,
          type: 'fraction',
        },
        navigation: {
          nextEl: '.swiper-button-next' + element.id,
          prevEl: '.swiper-button-prev' + element.id,
        },
        spaceBetween: 8,
        breakpoints: {
          1000: {
            slidesPerView: 2.5,
            spaceBetween: 40,
          },
        },
      })
    })
  },

  props: {
    projects: {
      type: Array,
      required: true,
    },
    services: {
      type: Array,
      required: true,
    },
  },
}
</script>

<style scoped>
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
.content {
  position: relative;
  z-index: 99;
  padding: 24px;
}
.main {
  padding: 120px 0 48px 0;
  margin-left: calc((100% - 1780px) / 2);
  border-left: 1px solid var(--border);
  border-bottom: 1px solid var(--border);
}
.wrap {
  display: flex;
  padding: 60px 0;
  border-bottom: 1px solid var(--border);
  margin: 0;
}
.wrap:last-child {
  border-bottom: none;
}
.title {
  font-weight: 500;
  font-size: 48px;
  line-height: 58px;
  margin-bottom: 24px;
  text-transform: uppercase;
}
.sub {
  font-weight: 400;
  font-size: 24px;
  line-height: 32px;
  margin-bottom: 24px;
  max-width: 340px;
}
.txt {
  font-weight: 400;
  font-size: 18px;
  line-height: 28px;
  max-width: 340px;
}
.img img {
  width: 100%;
  height: 550px;
  object-fit: cover;
  margin-bottom: 24px;
}
.name {
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
  margin-bottom: 0.5rem;
}
.stroke {
  font-weight: 400;
  font-size: 18px;
  line-height: 32px;
  color: var(--dark-grey);
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
}
@media screen and (max-width: 1700px) {
  .main {
    margin-left: 0;
  }
  .title {
    font-size: 32px;
  }
}
@media screen and (max-width: 992px) {
  .main {
    padding-top: 0px;
  }
  .wrap {
    flex-wrap: wrap;
    flex-direction: column;
  }
  .img img {
    height: 230px;
  }
  .name {
    font-weight: 500;
    font-size: 16px;
    line-height: 19px;
    margin-bottom: 0.5rem;
  }
  .stroke {
    font-weight: 400;
    font-size: 10px;
    line-height: 16px;
  }
  .title {
    font-weight: 500;
    font-size: 18px;
    line-height: 22px;
    margin-bottom: 12px;
  }
  .sub {
    font-weight: 400;
    font-size: 14px;
    line-height: 22px;
    margin-bottom: 12px;
  }
  .txt {
    font-weight: 400;
    font-size: 12px;
    line-height: 16px;
  }
  .content {
    padding-bottom: 10px;
  }
  .swiper {
    padding: 0 12px;
  }
  .box {
    position: static;
    padding-top: 24px;
    justify-content: center;
  }
}
</style>

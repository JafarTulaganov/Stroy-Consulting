<template>
  <div class="body">
    <div class="container">
      <h4 class="section__title">OUR TEAM</h4>
    </div>
    <div class="grid">
      <div class="content">
        <div class="liner">
          <h4 class="title">LEADERSHIP</h4>
          <p class="txt">
            Our rich history spans 75+ years of dedication to the imaging
            industry, but our everyday work is devoted to our partners’ success.
          </p>
          <div class="box main__box">
            <div class="swiper-button-prev prev">
              <i class="bx bx-chevron-left"></i>
            </div>
            <div class="swiper-pagination pager"></div>
            <div class="swiper-button-next next">
              <i class="bx bx-chevron-right"></i>
            </div>
          </div>
        </div>
      </div>
      <div ref="slider" class="swiper">
        <div class="swiper-wrapper">
          <div v-for="data in team" :key="data.id" class="swiper-slide">
            <div class="img">
              <img :src="$store.state.base + data.image" alt="" class="pic" />
            </div>
            <p class="name">{{ data.name && data.name.en }}</p>
            <p class="status">
              {{ data.position && data.position.en }}
            </p>
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
  name: 'AboutTeam',

  mounted() {
    new Swiper(this.$refs.slider, {
      slidesPerView: 2.3,
      spaceBetween: 8,
      pagination: {
        el: '.pager',
        type: 'fraction',
      },
      navigation: {
        nextEl: '.next',
        prevEl: '.prev',
      },
      breakpoints: {
        767: {
          spaceBetween: 40,
        },
      },
    })
  },

  props: {
    team: {
      type: Array,
      required: true,
    },
  },
}
</script>

<style scoped>
.container {
  padding-top: 200px;
}
.grid {
  display: flex;
  overflow-x: hidden;
}
.content {
  border-left: 1px solid var(--border);
  width: 30%;
  padding-left: calc((100% - 1780px) / 2);
  position: relative;
  background: white;
  z-index: 99;
}
.liner {
  border-left: 1px solid var(--border);
  height: 100%;
  padding-left: 24px;
  margin-left: -1px;
}
.swiper {
  width: 70%;
  overflow: visible;
}
.swiper-pagination,
.swiper-button-prev,
.swiper-button-next {
  position: static;
  height: unset;
  width: unset;
  margin: 0;
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
.box {
  position: static;
  left: 24px;
  bottom: 2rem;
  display: flex;
  align-items: center;
  gap: 2rem;
}
.content {
  position: relative;
}
.pic {
  width: 100%;
  height: 550px;
  object-fit: cover;
  margin-bottom: 32px;
}
.name {
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
  margin-bottom: 1rem;
  text-transform: uppercase;
}
.status {
  font-weight: 400;
  font-size: 18px;
  line-height: 28px;
  color: var(--dark-grey);
  max-width: 60%;
}
.title {
  font-weight: 500;
  font-size: 48px;
  line-height: 58px;
  margin-bottom: 24px;
}
.txt {
  text-transform: uppercase;
  max-width: 320px;
  font-weight: 500;
  font-size: 18px;
  line-height: 30px;
  margin-bottom: 150px;
}
.mobile__box {
  display: none;
}
@media screen and (max-width: 992px) {
  .container {
    padding-top: 100px;
  }
  .grid {
    flex-direction: column;
  }
  .title {
    font-weight: 500;
    font-size: 18px;
    line-height: 22px;
    margin-bottom: 0.5rem;
  }
  .txt {
    font-weight: 500;
    font-size: 10px;
    line-height: 19px;
    margin-bottom: 1rem;
  }
  .content {
    width: 100%;
  }
  .swiper {
    width: 100%;
  }
  .pic {
    height: 230px;
    margin-bottom: 1rem;
  }
  .name {
    font-weight: 500;
    font-size: 14px;
    line-height: 18px;
    margin-bottom: 0.4rem;
    padding-left: 12px;
  }
  .status {
    font-weight: 400;
    font-size: 12px;
    line-height: 17px;
    max-width: 100%;
    padding-left: 12px;
  }
  .box {
    justify-content: start;
    padding-bottom: 24px;
  }
}
</style>

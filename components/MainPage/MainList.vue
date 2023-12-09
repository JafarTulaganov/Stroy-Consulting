<template>
  <div class="main">
    <div class="container">
      <h4 class="section__title">
        LIST OF THE BEST PUBLISHED <br />
        ARTICLES BY OUR TEAM
      </h4>
      <div ref="slider" class="swiper">
        <div class="swiper-wrapper">
          <div v-for="data in news" :key="data.id" class="swiper-slide">
            <div class="cardo">
              <router-link class="link" :to="`/news/${data.slug}`">
                <div class="img">
                  <img
                    :src="$store.state.base + data.image"
                    alt=""
                    class="pic"
                  />
                </div>
                <div class="content">
                  <p class="date">
                    <i class="bx bx-time-five"></i>

                    2022.10.02
                  </p>
                  <p class="txt">{{ data.title.en }}</p>
                </div>
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="grid">
      <div class="container sec__con">
        <div class="dot__up-left"></div>
        <div class="dot__up-right"></div>
        <div class="dot__down-left"></div>
        <div class="dot__down-right"></div>
        <div class="item">
          <img
            src="@/assets/img/prev.svg"
            alt=""
            class="arrow arrow-prev swiper-button-prev"
          />
        </div>
        <div class="item">
          <router-link to="news" class="art">all our articles</router-link>
        </div>
        <div class="item">
          <img
            src="@/assets/img/next.svg"
            alt=""
            class="arrow arrow-next swiper-button-next"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
/* eslint-disable */

import Swiper from 'swiper/swiper-bundle.js'
import 'swiper/swiper-bundle.min.css'
import NewsCard from '../NewsCard.vue'

export default {
  name: 'MainList',
  mounted() {
    new Swiper(this.$refs.slider, {
      slidesPerView: 1.5,
      spaceBetween: 8,
      autoplay: {
        delay: 3000,
      },
      navigation: {
        nextEl: '.arrow-next',
        prevEl: '.arrow-prev',
      },
      breakpoints: {
        992: {
          spaceBetween: 48,
          slidesPerView: 3.5,
        },
      },
    })
    function formatDate(apiDate) {
      var dateParts = apiDate.created_at.split('-')
      var jsDate = new Date(
        dateParts[0],
        dateParts[1] - 1,
        dateParts[2].substr(0, 2)
      )

      return jsDate
    }
  },
  components: { NewsCard },

  props: {
    news: {
      type: Array,
      required: true,
    },
  },
}
</script>

<style scoped>
.main {
  overflow: hidden;
  padding: 60px 0 0 0;
}
.swiper {
  overflow: visible;
}
.swiper {
  padding: 0 24px;
}
.swiper-wrapper {
  padding-bottom: 56px;
}
.arrow {
  position: static;
  width: 120px;
  margin: 0;
  padding: 0;
}
.grid {
  border-top: 1px solid var(--border);
  border-bottom: 1px solid var(--border);
}
.sec__con {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  align-items: center;
  position: relative;
  padding: 0;
}
.item {
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  border-right: 1px solid var(--border);
  padding: 28px 0;
  height: 100%;
}
.item:last-child {
  border-right: none;
}
.art {
  font-weight: 500;
  font-size: 24px;
  line-height: 32px;
  text-transform: uppercase;
  color: black;
}
.pic {
  width: 100%;
  height: 450px;
  object-fit: cover;
}
.content {
  padding: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 1rem;
  text-align: center;
  background: var(--light-grey);
}
.date {
  font-weight: 400;
  font-size: 18px;
  line-height: 20px;
  display: flex;
  align-items: center;
  gap: 10px;
  color: var(--grey);
}
.txt {
  font-weight: 500;
  font-size: 18px;
  line-height: 28px;
  color: black;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
}
.link:hover .pic {
  transform: scale(1.1);
}
.img {
  overflow: hidden;
}
.pic {
  transition: 0.3s;
}

@media screen and (max-width: 992px) {
  .art {
    font-weight: 500;
    font-size: 12px;
    line-height: 16px;
  }
  .arrow {
    width: 50px;
  }
  .pic {
    height: 230px;
  }
  .content {
    padding: 16px 10px;
    gap: 0.5rem;
  }
  .date {
    font-weight: 400;
    font-size: 10px;
    line-height: 16px;
  }
  .txt {
    font-weight: 500;
    font-size: 14px;
    line-height: 20px;
  }
}
</style>

<template>
  <div>
    <div class="container">
      <h4 class="title section__title">Awards</h4>
      <div ref="slider" class="swiper">
        <div class="swiper-wrapper">
          <div class="swiper-slide" data-swiper-parallax="-23%">
            <div class="grid">
              <div class="content">
                <p data-swiper-parallax="-1000" class="date">2018</p>
                <p data-swiper-parallax="-1300" class="info__sub">
                  As we continue to grow, we want to empower communitieS
                </p>
                <p data-swiper-parallax="-1600" class="info__txt">
                  Foreseeing the end of the war, Eimac Products began to expand
                  its expertise to include
                </p>
              </div>
              <div class="img__wrap">
                <div data-swiper-parallax="-1900" class="img">
                  <img src="@/assets/img/about.jpg" alt="" class="pic" />
                </div>
                <p data-swiper-parallax="-2300" class="txt">
                  Despite our young age, Varex Imaging Corporation has a rich
                  history of experience dating back to the 1930s, when Jack
                  McCullough and Bill Eitel created Eimac Products. Eimac
                  quickly became known for producing high-quality, high-power
                  transmitter tubes and relocated its manufacturing operations
                  to Utah after receiving a large military contract in 1941
                </p>
              </div>
            </div>
          </div>
          <div class="swiper-slide" data-swiper-parallax="-23%">
            <div class="grid">
              <div class="content">
                <p data-swiper-parallax="-1000" class="date">2018</p>
                <p data-swiper-parallax="-1300" class="info__sub">
                  As we continue to grow, we want to empower communitieS
                </p>
                <p data-swiper-parallax="-1600" class="info__txt">
                  Foreseeing the end of the war, Eimac Products began to expand
                  its expertise to include
                </p>
              </div>
              <div class="img__wrap">
                <div data-swiper-parallax="-1900" class="img">
                  <img src="@/assets/img/hotspur.jpg" alt="" class="pic" />
                </div>
                <p data-swiper-parallax="-2100" class="txt">
                  Despite our young age, Varex Imaging Corporation has a rich
                  history of experience dating back to the 1930s, when Jack
                  McCullough and Bill Eitel created Eimac Products. Eimac
                  quickly became known for producing high-quality, high-power
                  transmitter tubes and relocated its manufacturing operations
                  to Utah after receiving a large military contract in 1941
                </p>
              </div>
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
</template>

<script>
/* eslint-disable */

import Swiper from 'swiper/swiper-bundle.js'
import 'swiper/swiper-bundle.min.css'

export default {
  name: 'AboutAwards',

  mounted() {
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
      parallax: true,
      speed: 1500,
    })
  },
}
</script>

<style scoped>
.title {
  padding-top: 200px;
}
.date {
  font-weight: 500;
  font-size: 48px;
  line-height: 58px;
  margin-bottom: 24px;
}
.info__sub {
  font-weight: 400;
  font-size: 24px;
  line-height: 32px;
  text-transform: uppercase;
  margin-bottom: 24px;
  max-width: 320px;
}
.info__txt {
  font-weight: 400;
  font-size: 18px;
  line-height: 28px;
  color: var(--grey);
  max-width: 320px;
}
.content {
  padding-left: 24px;
  position: relative;
}
.img {
  padding-right: 24px;
}
.pic {
  width: 100%;
  height: 550px;
  object-fit: cover;
  margin-bottom: 24px;
}
.grid {
  display: grid;
  grid-template-columns: 30% 70%;
}
.txt {
  font-weight: 400;
  font-size: 18px;
  line-height: 28px;
  color: var(--dark-grey);
  max-width: 1120px;
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
  position: absolute;
  left: 24px;
  bottom: 2rem;
  display: flex;
  align-items: center;
  gap: 2rem;
}
.container {
  padding-bottom: 200px;
}
@media screen and (max-width: 992px) {
  .section__title {
    padding-top: 100px;
  }
  .grid {
    grid-template-columns: repeat(1, 1fr);
  }
  .img {
    padding-right: 0;
    padding-top: 8px;
  }
  .date {
    font-weight: 500;
    font-size: 24px;
    line-height: 29px;
    margin-bottom: 0.5rem;
  }
  .content {
    padding-left: 0;
  }
  .info__sub {
    font-weight: 400;
    font-size: 16px;
    line-height: 26px;
    margin-bottom: 0.5rem;
  }
  .info__txt {
    font-weight: 400;
    font-size: 12px;
    line-height: 16px;
  }
  .pic {
    height: 265px;
  }
  .txt {
    font-weight: 400;
    font-size: 10px;
    line-height: 18px;
  }
  .box {
    position: static;
    padding-top: 24px;
    justify-content: center;
  }
  .container {
    padding-bottom: 40px;
  }
  .swiper {
    padding: 0 12px;
  }
}
</style>

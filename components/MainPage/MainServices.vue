<template>
  <div>
    <div class="container">
      <h4 class="section__title title">
        THE SERVICES OFFERED BY OUR TEAM ARE PROVIDED BY THEIR MASTERS
      </h4>
      <div class="grid">
        <div class="dot__up-left"></div>
        <div class="dot__up-right"></div>
        <div class="dot__down-left"></div>
        <div class="dot__down-right"></div>

        <div v-for="data in services" :key="data.id" class="item">
          <nuxt-link to="/services">
            <p class="item__title">{{ data.title.en }}</p>
            <div class="img">
              <img
                v-if="data.images && data.images.length"
                :src="$store.state.base + data.images[0].image"
                alt=""
                class="pic"
              />
            </div>
            <p class="txt" v-html="data.description.en"></p>
          </nuxt-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MainServices',

  props: {
    services: {
      type: Array,
      required: true,
    },
  },

  mounted() {},

  methods: {},
}
</script>

<style scoped>
.title {
  margin-bottom: 40px;
}
.container {
  padding: 60px 0;
  margin-top: 60px;
}
.grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  border-top: 1px solid var(--border);
  border-bottom: 1px solid var(--border);
  position: relative;
}
.item {
  padding: 40px 20px;
  border-right: 1px solid var(--border);
}
.item:last-child {
  border-right: none;
}
.pic {
  width: 100%;
  height: 670px;
  object-fit: cover;
}
.sec__pic {
  height: 544px;
}
.item__title {
  font-family: var(--angel);
  font-weight: 400;
  font-size: 48px;
  line-height: 64px;
  color: black;
  margin-bottom: 24px;
  text-align: center;
}
.txt {
  font-weight: 400;
  font-size: 22px;
  line-height: 32px;
  color: #9c9c9c;
  text-align: center;
  margin-top: 24px;
}
.item:nth-child(2n) .pic {
  height: 544px;
}
@media screen and (max-width: 992px) {
  .grid {
    grid-template-columns: repeat(2, 1fr);
  }
}
@media screen and (max-width: 992px) {
  .grid {
    grid-template-columns: repeat(1, 1fr);
  }
  .item__title {
    font-weight: 400;
    font-size: 32px;
    line-height: 32px;
  }
  .pic {
    height: 412px;
  }
  .txt {
    font-weight: 400;
    font-size: 12px;
    line-height: 16px;
  }
  .item {
    border-right: none;
    padding-top: 30px;
    border-bottom: 1px solid var(--border);
  }
  .item:last-child {
    border-bottom: none;
  }
}
</style>

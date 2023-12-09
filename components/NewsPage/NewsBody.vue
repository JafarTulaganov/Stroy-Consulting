<template>
  <div class="wrap">
    <div class="container">
      <div class="items">
        <div v-for="data in news" :key="data.id" class="cardo">
          <nuxt-link class="link" :to="`/news/${data.slug}`">
            <div class="img">
              <img
                v-if="data.image && data.image.length"
                :src="$store.state.base + data.image"
                alt=""
                class="pic"
              />
            </div>
            <div class="content">
              <p class="date">
                <i class="bx bx-time-five"></i>
                {{ format_date(data.created_at) }}
              </p>
              <p class="txt">{{ data.title && data.title.en }}</p>
            </div>
          </nuxt-link>
        </div>
      </div>
      <div class="button">
        <button class="btn linker">
          <div class="link__con">
            Load more <i class="bx bx-right-arrow-alt"></i>
          </div>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
/* eslint-disable */

export default {
  name: 'NewsBody',

  props: {
    news: {
      type: Array,
      required: true,
    },
  },

  data() {
    return {}
  },

  methods: {
    format_date: (date) => {
      var full_date = new Date(Date.parse(date))
      var day = full_date.getDate()
      var month = full_date.getMonth() + 1
      var year = full_date.getFullYear()

      return day + '.' + month + '.' + year
    },
  },

  mounted() {},
}
</script>

<style scoped>
.container {
  padding-top: 200px !important;
  padding-bottom: 144px !important;
}
.items {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
}
.img::after {
  background: #00000010;
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 0%;
  height: 0%;
  transition: 1s;
}
.item:hover .img::after {
  height: 100%;
  width: 100%;
}
.item:hover .linko::after {
  width: 100%;
}
.linker {
  font-weight: 500;
  font-size: 24px;
  line-height: 32px;
  padding: 24px 80px;
  background: var(--gold);
  color: black;
  display: inline-flex;
  align-items: center;
  gap: 1rem;
  position: relative;
  overflow: hidden;
  margin-bottom: 144px;
  border-radius: 0;
}
.linker::after {
  background: black;
  border: 1px solid black;
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  transition: 0.5s;
  transform: translateX(-101%);
  z-index: 1;
}
.linker:hover.linker::after {
  transform: translateX(0);
}
.linker:hover .link__con {
  color: var(--gold);
}
.link__con {
  position: relative;
  z-index: 2;
}
.linker:focus {
  outline: none;
  box-shadow: none;
}
.linker i {
  transform: rotate(-45deg);
}
.button {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 64px 0 0 0;
}
.pic {
  width: 100%;
  height: 350px;
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
  .container {
    padding-top: 68px !important;
  }
  .row {
    flex-direction: column-reverse !important;
  }
  .item {
    padding: 0;
  }
  .pic {
    height: 320px;
  }
  .name {
    font-weight: 500;
    font-size: 16px;
    line-height: 26px;
    margin-bottom: 0.5rem;
  }
  .txt {
    font-weight: 400;
    font-size: 14px;
    line-height: 18px;
    margin-bottom: 32px;
  }
  .linko {
    font-weight: 500;
    font-size: 16px;
    line-height: 19px;
  }
  .link {
    font-weight: 500;
    font-size: 14px;
    line-height: 20px;
    margin-bottom: 0;
  }
  .button {
    padding-top: 48px;
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
    margin: 0;
  }
  .items {
    grid-template-columns: repeat(2, 1fr);
    gap: 10px;
  }
  .linker {
    font-size: 16px;
    padding: 1rem 4rem;
    margin: 0;
  }
}
</style>

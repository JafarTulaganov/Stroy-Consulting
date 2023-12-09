<template>
  <div>
    <div class="container">
      <h4 class="section__title">MORE NEWS</h4>
      <div class="grid">
        <div v-for="data in news" :key="data.id" class="item">
          <div class="cardo">
            <router-link class="link" :to="`/news/${data.slug}`">
              <div class="img">
                <img :src="$store.state.base + data.image" alt="" class="pic" />
              </div>
              <div class="content">
                <p class="date">
                  <i class="bx bx-time-five"></i>
                  {{ format_date(data.created_at) }}
                </p>
                <p class="txt">{{ data.title.en }}</p>
              </div>
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
/* eslint-disable */

export default {
  name: 'MoreNews',

  props: {
    news: {
      type: Array,
      required: true,
    },
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
}
</script>

<style scoped>
.container {
  padding: 200px 0 60px 0;
}
.grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
  padding: 0 24px;
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
    padding: 100px 12px 0 12px;
  }
  .grid {
    grid-template-columns: repeat(1, 1fr);
    padding: 0 12px 0 12px;
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

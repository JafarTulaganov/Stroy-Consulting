<template>
  <div>
    <div class="container">
      <h2 class="title">{{ post.title && post.title.en }}</h2>
      <p class="sub"></p>
      <div class="img">
        <img :src="$store.state.base + post.image" alt="" class="pic" />
      </div>
      <p class="txt" v-html="post.description && post.description.en"></p>
    </div>
    <MoreNews class="more" :news="latest" />
  </div>
</template>

<script>
import MoreNews from '@/components/MoreNews.vue'
import newsApi from '@/api/news'

export default {
  name: 'NewsInner',
  components: { MoreNews },

  async asyncData({ $axios }) {
    const latest = await newsApi.getLatest($axios)

    return {
      latest,
    }
  },

  data() {
    return {
      post: {},
      latest: [],
    }
  },

  async fetch() {
    const res = await newsApi.getNew(this.$route.params.slug, this.$axios)

    this.post = res
  },
}
</script>

<style scoped>
.container {
  padding: 200px 24px 0 24px;
}
.more {
  padding-bottom: 100px;
}
.title {
  font-weight: 500;
  font-size: 62px;
  line-height: 78px;
  margin: 0.5rem;
  text-transform: uppercase;
  max-width: 1200px;
  position: relative;
}
.title::after {
  background: white;
  content: '';
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
  height: 0;
  animation: zero 1.5s;
}
.sub {
  font-weight: 400;
  font-size: 22px;
  line-height: 36px;
  color: var(--dark-grey);
  max-width: 1200px;
  margin-bottom: 40px;
}
.pic {
  width: 100%;
  height: 550px;
  object-fit: cover;
  margin-bottom: 60px;
}
.txt {
  font-weight: 400;
  font-size: 22px;
  line-height: 36px;
  margin-bottom: 24px;
  max-width: 1200px;
}
@keyframes zero {
  0% {
    height: 100%;
  }
  100% {
    height: 0;
  }
}
@media screen and (max-width: 992px) {
  .container {
    padding-top: 140px;
  }
  .title {
    font-size: 24px;
    line-height: 150%;
  }
  .sub,
  .txt {
    font-size: 16px;
    line-height: 150%;
  }
  .pic {
    height: 320px;
  }
  .more {
    padding-bottom: 100px;
  }
}
</style>

<template>
  <div>
    <MainHome :title="title" :subtitle="subtitle" />
    <NewsBody :news="news.data" />
  </div>
</template>

<script>
import MainHome from '@/components/MainPage/MainHome.vue'
import NewsBody from '@/components/NewsPage/NewsBody.vue'
import newsApi from '@/api/news'

export default {
  name: 'NewsPage',
  components: { MainHome, NewsBody },

  async asyncData({ $axios }) {
    const news = await newsApi.getNews($axios)

    return {
      news,
    }
  },

  data() {
    return {
      title: [
        {
          title: 'NEWS & EVENTS',
        },
      ],
      subtitle: [
        {
          subtitle:
            'We are a leading innivator, developer, and manufacturerof X-ray imaging component solutions worldwide',
        },
      ],
      date: {},
    }
  },

  head() {
    return {
      title: 'News | Alpha Developments and Lettings',
    }
  },
}
</script>

<style scoped></style>

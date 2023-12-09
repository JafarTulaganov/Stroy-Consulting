/* eslint-disable */

export default {
  async getNews(axios) {
    try {
      let res

      if (axios) {
        res = await axios.get('/posts')
      } else {
        res = await $nuxt.$axios.get('/posts')
      }
      return res.data.data
    } catch (e) {
      console.log(e)
    }
  },

  async getLatest(axios) {
    try {
      let res

      if (axios) {
        res = await axios.get('/posts/latest')
      } else {
        res = await $nuxt.$axios.get('/posts/latest')
      }
      return res.data.data
    } catch (e) {
      console.log(e)
    }
  },

  async getNew(slug, axios) {
    try {
      let res

      if (axios) {
        res = await axios.get(`/posts/${slug}`)
      } else {
        res = await $nuxt.$axios.get(`/posts/${slug}`)
      }
      return res.data.data
    } catch (e) {
      console.log(e)
    }
  },
}

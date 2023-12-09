/* eslint-disable */

export default {
  async getProjects(axios) {
    try {
      let res

      if (axios) {
        res = await axios.get('/projects')
      } else {
        res = await $nuxt.$axios.get('/projects')
      }

      return res.data.data
    } catch (e) {
      console.log(e)
    }
  },
}

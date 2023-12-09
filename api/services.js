/* eslint-disable */

export default {
  async getServices(axios) {
    try {
      let res

      if (axios) {
        res = await axios.get('/services')
      } else {
        res = await $nuxt.$axios.get('/services')
      }
      return res.data.data.data
    } catch (e) {
      console.log(e)
    }
  },

  async getProject(axios) {
    try {
      let res

      if (axios) {
        res = await axios.get('/services')
      } else {
        res = await $nuxt.$axios.get('/services')
      }
      return res.data.data.data.projects
    } catch (e) {
      console.log(e)
    }
  },
}

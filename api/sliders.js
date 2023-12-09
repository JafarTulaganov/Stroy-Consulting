/* eslint-disable */

export default {
  async getSliders(axios) {
    try {
      let res

      if (axios) {
        res = await axios.get('/sliders')
      } else {
        res = await $nuxt.$axios.get('/sliders')
      }

      return res.data.data
    } catch (e) {
      console.log(e)
    }
  },
}

/* eslint-disable */

export default {
  async getPartners(axios) {
    try {
      let res

      if (axios) {
        res = await axios.get('/partners')
      } else {
        res = await $nuxt.$axios.get('/partners')
      }

      // console.log(res)
      return res.data.data
    } catch (e) {
      console.log(e)
    }
  },
}

/* eslint-disable */

export default {
  async getCountries(axios) {
    try {
      let res

      if (axios) {
        res = await axios.get('/get/countries')
      } else {
        res = await $nuxt.$axios.get('/get/countries')
      }

      // console.log(res)
      return res.data.data
    } catch (e) {
      console.log(e)
    }
  },
}

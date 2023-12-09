/* eslint-disable */

export default {
  async getTeam(axios) {
    try {
      let res

      if (axios) {
        res = await axios.get('/our-team')
      } else {
        res = await $nuxt.$axios.get('/our-team')
      }

      return res.data.data
    } catch (e) {
      console.log(e)
    }
  },
}

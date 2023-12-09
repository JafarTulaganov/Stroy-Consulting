/* eslint-disable */

export default {
  async sendCallback(formData) {
    try {
      const res = await $nuxt.$axios.post('/callback', formData)
      console.log(res)
      return res
    } catch (e) {
      console.log(e)
    }
  },
}

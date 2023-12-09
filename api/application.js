/* eslint-disable */

export default {
  async sendApplication(formData) {
    try {
      const res = await $nuxt.$axios.post('/feedback', formData)
      console.log(res)
      return res
    } catch (e) {
      console.log(e)
    }
  },
}

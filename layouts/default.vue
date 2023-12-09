<template>
  <div>
    <TheNavbar />
    <transition name="home">
      <nuxt />
    </transition>
    <TheFooter />
  </div>
</template>

<script>
import TheNavbar from '@/components/TheNavbar'
import TheFooter from '@/components/TheFooter'

export default {
  name: 'DefalutLayout',

  components: {
    TheNavbar,
    TheFooter,
  },
}
</script>

<style></style>

<template>
  <div>
    <div class="container">
      <h1 v-for="title in title" :key="title.title" class="title">
        {{ title.title }}
      </h1>
      <p v-for="subtitle in subtitle" :key="subtitle.subtitle" class="sub">
        {{ subtitle.subtitle }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MainHome',

  props: {
    title: {
      type: Array,
      required: true,
    },
    subtitle: {
      type: Array,
      required: true,
    },
  },
}
</script>

<style scoped>
.title {
  font-family: var(--angel);
  font-weight: 400;
  font-size: 80px;
  line-height: 96px;
  text-align: center;
  text-transform: uppercase;
  max-width: 80%;
  margin: 0 auto;
  padding-top: 200px;
  margin-bottom: 1rem;
  position: relative;
}
.title::after {
  background: white;
  content: '';
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
  height: 0;
  animation: zero 1.5s;
}
.sub {
  font-weight: 400;
  font-size: 24px;
  line-height: 32px;
  text-align: center;
  text-transform: uppercase;
  max-width: 60%;
  margin: 0 auto;
  position: relative;
}
.sub::after {
  background: white;
  content: '';
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
  height: 0;
  animation: zero 0.5s;
}
@keyframes zero {
  0% {
    height: 100%;
  }
  100% {
    height: 0;
  }
}
@media screen and (max-width: 1000px) {
  .title {
    padding-top: 140px;
    font-weight: 400;
    font-weight: 400;
    font-size: 26px;
    line-height: 36px;
    margin: 0 auto;
    margin-bottom: 0.5rem;
    max-width: 100%;
  }
  .sub {
    font-weight: 400;
    font-size: 12px;
    line-height: 16px;
    max-width: 90%;
  }
}
</style>

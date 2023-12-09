<template>
  <div class="wrap">
    <div class="container">
      <h4 class="big">Get in touch</h4>
      <p class="sub">
        Interested in the the next generation of x-ray imaging products,
        technologies, concepts, and the markets where they are going to be
        disruptive? Talk to Varex.
      </p>
      <nuxt-link class="link" to="/contacts">
        <p class="link__con">Contact <i class="bx bx-right-arrow-alt"></i></p>
      </nuxt-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MainContact',
}
</script>

<style scoped>
.wrap {
  position: relative;
  background: white;
  z-index: 99;
}
.big {
  font-weight: 400;
  font-size: 100px;
  line-height: 100px;
  font-family: var(--angel);
  text-align: center;
  margin-bottom: 26px;
  margin-top: 200px;
}
.sub {
  font-weight: 400;
  font-size: 32px;
  line-height: 44px;
  text-align: center;
  max-width: 80%;
  margin: 0 auto;
  margin-bottom: 64px;
}
.container {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}
.link {
  font-weight: 500;
  font-size: 24px;
  line-height: 32px;
  padding: 24px 80px;
  background: var(--gold);
  color: black;
  display: inline-flex;
  align-items: center;
  gap: 1rem;
  position: relative;
  overflow: hidden;
  margin-bottom: 144px;
}
.link::after {
  background: black;
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  transition: 0.5s;
  transform: translateX(-102%);
  z-index: 1;
}
.link:hover.link::after {
  transform: translateX(0);
}
.link:hover .link__con {
  color: var(--gold);
}
.link__con {
  position: relative;
  z-index: 2;
}
.link i {
  transform: rotate(-45deg);
}
@media screen and (max-width: 992px) {
  .big {
    font-weight: 400;
    font-size: 26px;
    line-height: 26px;
    margin-top: 100px;
    margin-bottom: 0.5rem;
  }
  .sub {
    font-weight: 400;
    font-size: 12px;
    line-height: 18px;
    margin-bottom: 24px;
  }
  .link {
    font-weight: 500;
    font-size: 14px;
    line-height: 20px;
    padding: 1rem 20px;
    margin-bottom: 70px;
  }
}
</style>

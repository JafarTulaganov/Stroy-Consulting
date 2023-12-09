<template>
  <div class="main">
    <div class="creep">
      <div class="wrap">
        <h4 class="section__title title">BRIEFLY ABOUT OUR TEAM</h4>
        <p class="sub">
          Volutpat cras consectetur tellus congue tellus sapien, facilisis
          tortor. Nulla tristique pellentesque nisi nisi, elementum rhoncus.
          Accumsan cursus eu egestas fermentum augue. Pharetra sem tempor rutrum
          viverra amet ullamcorper fringilla aliquet.
        </p>
        <router-link class="link" to="/about">
          <p class="link__con">
            Read more <i class="bx bx-right-arrow-alt"></i>
          </p>
        </router-link>
      </div>
      <div class="img">
        <img src="@/assets/img/about.jpg" alt="" class="pic" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MainAbout',
}
</script>

<style scoped>
.main {
  /* align-items: center; */
  padding: 350px 0 120px 0;
}
.creep {
  position: relative;
  display: flex;
  width: 93%;
}
.title {
  text-align: start;
  max-width: initial;
  max-width: 70%;
  margin: 0;
  margin-bottom: 40px;
}
.wrap {
  background: var(--gold);
  width: 70%;
  padding: 150px 100px;
}
.sub {
  font-weight: 400;
  font-size: 20px;
  line-height: 32px;
  margin-bottom: 54px;
  max-width: 600px;
}
.link {
  font-weight: 500;
  font-size: 22px;
  line-height: 32px;
  padding: 16px 24px;
  background: black;
  color: var(--gold);
  display: inline-flex;
  align-items: center;
  gap: 1rem;
  position: relative;
  overflow: hidden;
}
.link::after {
  background: var(--gold);
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  transition: 0.5s;
  transform: translateX(-100%);
  z-index: 1;
}
.link:hover.link::after {
  transform: translateX(0);
}
.link:hover .link__con {
  color: black;
}
.link__con {
  position: relative;
  z-index: 2;
}
.link i {
  transform: rotate(-45deg);
}
.img {
  position: absolute;
  z-index: 9;
  right: 0;
  top: -60px;
}
.pic {
  width: 100%;
  height: 670px;
  object-fit: cover;
}
@media screen and (max-width: 1700px) {
  .pic {
    height: 450px;
  }
}
@media screen and (max-width: 1440px) {
  .wrap {
    padding: 48px;
  }
  .title {
    font-size: 38px;
    line-height: 42px;
  }
  .sub {
    font-size: 16px;
    max-width: 60%;
  }
}
@media screen and (max-width: 1200px) {
  .main {
    padding-top: 120px;
    padding-bottom: 0;
  }
  .img {
    position: static;
  }
  .creep {
    width: 100%;
    flex-direction: column-reverse;
  }
  .pic {
    height: 325px;
  }
  .wrap {
    width: 100%;
    padding: 1rem 10px;
  }
}
@media screen and (max-width: 992px) {
  .section__title {
    margin-bottom: 0.5rem;
    font-weight: 400;
    font-size: 20px;
    line-height: 20px;
  }
  .sub {
    font-weight: 400;
    font-size: 12px;
    line-height: 16px;
    margin-bottom: 24px;
  }
  .link {
    font-weight: 500;
    font-size: 14px;
    line-height: 20px;
  }
}
</style>

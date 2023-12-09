<template>
  <div class="wrap">
    <div class="container">
      <h4 class="section__title title">
        THESE BRIEF STATISTICS WILL REPLACE MANY PRAISES
      </h4>
      <div class="grid">
        <div class="dot__up-left"></div>
        <div class="dot__up-right"></div>
        <div class="dot__down-left"></div>
        <div class="dot__down-right"></div>

        <div class="item">
          <div class="nums">
            <p class="num">+100</p>
            <p class="txt">TOTAL AREA OF PROJECTS, M2</p>
          </div>
          <div class="img">
            <img src="@/assets/img/stat-1.jpg" alt="" class="pic" />
          </div>
        </div>
        <div class="item sec__item">
          <div class="img">
            <img src="@/assets/img/stat-2.jpg" alt="" class="pic" />
          </div>
          <div class="nums">
            <p class="num">+18</p>
            <p class="txt">years on the market</p>
          </div>
        </div>
        <div class="item">
          <div class="nums">
            <p class="num">+36</p>
            <p class="txt">Finished projects</p>
          </div>
          <div class="img">
            <img src="@/assets/img/stat-3.jpg" alt="" class="pic" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MainStat',
}
</script>

<style scoped>
.container {
  padding: 60px 0 0 0;
}
.title {
  margin-bottom: 40px;
}
.grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  border-top: 1px solid var(--border);
  border-bottom: 1px solid var(--border);
  position: relative;
}
.item {
  padding: 64px 20px 0 20px;
  border-right: 1px solid var(--border);
}
.sec__item {
  padding: 0 20px 64px 20px;
}
.item:last-child {
  border-right: none;
}
.pic {
  width: 100%;
  height: 530px;
  object-fit: cover;
}
.num {
  font-family: var(--angel);
  font-weight: 400;
  font-size: 200px;
  line-height: 200px;
  text-align: center;
  margin-bottom: 1rem;
}
.txt {
  font-weight: 400;
  font-size: 26px;
  line-height: 31px;
  text-align: center;
  color: var(--grey);
  margin-bottom: 40px;
}
.sec__item .txt {
  margin-bottom: 0;
}
.sec__item .img {
  margin-bottom: 30px;
}
@media screen and (max-width: 992px) {
  .grid {
    grid-template-columns: repeat(2, 1fr);
  }
}
@media screen and (max-width: 992px) {
  .num {
    font-weight: 400;
    font-size: 60px;
    line-height: 60px;
    margin: 0.5rem;
  }
  .txt {
    font-weight: 400;
    font-size: 12px;
    line-height: 15px;
    margin-bottom: 20px !important;
  }
  .grid {
    grid-template-columns: repeat(1, 1fr);
  }
  .item {
    border-right: 0;
    border-bottom: 1px solid var(--border);
    padding: 32px 22px;
  }
  .item:last-child {
    border-bottom: none;
  }
  .sec__item {
    display: flex;
    flex-direction: column-reverse;
  }
  .sec__item .img {
    margin: 0;
  }
  .pic {
    height: 360px;
  }
}
</style>

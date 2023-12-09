<template>
  <div class="wrap">
    <div class="container">
      <div class="left">
        <p class="txt">© 2022. Все права защищены</p>
      </div>
      <div class="right">
        <div class="item">
          <a href="">
            <p><i class="bx bxl-facebook"></i>Facebook</p>
          </a>
        </div>
        <div class="item">
          <a href="">
            <p><i class="bx bxl-instagram"></i>Instagram</p>
          </a>
        </div>
        <div class="item">
          <a href="">
            <p><i class="bx bxl-telegram"></i>Telegram</p>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TheFooter',
}
</script>

<style scoped>
.wrap {
  background: var(--border);
  position: relative;
  z-index: 99;
}
.container {
  padding: 34px 24px !important;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
}
.right {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
}
.txt {
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
}
.item {
  border-right: 1px solid black;
  padding: 0 32px;
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
}
.item p {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: black;
}
.item:last-child {
  border-right: none;
}
@media screen and (max-width: 992px) {
  .container {
    flex-direction: column;
  }
  .left {
    margin-bottom: 24px;
  }
  .item {
    padding: 0 10px;
    border: none;
  }
  .txt {
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
  }
  .item p {
    font-weight: 500;
    font-size: 16px;
    line-height: 20px;
  }
  .right {
    justify-content: center;
    gap: 1rem;
  }
}
</style>

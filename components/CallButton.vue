<template>
  <div class="wrap">
    <button @click="showModal = true" class="button">
      <p class="txt">Free Call</p>
    </button>
  </div>
</template>

<script>
export default {
  name: 'CallButton',
}
</script>

<style scoped>
.button {
  width: 200px;
  height: 200px;
  border-radius: 50%;
  background: var(--gold);
  position: fixed;
  bottom: 24px;
  right: 10%;
  z-index: 99;
  overflow: hidden;
}
.button::after {
  background: black;
  content: '';
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  transition: 0.5s;
  transform: scale(0);
  border-radius: 50%;
}
.txt {
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
  position: relative;
  z-index: 2;
}
.button:hover {
  color: var(--gold);
}
.button:hover.button::after {
  transform: scale(1);
}
@media screen and (max-width: 992px) {
  .button {
    display: none;
  }
}
</style>

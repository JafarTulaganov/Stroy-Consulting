<template>
  <div>
    <nuxt-link class="link" to="/news/id">
      <div class="img">
        <img src="@/assets/img/list-1.jpg" alt="" class="pic" />
      </div>
      <div class="content">
        <p class="date"><i class="bx bx-time-five"></i> about 10 hours ago</p>
        <p class="txt"></p>
      </div>
    </nuxt-link>
  </div>
</template>

<script>
export default {
  name: 'NewsCard',
}
</script>

<style scoped>
.pic {
  width: 100%;
  height: 450px;
  object-fit: cover;
}
.content {
  padding: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 1rem;
  text-align: center;
  background: var(--light-grey);
}
.date {
  font-weight: 400;
  font-size: 18px;
  line-height: 20px;
  display: flex;
  align-items: center;
  gap: 10px;
  color: var(--grey);
}
.txt {
  font-weight: 500;
  font-size: 24px;
  line-height: 32px;
  color: black;
}

@media screen and (max-width: 992px) {
  .pic {
    height: 230px;
  }
  .content {
    padding: 16px 10px;
    gap: 0.5rem;
  }
  .date {
    font-weight: 400;
    font-size: 10px;
    line-height: 16px;
  }
  .txt {
    font-weight: 500;
    font-size: 14px;
    line-height: 20px;
  }
}
</style>

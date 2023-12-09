<template>
  <div>
    <CallModal v-if="showModal" @close-modal="showModal = false" />
    <button class="button" @click="showModal = true">
      <p class="txt">Free Call</p>
    </button>
    <MainHome :title="title" :subtitle="subtitle" />
    <MainSlider :sliders="sliders" />
    <MainServices :services="services" />
    <MainStat />
    <MainCollect :projects="projects.data" />
    <MainAbout />
    <MainList :news="news.data" />
    <MainContact />
  </div>
</template>

<script>
import MainHome from '../components/MainPage/MainHome.vue'
import MainSlider from '../components/MainPage/MainSlider.vue'
import MainServices from '../components/MainPage/MainServices.vue'
import MainStat from '../components/MainPage/MainStat.vue'
import MainCollect from '../components/MainPage/MainCollect.vue'
import MainAbout from '../components/MainPage/MainAbout.vue'
import MainList from '../components/MainPage/MainList.vue'
import MainContact from '../components/MainPage/MainContact.vue'
import CallModal from '../components/CallModal.vue'
import servicesApi from '@/api/services'
import newsApi from '@/api/news'
import projectsApi from '@/api/projects'
import slidersApi from '@/api/sliders'

export default {
  name: 'IndexPage',
  components: {
    MainHome,
    MainSlider,
    MainServices,
    MainStat,
    MainCollect,
    MainAbout,
    MainList,
    MainContact,
    CallModal,
  },

  async asyncData({ $axios }) {
    const services = await servicesApi.getServices($axios)
    const news = await newsApi.getNews($axios)
    const projects = await projectsApi.getProjects($axios)
    const sliders = await slidersApi.getSliders($axios)

    return {
      services,
      news,
      projects,
      sliders,
      showModal: false,
    }
  },

  data() {
    return {
      title: [
        {
          title: 'Modern architectural solutions',
        },
      ],
      subtitle: [
        {
          subtitle:
            'IF WE SHIFT OUR GAZE SLIGHTLY, WE CAN RADICALLY CHANGE THE PERCEPTION AND FUNCTIONING OF A PLACE.',
        },
      ],
    }
  },

  head() {
    return {
      title: 'Home | Alpha Developments and Lettings',
    }
  },

  mounted() {},
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

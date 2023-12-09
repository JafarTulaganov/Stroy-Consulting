<template>
  <div>
    <MainHome class="top" :title="title" :subtitle="subtitle" />
    <ServTabs :services="services" :projects="projects" />
    <MainContact />
  </div>
</template>

<script>
import MainHome from '../components/MainPage/MainHome.vue'
import ServTabs from '../components/ServPage/ServTabs.vue'
import MainContact from '../components/MainPage/MainContact.vue'
import servicesApi from '@/api/services'
import projectsApi from '@/api/projects'

export default {
  name: 'ServicesPage',
  components: { MainHome, ServTabs, MainContact },

  async asyncData({ $axios }) {
    const services = await servicesApi.getServices($axios)
    const projects = await projectsApi.getProjects($axios)

    return {
      services,
      projects,
    }
  },

  data() {
    return {
      title: [
        {
          title: 'Our service are very similar to your wishes',
        },
      ],
      subtitle: [
        {
          subtitle: 'Main page / Our services',
        },
      ],
    }
  },

  head() {
    return {
      title: 'Services | Alpha Developments and Lettings',
    }
  },
}
</script>

<style scoped></style>

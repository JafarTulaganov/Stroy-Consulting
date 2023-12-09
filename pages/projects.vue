<template>
  <div>
    <MainHome :title="title" :subtitle="subtitle" />
    <ProjectsSlider :services="services" :projects="projects.data" />
    <ContactMap />
    <ContactForm />
  </div>
</template>

<script>
import MainHome from '../components/MainPage/MainHome.vue'
import ProjectsSlider from '../components/ProjectsPage/ProjectsSlider.vue'
import ContactMap from '../components/ContactMap.vue'
import ContactForm from '../components/ContactForm.vue'
import projectsApi from '@/api/projects'
import servicesApi from '@/api/services'

export default {
  name: 'ProjektsPage',
  components: { MainHome, ProjectsSlider, ContactMap, ContactForm },

  async asyncData({ $axios }) {
    const services = await servicesApi.getServices($axios)
    const projects = await projectsApi.getProjects($axios)

    return {
      projects,
      services,
    }
  },

  data() {
    return {
      title: [
        {
          title: 'Projects',
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
      title: 'Projects | Alpha Developments and Lettings',
    }
  },
}
</script>

<style></style>

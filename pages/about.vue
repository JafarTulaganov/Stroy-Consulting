<template>
  <div>
    <MainHome class="home" :title="title" :subtitle="subtitle" />
    <AboutAwards />
    <MainStat />
    <AboutTeam :team="team" />
    <MoreNews :news="news" />
    <AboutClients :partners="partners" />
    <ContactForm />
  </div>
</template>

<script>
import MainHome from '../components/MainPage/MainHome.vue'
import AboutAwards from '../components/AboutPage/AboutAwards.vue'
import MainStat from '../components/MainPage/MainStat.vue'
import ContactForm from '../components/ContactForm.vue'
import AboutTeam from '../components/AboutPage/AboutTeam.vue'
import MoreNews from '../components/MoreNews.vue'
import AboutClients from '../components/AboutPage/AboutClients.vue'
import partnersApi from '@/api/partners'
import teamApi from '@/api/team'
import newsApi from '@/api/news'

export default {
  name: 'AboutPage',
  components: {
    MainHome,
    AboutAwards,
    MainStat,
    ContactForm,
    AboutTeam,
    MoreNews,
    AboutClients,
  },

  async asyncData({ $axios }) {
    const partners = await partnersApi.getPartners($axios)
    const team = await teamApi.getTeam($axios)
    const news = await newsApi.getLatest($axios)

    return {
      partners,
      team,
      news,
    }
  },

  data() {
    return {
      partners: [],
      team: [],
      title: [
        {
          title: 'Full information about our team',
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
      title: 'About us | Alpha Developments and Lettings',
    }
  },
}
</script>

<style></style>

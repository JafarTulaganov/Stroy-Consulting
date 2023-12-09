<template>
  <div>
    <MainHome class="home" :title="title" :subtitle="subtitle" />
    <ContactMap />
    <ContactForm />
  </div>
</template>

<script>
import ContactMap from '../components/ContactMap.vue'
import MainHome from '../components/MainPage/MainHome.vue'
import ContactForm from '../components/ContactForm.vue'
export default {
  name: 'ContactsPage',
  components: { ContactMap, MainHome, ContactForm },

  data() {
    return {
      title: [
        {
          title: 'CONTACTS',
        },
      ],
      subtitle: [
        {
          subtitle:
            'Contact our team for questions and inquiries related to the product. Select your category and contact details below.',
        },
      ],
    }
  },

  head() {
    return {
      title: 'Contacts | Alpha Developments and Lettings',
    }
  },
}
</script>

<style scoped></style>

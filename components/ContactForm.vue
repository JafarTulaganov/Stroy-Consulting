<template>
  <div>
    <div class="container">
      <div class="row">
        <div class="col-md-6 col-xs-12 no__pad">
          <div class="img">
            <img src="@/assets/img/cont.jpg" alt="" class="pic" />
          </div>
        </div>
        <div class="col-md-6 col-xs-12 content">
          <h4 class="title">CONTACT US</h4>
          <p class="txt">
            Contact our team for product-related questions and inquiries. Choose
            your category and contact options below.
          </p>
          <form @submit.prevent="onSubmit">
            <div class="grid">
              <input
                v-model="name"
                placeholder="Name"
                type="text"
                class="input"
                required
              />
              <input
                v-model="email"
                placeholder="Email"
                type="email"
                class="input"
                required
              />
              <input
                v-model="phone"
                placeholder="Phone"
                type="number"
                class="input"
                required
              />
              <div class="select">
                <select
                  id="select"
                  v-model="country_id"
                  type="text"
                  class="input"
                  @change="changeCountry"
                >
                  <option value="" disabled selected>Select your option</option>
                  <option
                    v-for="country in countries"
                    :key="country.id"
                    :value="country.id"
                  >
                    {{ country.title.en }}
                  </option>
                </select>

                <div class="arrow">
                  <i class="bx bx-chevron-down"></i>
                </div>
              </div>
            </div>
            <input
              v-model="message"
              placeholder="Message"
              type="text"
              class="input long"
            />
            <button type="submit" class="btn">
              <p class="btn__txt">SUBMIT</p>
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import applicationApi from '../api/application'
import countriesApi from '../api/countries'

export default {
  name: 'ContactForm',

  data() {
    return {
      name: '',
      email: '',
      phone: '',
      message: '',
      countries: [],
      country_id: '',
    }
  },

  async fetch() {
    const res = await countriesApi.getCountries(this.$axios)
    this.countries = res
  },

  methods: {
    async onSubmit() {
      const formData = {
        name: this.name,
        phone: this.phone,
        email: this.email,
        message: this.message,
        country_id: parseInt(this.country_id),
      }

      const res = await applicationApi.sendApplication(formData)

      if (res && res.status === 201) {
        this.$toast.success('Successfully sent.')
      } else {
        this.$toast.error('Error')
      }

      this.name = ''
      this.phone = ''
      this.email = ''
      this.message = ''
      this.country_id = ''
    },
    changeCountry() {},
  },
}
</script>

<style scoped>
.container {
  padding-top: 80px !important;
  padding-bottom: 144px !important;
}
.row {
  padding: 0 24px;
}
.pic {
  width: 100%;
  height: 785px;
  object-fit: cover;
}
.title {
  font-weight: 400;
  font-size: 62px;
  line-height: 62px;
  font-family: var(--angel);
  margin-bottom: 40px;
  padding-top: 40px;
}
.txt {
  font-weight: 400;
  font-size: 20px;
  line-height: 30px;
  color: var(--dark-grey);
  max-width: 320px;
  margin-bottom: 48px;
}
.content {
  padding-left: 20px;
}
.grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 32px;
}
.input {
  padding: 24px 0;
  border-bottom: 1px solid var(--border);
  font-weight: 400;
  font-size: 18px;
  line-height: 22px;
  text-transform: normal;
  color: black;
}
.input::placeholder {
  font-weight: 400;
  font-size: 18px;
  line-height: 22px;
  color: black;
}
.long {
  padding-top: 48px;
  width: 100%;
}
.btn {
  width: 300px;
  font-weight: 400;
  font-size: 24px;
  line-height: 32px;
  background: var(--gold);
  padding: 26px 0;
  border-radius: 0;
  margin-top: 48px;
  position: relative;
  overflow: hidden;
}
.btn__txt {
  position: relative;
  z-index: 4;
}
.btn::after {
  background: black;
  content: '';
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  transition: 0.3s;
  transform: translateX(-101%);
  z-index: 3;
}
.btn:hover .btn__txt {
  color: var(--gold);
}
.btn:hover.btn::after {
  transform: translateX(0);
}
.btn:hover {
  box-shadow: none;
  outline: none;
}
.select {
  width: 100%;
  position: relative;
}
.arrow {
  top: 50%;
  transform: translateY(-50%);
  right: 12px;
  position: absolute;
}
.arrow i {
  font-size: 24px;
}
#select {
  width: 100%;
}

@media screen and (max-width: 992px) {
  .pic {
    height: 260px;
  }
  .no__pad {
    padding: 0;
  }
  .title,
  .txt {
    display: none;
  }
  .grid {
    gap: 24px;
  }
  .content {
    padding: 0;
  }
  .input,
  .input::placeholder {
    font-weight: 400;
    font-size: 12px;
    line-height: 15px;
  }
  .btn {
    font-weight: 500;
    font-size: 14px;
    line-height: 20px;
    width: 100px;
    padding: 1rem 0;
    margin-top: 40px;
  }
}
@media screen and (max-width: 400px) {
  .grid {
    grid-template-columns: repeat(1, 1fr);
  }
}
</style>

<template>
  <div class="wrap">
    <div class="container">
      <div class="grid">
        <div class="links" :class="{ 'show-nav': isMenuOpen }">
          <ul>
            <li>
              <nuxt-link class="link" to="/services">Services</nuxt-link>
            </li>
            <li>
              <nuxt-link class="link" to="/projects">Portfolio</nuxt-link>
            </li>
            <li>
              <nuxt-link class="link" to="/about">About us</nuxt-link>
            </li>
            <li>
              <nuxt-link class="link" to="/news">News</nuxt-link>
            </li>
            <li>
              <nuxt-link class="link" to="/contacts">Contacts</nuxt-link>
            </li>
          </ul>
          <div class="num mobile__num">
            <a href="tel:+442081571312" class="brand__link">
              <div class="svg">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="19"
                  height="18"
                  viewBox="0 0 19 18"
                  fill="none"
                >
                  <path
                    d="M18 13.42V16.956C18.0001 17.2092 17.9042 17.453 17.7316 17.6382C17.559 17.8234 17.3226 17.9363 17.07 17.954C16.633 17.984 16.276 18 16 18C7.163 18 0 10.837 0 2C0 1.724 0.015 1.367 0.046 0.93C0.0637224 0.677444 0.176581 0.441011 0.361804 0.268409C0.547026 0.0958068 0.790823 -0.000114433 1.044 2.56579e-07H4.58C4.70404 -0.000125334 4.8237 0.045859 4.91573 0.12902C5.00776 0.212182 5.0656 0.326583 5.078 0.45C5.101 0.68 5.122 0.863 5.142 1.002C5.34073 2.38892 5.748 3.73783 6.35 5.003C6.445 5.203 6.383 5.442 6.203 5.57L4.045 7.112C5.36445 10.1865 7.81455 12.6365 10.889 13.956L12.429 11.802C12.4919 11.714 12.5838 11.6509 12.6885 11.6237C12.7932 11.5964 12.9042 11.6068 13.002 11.653C14.267 12.2539 15.6156 12.6601 17.002 12.858C17.141 12.878 17.324 12.9 17.552 12.922C17.6752 12.9346 17.7894 12.9926 17.8724 13.0846C17.9553 13.1766 18.0012 13.2961 18.001 13.42H18Z"
                    fill="#FFDA79"
                  />
                </svg>
              </div>
              <p>+442081571312</p>
            </a>
          </div>
        </div>
        <div class="brand">
          <router-link class="router" to="/">
            <img class="pic" src="@/assets/img/brand.svg" alt="" />
          </router-link>
        </div>
        <div class="num">
          <a href="tel:+998977072712" class="brand__link">
            <div class="svg">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="19"
                height="18"
                viewBox="0 0 19 18"
                fill="none"
              >
                <path
                  d="M18 13.42V16.956C18.0001 17.2092 17.9042 17.453 17.7316 17.6382C17.559 17.8234 17.3226 17.9363 17.07 17.954C16.633 17.984 16.276 18 16 18C7.163 18 0 10.837 0 2C0 1.724 0.015 1.367 0.046 0.93C0.0637224 0.677444 0.176581 0.441011 0.361804 0.268409C0.547026 0.0958068 0.790823 -0.000114433 1.044 2.56579e-07H4.58C4.70404 -0.000125334 4.8237 0.045859 4.91573 0.12902C5.00776 0.212182 5.0656 0.326583 5.078 0.45C5.101 0.68 5.122 0.863 5.142 1.002C5.34073 2.38892 5.748 3.73783 6.35 5.003C6.445 5.203 6.383 5.442 6.203 5.57L4.045 7.112C5.36445 10.1865 7.81455 12.6365 10.889 13.956L12.429 11.802C12.4919 11.714 12.5838 11.6509 12.6885 11.6237C12.7932 11.5964 12.9042 11.6068 13.002 11.653C14.267 12.2539 15.6156 12.6601 17.002 12.858C17.141 12.878 17.324 12.9 17.552 12.922C17.6752 12.9346 17.7894 12.9926 17.8724 13.0846C17.9553 13.1766 18.0012 13.2961 18.001 13.42H18Z"
                  fill="#FFDA79"
                />
              </svg>
            </div>
            <p>+442081571312</p>
          </a>
        </div>
        <div
          class="burger"
          :class="{ 'toggle-x': isMenuOpen }"
          @click="isMenuOpen = !isMenuOpen"
        >
          <button class="stick"></button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TheNavbar',

  data() {
    return {
      isMenuOpen: false,
    }
  },

  watch: {
    $route() {
      this.isMenuOpen = false
    },
  },
}
</script>

<style scoped>
.wrap {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background: white;
  z-index: 999;
  border-bottom: 1px solid var(--border);
}
.container {
  padding: 0 24px !important;
}

.grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  align-items: center;
  padding: 24px 0;
}
.links {
  transition: 0.3s;
}
.brand {
  text-align: center;
}
.pic {
  width: 100%;
  height: 56px;
  object-fit: contain;
}
.num {
  text-align: end;
}
.num a {
  display: flex;
  align-items: center;
  justify-content: end;
  gap: 1rem;
}
.links ul {
  display: flex;
  align-items: center;
  gap: 38px;
  margin: 0;
}
.links li {
  width: 100%;
}
.link {
  font-weight: 400;
  font-size: 20px;
  line-height: 28px;
  color: black;
  transition: 0.3s;
  position: relative;
}
.link::after {
  background: var(--gold);
  content: '';
  position: absolute;
  bottom: -2px;
  left: 0;
  width: 0%;
  height: 2px;
  transition: 0.3s;
}
.link:hover.link::after {
  width: 100%;
}
.num p {
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
  color: black;
}
.svg {
  border: 2px solid var(--gold);
  padding: 1rem;
  border-radius: 50%;
  position: relative;
}
.num:hover path {
  fill: white;
}
.svg::after {
  background: var(--gold);
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  transition: 0.3s;
  transform: scale(0);
  z-index: -1;
}
.num:hover .svg::after {
  transform: scale(1);
}
.mobile__num {
  display: none;
}
.burger {
  display: none;
}
.stick {
  width: 30px;
  height: 2px;
  background: black;
  position: relative;
}
.stick::after {
  width: 30px;
  height: 2px;
  background: black;
  content: '';
  position: absolute;
  top: 10px;
  left: 0;
  transition: 0.3s;
}
.stick::before {
  width: 30px;
  height: 2px;
  background: black;
  content: '';
  position: absolute;
  top: -10px;
  left: 0;
  transition: 0.3s;
}
.show-nav {
  transform: translateX(0) !important;
}
.toggle-x .stick {
  height: 0;
}
.toggle-x .stick::after {
  transform: rotate(-45deg);
  top: 0;
}
.toggle-x .stick::before {
  transform: rotate(45deg);
  top: 0;
}
.burger {
  display: none;
}
.nuxt-link-exact-active.link::after {
  width: 100%;
}
.brand__link {
  height: 100%;
  width: 100%;
}
@media screen and (max-width: 1540px) {
  .links ul {
    gap: 10px;
  }
  .link {
    font-size: 1rem;
  }
  .num p {
    font-size: 16px;
  }
}
@media screen and (max-width: 1200px) {
  .wrap {
    -webkit-box-shadow: 0px 0px 20px -5px rgba(34, 60, 80, 0.2);
    -moz-box-shadow: 0px 0px 20px -5px rgba(34, 60, 80, 0.2);
    box-shadow: 0px 0px 20px -5px rgba(34, 60, 80, 0.2);
  }
  .grid {
    padding: 1rem 0;
  }
  .links {
    transform: translateX(-100%);
    display: flex !important;
    position: fixed;
    top: 0;
    left: 0;
    width: 80%;
    background: white;
    height: 100%;
    justify-content: space-between;
    flex-direction: column;
    padding: 4rem 0 4rem 4rem;
    -webkit-box-shadow: 0px 0px 20px 0px rgba(34, 60, 80, 0.1);
    -moz-box-shadow: 0px 0px 20px 0px rgba(34, 60, 80, 0.1);
    box-shadow: 0px 0px 20px 0px rgba(34, 60, 80, 0.1);
  }
  .num {
    display: none;
  }
  .grid {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .burger {
    display: flex;
  }
  .mobile__num {
    display: block;
  }
  .mobile__num a {
    justify-content: start;
  }
  .links ul {
    flex-direction: column;
    align-items: flex-start;
    gap: 1rem;
  }
  .link {
    font-size: 22px;
  }
  .burger {
    display: block;
  }
}
@media screen and (max-width: 992px) {
  .pic {
    width: 120px;
  }
  .links {
    padding: 2rem 0 2rem 2rem;
    width: 75%;
  }
  .link {
    width: 85%;
    display: inline-block;
  }
}
</style>

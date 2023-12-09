<template>
  <div>
    <div class="container">
      <h4 class="title">
        OUR <br />
        LOCATIONS
      </h4>
    </div>
    <div class="map">
      <div class="info">
        <a class="link" href="tel:+442081571312"
          ><span class="yellow">+44</span> 2081571312</a
        >
        <p class="txt">86-90 Paul street, London, EC2A 4NE, United Kingdom</p>
      </div>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2482.323521584476!2d-0.08581398402767819!3d51.525625717191126!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48761ca55fcfa5e5%3A0x18b5f6c296424be2!2zT0ZGSUNFIDg2LCA5MCBQYXVsIFN0LCBMb25kb24gRUMyQSA0TkUsINCS0LXQu9C40LrQvtCx0YDQuNGC0LDQvdC40Y8!5e0!3m2!1sru!2s!4v1660112653917!5m2!1sru!2s"
        width="100%"
        height="660"
        style="border: 0"
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ContactMap',
}
</script>

<style scoped>
.title {
  font-weight: 400;
  font-size: 48px;
  line-height: 62px;
  padding: 200px 0 40px 24px;
}
.map {
  position: relative;
}
.info {
  position: absolute;
  top: 0;
  left: 0;
  background: rgba(117, 117, 117, 0.75);
  backdrop-filter: blur(9px);
  padding: 44px 72px;
}
.link {
  font-weight: 500;
  font-size: 35px;
  line-height: 42px;
  margin-bottom: 18px;
  color: white;
  display: block;
}
.yellow {
  color: #ffda79;
}
.txt {
  font-weight: 400;
  font-size: 24px;
  line-height: 34px;
  color: white;
  max-width: 450px;
}
@media screen and (max-width: 992px) {
  .title {
    padding-top: 100px;
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
    padding-bottom: 10px;
    margin-bottom: 0;
  }
  .info {
    padding: 10px 24px;
    max-width: 180px;
  }
  .link {
    font-weight: 500;
    font-size: 16px;
    line-height: 19px;
    margin-bottom: 0.5rem;
  }
  .txt {
    font-weight: 400;
    font-size: 12px;
    line-height: 16px;
  }
  iframe {
    height: 230px;
  }
}
</style>

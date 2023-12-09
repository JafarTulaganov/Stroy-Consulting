<template>
  <div class="modal-overlay">
    <div class="cardo">
      <div class="header">
        <p class="title">Callback</p>
        <button class="x" @click="$emit('close-modal')">
          <i class="bx bx-x"></i>
        </button>
      </div>
      <div class="body">
        <form action="" @submit.prevent="onSubmit">
          <input v-model="name" type="text" class="input" placeholder="Name" />
          <input
            v-model="phone"
            type="number"
            class="input"
            placeholder="Phone number"
          />
          <button type="submit" class="button">Send</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import callbackApi from '../api/callback'

export default {
  name: 'CallModal',

  data() {
    return {
      name: '',
      phone: '',
    }
  },

  methods: {
    async onSubmit() {
      const formData = {
        name: this.name,
        phone: this.phone,
      }

      const res = await callbackApi.sendCallback(formData)

      if (res && res.status === 201) {
        this.$toast.success('Successfully sent.')
      } else {
        this.$toast.error('Error')
      }

      this.name = ''
      this.phone = ''
    },
  },
}
</script>

<style scoped>
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #000000da;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 999;
}
.cardo {
  background: white;
  padding: 24px 32px;
  width: 100%;
  max-width: 700px;
}
.header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 24px;
}
.title {
  font-size: 24px;
  font-weight: 500;
}
.x {
  font-size: 32px;
}
.body form {
  display: grid;
  align-items: flex-end;
}
.input {
  padding: 1rem;
  border-bottom: 1px solid var(--border);
  width: 100%;
  margin-bottom: 1rem;
  font-size: 18px;
}
.button {
  padding: 1rem;
  background: var(--gold);
  font-size: 18px;
  font-weight: 500;
}
</style>

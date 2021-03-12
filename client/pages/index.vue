<template>
  <div>
    <v-row class="d-flex justify-center mt-8 mb-3">
      <v-col class="col-md-5 col-12">
        <v-card-title class="pl-3 primary white--text">
          <v-icon class="white--text mx-5">mdi-account-check</v-icon>
          Регистрация
        </v-card-title>
      </v-col>
    </v-row>
    <v-row class="d-flex justify-center">
      <v-col class="col-md-4 col-9">
        <v-alert
          border="right"
          colored-border
          type="error"
          elevation="2"
          v-if="errors"
        >{{errors}}
        </v-alert>
        <Register
          :submitForm="registerUser"
        />
      </v-col>
    </v-row>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  name: "Homeregister",
  layout: 'authLayouts',
  components: {
    Register: () => import('@/components/Globals/Register')
  },
  data() {
    return {
      errors: null
    }
  },
  head() {
    return {
      title: 'Регистрация'
    }
  },
  methods: {
    async registerUser(registrationInfo) {
      try {
        const res = await this.$axios.post('/home-page/user/register', registrationInfo)
        if (res.data.success) {
          this.$router.push('/signin')
        }
      } catch (err) {
        this.errors = err.response.data.message
      }
    }
  }
}
</script>

<style scoped>

</style>

<template>
  <div>
    <v-row class="d-flex justify-center mt-8 mb-3">
      <v-col class="col-md-5 col-12">
        <v-card-title class="pl-3 primary white--text" fab>
          <v-icon class="white--text mx-5">mdi-location-enter</v-icon>
          Войти
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
        <Login
          :submitForm="loginUser"
        />
      </v-col>
    </v-row>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  name: 'Loginmain',
  layout: 'authLayouts',
  components: {
    Login: () => import('@/components/Globals/Login')
  },
  data() {
    return {
      login: '',
      password: '',
      errors: null,
      snackbar: true,
      multiLine: true,
    }
  },
  head() {
    return {
      title: 'Вход'
    }
  },
  methods: {
    async loginUser(loginInfo) {
      try{
        let res = await this.$auth.loginWith('local', {
          data: loginInfo
        })
        if (res.data.success) {
          this.$router.push('/home')
        }
      }catch(err) {
        this.errors = err.response.data.message
      }
    }
  }
}
</script>

<style scoped>

</style>

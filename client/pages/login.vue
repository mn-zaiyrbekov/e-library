<template>
  <div>
    <v-row class="d-flex justify-center mt-8 mb-3">
      <v-col class="col-md-5 col-12">
        <v-card-title class="pl-3 brown white--text" fab>
          <v-icon class="white--text mx-5">mdi-location-enter</v-icon>
          Войти
        </v-card-title>
      </v-col>
    </v-row>
    <v-row class="d-flex justify-center">
      <v-col class="col-md-4 col-9">
        <!-- <v-alert
          border="right"
          colored-border
          type="error"
          elevation="2"
          v-if="errors"
        >{{errors}}
        </v-alert> -->
        <form @submit.prevent="authUser">
          <v-text-field
            v-model="login"
            label="Логин"
            required
          ></v-text-field>
          <v-text-field
            v-model="password"
            label="Пароль"
            required
            type="password"
          ></v-text-field>
          <v-btn
            class="mr-4 my-4"
            color="brown"
            type="submit"
            dark
            tile
            outlined
          >
            Войти
            <v-icon class="mx-6" small>mdi-send</v-icon>
          </v-btn>
          <v-btn to="/register" outlined tile color="brown white--text">
            Нет аккаунта ?
          </v-btn>
        </form>
      </v-col>
    </v-row>
    <v-snackbar
      v-model="snackbar"
    >
      {{ errors }}
    </v-snackbar>
  </div>
</template>

<script>
export default {
  name: 'Loginmain',
  layout: 'authLayout',
  middleware: ['auth'],
  data() {
    return {
      login: '',
      password: '',
      errors: null,
      snackbar: false,
      timeout: 1500
    }
  },
  head() {
    return {
      title: 'Вход'
    }
  },
  methods: {
    async authUser() {
      this.snackbar = true
      const userInfo = {
        login: this.login,
        password: this.password
      }
      try{
        let res = await this.$auth.loginWith('local', { data: userInfo })
        if(res.data.success) {
          this.$router.push('/')
        }else{
          this.errors = res.data.message
        }
      }catch(err) {
        this.errors = err.response.data.message
      }
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.$nuxt.$loading.start()
      setTimeout(() => this.$nuxt.$loading.finish(), 1500)
    })
  }
}
</script>

<style scoped>

</style>

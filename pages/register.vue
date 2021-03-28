<template>
  <div>
    <v-row class="d-flex justify-center mt-8 mb-3">
      <v-col class="col-md-5 col-12">
        <v-card-title class="pl-3 brown white--text">
          <v-icon class="white--text mx-5">mdi-account-check</v-icon>
          Регистрация
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
          <form @submit.prevent="registerUser">
            <v-text-field
              v-model="name"
              label="Name"
              required
            ></v-text-field>
            <v-text-field
              v-model="email"
              label="E-mail"
              required
            ></v-text-field>
            <v-text-field
              v-model="login"
              label="Придумайте логин"
              required
            ></v-text-field>
            <v-text-field
              v-model="password"
              label="Придумайте пароль"
              required
              type="password"
            ></v-text-field>
            <v-btn
              class="mr-4 my-4"
              color="brown"
              dark
              tile
              outlined
              type="submit"
            >
              Регистрация
              <v-icon class="mx-6" small>mdi-send</v-icon>
            </v-btn>
            <v-btn to="/login" outlined tile color="brown white--text">
              Есть аккаунт ?
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
  name: "Homeregister",
  layout: 'authLayout',
  middleware: ['auth'],
  data() {
    return {
      name: '',
      email: '',
      login: '',
      password: '',
      errors: null,
      snackbar: false
    }
  },
  head() {
    return {
      title: 'Регистрация'
    }
  },
  methods: {
    async registerUser() {
      this.snackbar = true
      const userInfo = {
        name: this.name,
        email: this.email,
        login: this.login,
        password: this.password
      }
      try{
        const res = await this.$axios.post('/users/register', userInfo)
        if(res.data.success) {
          this.$router.push('/login')
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


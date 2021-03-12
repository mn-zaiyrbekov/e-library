<template>
  <div>
    <form>
      <v-text-field
        v-model="userInfo.userName"
        label="Name"
        required
      ></v-text-field>
      <v-text-field
        v-model="userInfo.email"
        label="E-mail"
        required
      ></v-text-field>
      <v-text-field
        v-model="userInfo.login"
        label="Придумайте логин"
        required
      ></v-text-field>
      <v-text-field
        v-model="userInfo.password"
        label="Придумайте пароль"
        required
        type="password"
      ></v-text-field>
      <v-btn
        class="mr-4 my-4"
        color="primary"
        dark
        tile
        outlined
        @click.prevent="submitForm(userInfo)"
      >
        Регистрация
        <v-icon class="mx-6" small>mdi-send</v-icon>
      </v-btn>
      <v-btn to="/signin" outlined tile color="primary white--text">
        Есть аккаунт ?
      </v-btn>
    </form>
  </div>
</template>

<script>
  export default {
    name: 'registerforms',
    data() {
      return {
        userInfo: {
          userName: '',
          email: '',
          login: '',
          password: ''
        }
      }
    },
    props: ['submitForm']
  }
</script>

<style scoped>

</style>
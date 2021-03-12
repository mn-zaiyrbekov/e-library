<template>
  <form>
    <v-text-field
      label="Логин"
      required
      v-model="userInfo.login"
    ></v-text-field>
    <v-text-field
      label="Пароль"
      required
      type="password"
      v-model="userInfo.password"
    ></v-text-field>
    <v-btn
      class="mr-4 my-4"
      color="primary"
      dark
      tile
      outlined
      @click.prevent="submitForm(userInfo)"
    >
      Войти
      <v-icon class="mx-6" small>mdi-send</v-icon>
    </v-btn>
    <v-btn to="/" outlined tile color="primary white--text">
      Нет аккаунта ?
    </v-btn>
  </form>
</template>

<script>
  export default {
    name: 'loginform',
    data() {
      return {
        userInfo: {
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
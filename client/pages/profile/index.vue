<template>
<v-row>
  <v-col class="col-md-5 col-12">
    <v-card
      class="mx-auto"
      outlined
    >
      <v-card-text class="subtitle-1 pl-1">
        <v-icon class="mx-4">mdi-card-account-details</v-icon>
        Информация о вашем профиле
      </v-card-text>
      <v-list-item three-line class="mt-8">
        <v-list-item-content>
          <v-list-item-subtitle class="indigo lighten-2 white--text py-3 pl-1">
            <v-icon small class="mr-3 white--text">mdi-account-heart</v-icon>
            Имя: {{$auth.user.userName}}
          </v-list-item-subtitle>
          <v-list-item-subtitle class="indigo lighten-2 white--text py-3 pl-1">
            <v-icon small class="mr-3 white--text">mdi-email</v-icon>
            E-mail: {{$auth.user.email}}
          </v-list-item-subtitle>
          <v-list-item-subtitle class="indigo lighten-2 white--text py-3 pl-1">
            <v-icon small class="mr-3 white--text">mdi-comment-account</v-icon>
            Login:  {{$auth.user.login}}
          </v-list-item-subtitle>
          <v-list-item-subtitle class="indigo lighten-2 white--text py-3 pl-1">
            <v-icon small class="mr-3 white--text">mdi-comment-account</v-icon>
            Зарегистрирован: 20.11.20
          </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
    </v-card>
  </v-col>
</v-row>
</template>

<script>
import { mapState, mapGetters } from 'vuex'
export default {
  head() {
    return {
      title: 'Мой профиль'
    }
  },
  // computed: mapGetters({user: 'user/user'}),
  methods: {
    // ...mapActions({getUserProfile: 'user/getUserProfile'})
  },
  created() {
    // this.getUserProfile()
  }
}
</script>

<style scoped>

</style>

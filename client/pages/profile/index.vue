<template>
  <v-row>
    <v-col class="col-md-5 col-12">
      <v-card
        class="mx-auto blue darken-3"
        outlined
        dark
      >
        <v-card-text class="subtitle-1 pl-1">
          <v-icon class="mx-4">mdi-card-account-details</v-icon>
          Информация о вашем профиле
        </v-card-text>
        <v-list-item three-line class="mt-8">
          <v-list-item-content>
            <v-list-item-subtitle class="py-3 pl-1">
              <v-icon small class="mr-3 ">mdi-account-heart</v-icon>
              Имя: <span class="ml-2">{{$auth.user.name}}</span>
            </v-list-item-subtitle>
            <v-list-item-subtitle class="py-3 pl-1">
              <v-icon small class="mr-3 ">mdi-email</v-icon>
              E-mail: <span class="ml-2">{{$auth.user.email}}</span>
            </v-list-item-subtitle>
            <v-list-item-subtitle class="py-3 pl-1">
              <v-icon small class="mr-3 ">mdi-comment-account</v-icon>
              Login:  <span class="ml-2">{{$auth.user.login}}</span>
            </v-list-item-subtitle>
            <v-list-item-subtitle class="py-3 pl-1">
              <v-icon small class="mr-3 ">mdi-comment-account</v-icon>
              Зарегистрирован: <span class="ml-2">{{format_Date().format('MMM D Y')}}</span>
            </v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
import moment from 'moment'
  export default {
    methods: {
      format_Date() {
        return moment()
      },
    }
  }
</script>

<style lang="scss" scoped>

</style>
<template>
  <v-container fluid>
    <h2 class="pink darken-1 white--text py-2 pl-3">{{book.booksTitle}}</h2>
    <v-row>
      <v-col class="col-md-4 col-12 col">
        <v-card class="mt-6 pt-4">
          <v-img
            :src="`${book.booksImage}`"
            max-width="340"
            max-height="440"
          ></v-img>
          <v-card-actions class="mt-3">
          <v-btn z-index="10" link :href="`${book.booksLink}`" color="pink lighten-5" >
            <v-icon title="читать онлайн" color="deep-purple lighten-1">mdi-book-open</v-icon>
          </v-btn>
            <v-btn
              color="pink lighten-5"
              v-if="$auth.user"
              @click.prevent="setUserBooks"
              :disabled="disabled"
            >
              <v-icon
                title="Добавить в мои книги"
                color="deep-purple lighten-1">
                mdi-bookmark-plus-outline
              </v-icon>
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
      <v-col class="col-md-8 col-12 pl-5">
        <v-list class="mt-8">
          <v-list-item-group class="pt-4">
            <v-list-item class="pl-0">
              <v-icon class="mr-2">mdi-account-edit</v-icon>
              <v-list-item-subtitle>Автор: {{book.booksAuthor}}</v-list-item-subtitle>
            </v-list-item>
            <v-list-item class="pl-0">
              <v-icon class="mr-2">mdi-calendar-range</v-icon>
              <v-list-item-subtitle>Год издания: {{book.booksYear}}</v-list-item-subtitle>
            </v-list-item>
            <v-list-item class="pl-0">
              <v-icon class="mr-2">mdi-book-information-variant</v-icon>
              <v-list-item-subtitle>Жанр: {{book.booksGenre}}</v-list-item-subtitle>
            </v-list-item>
            <v-list-item class="pl-0">
              <v-icon class="mr-2">mdi-calendar-check</v-icon>
              <v-list-item-subtitle>добавлен: {{format_Date().format('MMM D Y')}}</v-list-item-subtitle>
            </v-list-item>
            <v-list-item class="pl-0 mb-3">
              Аннотация: {{book.booksDesc}}
            </v-list-item>
          </v-list-item-group>
        </v-list>
      </v-col>
    </v-row>
    <v-snackbar
      v-model="snackbar"
      :timeout="timeoute"
    >
      {{messageSet}}
      <template v-slot:action="{ attrs }">
        <v-btn
          color="blue"
          text
          v-bind="attrs"
        >
          Закрыть
        </v-btn>
      </template>
    </v-snackbar>
  </v-container>
</template>

<script>
import moment from 'moment'
import { mapGetters, mapActions } from 'vuex'
export default {
  name: 'bookone',
  middleware: ['auth'],
  data() {
    return {
      disabled: false,
      snackbar: false,
      messageSet: null,
      timeoute: 1500,
    }
  },
  head() {
    return {
      title: this.book.booksTitle,
      meta: [
        {
          name: 'description',
          content: this.book.booksDesc
        }
      ]
    }
  },
  computed: {
    ...mapGetters({
      book: 'books/getOneBook'
    })
  },
  methods: {
    ...mapActions({
      fetchOneBook: 'books/getOneBook',
      setBooksForUser: 'user/setBooksForUser'
    }),
    format_Date() {
      return moment()
    },
    async setUserBooks() {
      this.snackbar = true
      this.disabled = true
      const res = await this.setBooksForUser({
        idBook: this.book._id,
        idUser: this.$auth.user._id
      })
      if (res.data.success) {
        this.messageSet = res.data.message
      }else{
        this.errorSet = res.data.error
      }
    }
  },
  created() {
    this.fetchOneBook({id:this.$route.params.id})
  }
}
</script>

<style>

</style>

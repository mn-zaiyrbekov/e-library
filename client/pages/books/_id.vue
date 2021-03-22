<template>
  <v-container fluid>
    <h2 class="pink darken-1 white--text py-2 pl-3">{{book.booksTitle}}</h2>
    <v-row>
      <v-col class="col-4">
        <v-card class="mt-6 pt-4">
          <v-img
            :src="`${book.booksImage}`"
            max-width="340"
            max-height="440"
          ></v-img>
          <v-card-actions class="mt-3">
            <v-btn color="pink lighten-5" title="читать онлайн">
              <v-icon color="deep-purple lighten-1">mdi-book-open</v-icon>
            </v-btn>
            <v-btn color="pink lighten-5" title="Добавить в мои книги">
              <v-icon color="deep-purple lighten-1">mdi-bookmark-plus-outline</v-icon>
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
      <v-col class="col-8 pl-5">
        <v-list class="mt-8">
          <v-list-item-group class="pt-4">
            <v-list-item class="pl-0 mb-3">
              {{book.booksDesc}}
            </v-list-item>
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
          </v-list-item-group>
        </v-list>
      </v-col>
    </v-row>
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
      limitSet: 4,
      disabled: true
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
      fetchOneBook: 'books/getOneBook'
    }),
    format_Date() {
      return moment()
    },
    disableBtn() {
      if (this.limitSet >= 4) {
        this.disabled = true
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

<template>
  <div>
    <v-row>
      <v-col
        cols="12"
        md="3"
        v-for="(book, key) in userBooks"
        :key="key"
      >
        <MyBooksCard
          :bookId="book._id"
          :booksTitle="book.booksTitle"
          :booksLink="book.booksLink"
          :booksImage="book.booksImage"
          :booksGenre="book.booksGenre"
          :booksDesc="book.booksDesc"
          :booksAuthor="book.booksAuthor"
          :booksYear="book.booksYear"
        />
      </v-col>
    </v-row>
    <v-snackbar
      v-model="snackbar"
      :timeout="timeoute"
    >
      {{message}}
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
  </div>
</template>

<script>
import MyBooksCard from '@/components/MyBooksCard/MyBooksCard'
import { mapGetters, mapActions } from 'vuex'
export default {
  name: 'MyBooks',
  middleware: ['auth'],
  data() {
    return {
      message: null,
      errors: null,
      timeoute: 1500,
      snackbar: false
    }
  },
  components: {
    MyBooksCard
  },
  head() {
    return {
      title: 'Мои книги'
    }
  },
  computed: {
    ...mapGetters({
      userBooks: 'user/getBook'
    })
  },
  methods: {
    ...mapActions({
      fetchBooksUser: 'user/getUserBooks'
    })
  },
  created() {
    this.fetchBooksUser(this.$auth.user._id)
  }
}
</script>

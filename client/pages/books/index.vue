<template>
  <div>
    <v-row>
      <v-col
        cols="12"
        md="3"
        v-for="(book, key) in books"
        :key="key"
      >
        <BooksCard
          :idBook="book._id"
          :title="book.bookTitle"
          :description="book.booksDesc"
          :bookAuthor="book.booksAuthor"
          :bookGenre="book.booksGenre"
          :bookYear="book.booksYear"
          :bookImage="book.booksImage"
          :bookLink="book.booksLink"
          :rating="book.rating"
        />

      </v-col>
    </v-row>
    <div class="text-center">
      <!-- <v-btn v-on:click="prevePage" v-if="$nuxt.$route.query.page > 1">
        Назад
      </v-btn>
      <v-btn v-on:click="nextPage">
        Далее
      </v-btn> -->
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import BooksCard from '@/components/Books/BooksCard'
export default {
  name: "Booksmain",
  head() {
    return {
      title: 'Список книг'
    }
  },
  computed: {
    ...mapGetters({
      books: 'books/getBooks'
    })
  },
  data() {
    return {
      limitBooks: 14
    }
  },
  components: {BooksCard},
  methods: {
    ...mapActions({
      fetchBooks: 'books/getAllBooks'
    })
  },
  created() {
    this.fetchBooks( { limit: this.limitBooks } )
  }
}
</script>

<style scoped>

</style>

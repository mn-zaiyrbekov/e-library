<template>
  <div>
    Книги категории
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
  </div>
</template>

<script>
import BooksCard from '@/components/Books/BooksCard'
import { mapGetters, mapActions } from 'vuex'
export default {
  components: { BooksCard },
  computed: {
    ...mapGetters({
      books: 'books/getBooksByGenre'
    })
  },
  methods: {
    ...mapActions({
      fetchBookByGenre: 'books/getBookByGenre'
    })
  },
  created() {
    this.fetchBookByGenre( { idGenre: this.$route.params.id } )
  }
}
</script>

<style lang="scss" scoped>

</style>
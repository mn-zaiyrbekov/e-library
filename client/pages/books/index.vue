<template>
  <v-row>
    <v-col 
      cols="12" 
      md="3"
      v-for="(book, key) in books"
      :key="key"
    >
      <BooksCard 
        :title="book.title"
        :description="book.description"
        :bookAuthor="book.bookAuthor"
        :bookGenre="book.bookGenre"
        :bookYear="book.bookYear"
        :bookImage="book.bookImage"
        :bookLink="book.bookLink"
      />
    </v-col>
  </v-row>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import BooksCard from '@/components/Books/BooksCards'
export default {
  name: "Books",
  head() {
    return {
      title: 'Список книг'
    }
  },
  data() {
    return {
      limitBooks: 8
    }
  },
  components: {BooksCard},
  computed: {
    ...mapGetters({
      books: 'books/books'
    })
  },
  methods: {
    ...mapActions({
      getBooks: 'books/getBooks',
    })
  },
  created() {
    this.getBooks({limit: this.limitBooks})
  }
}
</script>

<style scoped>

</style>
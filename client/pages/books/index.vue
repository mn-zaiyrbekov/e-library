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
    <div class="text-center">
      <v-pagination
        v-model="page"
        :length="4"
        circle
      ></v-pagination>
    </div>
  </div>
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
      limitBooks: 16,
      pagination: '',
      page: null
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
    const config = {
      Headers: { page: 1 }
    }
    this.getBooks(config)
  },
}
</script>

<style scoped>

</style>

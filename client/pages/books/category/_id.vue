<template>
  <div>
    <VcardTitle title="Категория книг" />
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
import { mapGetters, mapActions } from 'vuex'
import BooksCard from '@/components/Books/BooksCard'
import VcardTitle from '@/components/Globals/VcardTitle'
export default {
  components: { BooksCard, VcardTitle },
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
  },
  mounted() {
    this.$nextTick(() => {
      this.$nuxt.$loading.start()
      setTimeout(() => this.$nuxt.$loading.finish(), 1500)
    })
  }
}
</script>

<style scoped>

</style>

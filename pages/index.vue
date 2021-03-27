<template>
  <div>
    <v-row>
      <v-col class="col-md-6 col-12">
        <v-card-title class="pink white--text">
          <v-icon class="mr-5 white--text">mdi-star-shooting</v-icon>
          Популярные | читаемые
        </v-card-title>
      </v-col>
    </v-row>
    <v-row>
      <v-col
        cols="12"
        md="3"
        v-for="(book, key) in books"
        :key="key"
      >
        <HomeCards
          :id="book._id"
          :title="book.booksTitle"
          :description="book.booksDesc"
          :bookAuthor="book.booksAuthor"
          :bookGenre="book.bookGenre"
          :bookYear="book.booksYear"
          :bookImage="book.booksImage"
          :bookLink="book.booksLink"
        />
      </v-col>
    </v-row>
    <v-snackbar
      v-model="timeout"
      v-if="!$auth.user"
    >
      Для того чтобы скачивать, и делать заметки пожалуйста, зарегестрируйтесь
    </v-snackbar>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import HomeCards from '@/components/Home/HomeCards'
export default {
  name: 'Home',
  components: {
    HomeCards
  },
  data() {
    return {
      timeout: 8000,
      limitBooks: 4
    }
  },
  head() {
    return {
      title: 'Главная'
    }
  },
  computed: {
    ...mapGetters({
      books: 'books/getBooks'
    })
  },
  methods: {
    ...mapActions({
      fetchBooks: 'books/getAllBooks'
    })
  },
  created() {
    this.fetchBooks({limit: this.limitBooks})
  }
}
</script>

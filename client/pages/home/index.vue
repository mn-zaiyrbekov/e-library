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
      limitBooks: 4,
      pagination: ''
    }
  },
  head() {
    return {
      title: 'Главная'
    }
  },
  computed: {
    ...mapGetters({
      books: 'books/books'
    })
  },
  methods: {
    ...mapActions({
      getBooks: 'books/getBooks'
    })
  },
  created() {
    this.getBooks({limit: this.limitBooks})
  }
}
</script>

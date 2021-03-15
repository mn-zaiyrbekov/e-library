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
      <v-btn v-on:click="prevePage" v-if="$nuxt.$route.query.page > 1">
        Назад
      </v-btn>
      <v-btn v-on:click="nextPage">
        Далее
      </v-btn>
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
      limitBooks: 4,
      pagination: ''
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
    }),
    async nextPage() {
      if (isNaN($nuxt.$route.query.page)) {
        var nextPage = 2
        var pagination = 2
        
      }else{
        var nextPage = parseInt($nuxt.$route.query.page) + 1
        var pagination = parseInt($nuxt.$route.query.page) + 1
      }
      console.log(pagination)
      let config = {
        params: {
          page: pagination,
          // limit: this.limitBooks
        }
      }
      await this.getBooks(config)
      this.$router.push(`/books?page=${nextPage}`)
    },
    async prevePage() {
      var prevPage = parseInt($nuxt.$route.query.page) - 1
      let pagination = parseInt($nuxt.$route.query.page) - 1
      let config = {
        params: {
          page: pagination,
          // limit: this.limitBooks
        }
      }
      await this.getBooks(config)
      this.$router.push(`/books?page=${prevPage}`)
    }
  },
  created() {
    let config = {
      params: {
        limit: this.limitBooks,
        page: this.$nuxt.$route.query.page
      }
    }
    this.getBooks(config)
  }
}
</script>

<style scoped>

</style>

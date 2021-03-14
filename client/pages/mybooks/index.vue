<template>
  <v-row>
    <v-col 
      cols="12" 
      md="3"
      v-for="(book, key) in userBooks"
      :key="key"
    >
      <MyBooksCard 
        :title="book.title"
        :description="book.description"
        :bookImage="book.bookImage"
        :bookAuthor="book.Author"
        :bookGenre="book.bookGenre"
        :bookLink="book.bookLink"
        :bookYear="book.bookYear"
      />
    </v-col>
  </v-row>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import MyBooksCard from '@/components/MyBooksCard/MyBooksCard'
export default {
  name: 'MyBooks',
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
      userBooks: 'books/userBooks'
    })
  },
  methods: {
    ...mapActions({
      getUserBooks: 'books/getUserBooks'
    })
  },
  created() {
    this.getUserBooks(this.$auth.user._id)
  },
  mounted() {
    console.log(this.$auth.user._id);
  }
}
</script>

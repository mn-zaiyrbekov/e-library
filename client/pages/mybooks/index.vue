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
        :idBook="book._id"
        :title="book.title"
        :description="book.description"
        :bookImage="book.bookImage"
        :bookAuthor="book.Author"
        :bookGenre="book.bookGenre"
        :bookLink="book.bookLink"
        :bookYear="book.bookYear"
        :deleteBook="deleteBookInUser"
        :snackbar="snackbar"
        :timeoute="timeoute"
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
import { mapGetters, mapActions } from 'vuex'
import MyBooksCard from '@/components/MyBooksCard/MyBooksCard'
export default {
  name: 'MyBooks',
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
      userBooks: 'user/userBooks'
    })
  },
  methods: {
    ...mapActions({
      getUserBooks: 'user/getUserBooks',
      deleteUserBook: 'user/deleteUserBooks'
    }),
    async deleteBookInUser(idBook) {
      // alert('BOOK ID' + idBook)
      this.snackbar = true
      const res = await this.deleteUserBook({idUser: this.$auth.user._id, bookID: idBook})
      if(res.data.success) {
        this.message = res.data.message
      }
    }
  },
  created() {
    this.getUserBooks(this.$auth.user._id)
  }
}
</script>

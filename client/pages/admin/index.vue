<template>
  <v-row>
    <v-col
      cols="12"
    >
      <v-card class="blue darken-4">
        <v-subheader class="title white--text">Книги на главной</v-subheader>
        <v-list 
          two-line
          v-for="(book, key) in books"
          :key="key"
          class="mt-5"
        >
          <v-list-item class="blue-grey lighten-4">
            <v-list-item-content >
              <v-list-item-title class="title">{{book.title}} </v-list-item-title>
              <v-clamp autoresize :max-lines="3" :title="`${book.description}`" class="text py-2 pr-4">{{book.description}}</v-clamp>
            </v-list-item-content>
              <v-btn 
                small
                :to="`/admin/books/edit/${book._id}`"
              >
                <v-icon small>mdi-pencil</v-icon>
              </v-btn>
              <v-btn
                small
                class="ml-1"
                @click.prevent="deleteBook(book._id)"
              >
                <v-icon small>mdi-delete</v-icon>
              </v-btn>
          </v-list-item>
        </v-list>
        <v-snackbar
          v-if="dMessage"
        >
          {{ dMessage }}
          <template v-slot:action="{ attrs }">
            <v-btn
              color="pink"
              text
              v-bind="attrs"
            >
              Close
            </v-btn>
          </template>
        </v-snackbar>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import VClamp from 'vue-clamp'
export default {  
  layout: 'adminLayouts',
  name: 'adminmain',
  components: {VClamp},
  data() {
    return {
      booksLimit: 4,
      dMessage: ''
    }
  },
  computed: {
    ...mapGetters({
      books: 'books/books'
    })
  },
  methods: {
    ...mapActions({
      getBooksAll: 'books/getBooks',
      deletingBook: 'books/deleteBook'
    }),
    async deleteBook(idBook) {
      const res = await this.deletingBook(idBook)
      if (res.data.success) {
        this.dMessage = res.data.message
      }
    }
  },
  created() {
    this.getBooksAll({limit: this.booksLimit})
  }
}
</script>

<style lang="scss" scoped>

</style>
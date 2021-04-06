<template>
  <div>
    <v-card
      class="mx-auto my-12"
      max-width="300"
      :to="`/books/${idBook}`"
    >
      <v-img
        width="220"
        height="280"
        class="mx-auto"
        :src="bookImage"
      ></v-img>

      <v-card-title class="subtitle-1" :title="title">
        <v-clamp autoresize :max-lines="1">{{title}}</v-clamp>
      </v-card-title>

      <v-card-text class="pl-0">
        <v-row
          align="center"
          class="mx-0"
        > 
        <Ratings :bookRating="bookRating"/>
        </v-row>
        <div
          class="my-5 description"
          ref="description"
        >
          <v-clamp autoresize :max-lines="3" :title="description">{{description}}</v-clamp>
        </div>
      </v-card-text>
      <v-divider class="mx-4"></v-divider>
      <v-card-actions v-if="this.$route.path === '/admin/books'">
        <v-btn color="pink lighten-5" :to="`/admin/books/edit/${idBook}`">
          <v-icon title="редактировать" color="deep-purple lighten-1">mdi-pencil</v-icon>
        </v-btn>
        <v-btn color="pink lighten-5">
          <v-icon
            title="удалить"
            color="deep-purple lighten-1"
            @click.prevent="bookDelete(idBook)"
          >
            mdi-delete
          </v-icon>
        </v-btn>
      </v-card-actions>
    </v-card>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import Ratings from '@/components/Globals/Ratings'
import VClamp from 'vue-clamp'
export default {
  name: 'BooksCards',
  components: { VClamp, Ratings },
  props: {
    idBook: { type: String }, title: { type: String, default: '' },
    description: { type: String, default: '' },
    bookAuthor: { type: String, default: '' },
    bookGenre: { type: String, default: '' },
    bookYear: { type: String }, bookImage: { type: String, default: '' },
    bookLink: { type: String, default: '' },
    rating: { type: Array }
  },
  data () {
    return{
      zIndex: 10,
      errorSet: null
    }
  },
  computed: {
    bookRating() {
      return this.rating.reduce((a, b) => a + b / 5, 0)
    }
  },
  methods: {
    ...mapActions({
      deleteBook: 'books/deleteBookById'
    }),
    bookDelete(idBook) {
      this.deleteBook( { id: idBook } )
    }
  }
}
</script>

<style scoped>

</style>

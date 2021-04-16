<template>
  <div>
    <v-card
      class="mx-auto my-12"
      max-width="300"
    >
      <v-img
        width="100%"
        height="280"
        :src="booksImage"
        class="mx-auto"
      ></v-img>

      <v-card-title class="subtitle-1 purple darken-4" :title="booksTitle">
        <v-clamp autoresize :max-lines="1" class="white--text">{{booksTitle}}</v-clamp>
      </v-card-title>
        <v-card-text
          class="my-2 caption"
        >
          <v-clamp autoresize :max-lines="2" :title="booksDesc">{{booksDesc}}</v-clamp>
        </v-card-text>
      <v-card-text>
        <v-row>
          <v-card-text>Ваша оценка:</v-card-text>
          <v-rating
            class="pl-2"
            v-model="ratingValue"
            color="pink"
            background-color="pink lighten-3"
            empty-icon="$ratingFull"
            hover
            large
            small
            @input="setRating"
          ></v-rating>
        </v-row>
        <div
          class="my-5 description"
          ref="description"
        >
          <v-clamp autoresize :max-lines="3" title=""></v-clamp>
        </div>
      </v-card-text>
      <v-divider class="mx-4"></v-divider>
      <v-card-actions>

        <ShareNetwork
          network="WhatsApp"
          :url="booksLink"
          :title="`${booksTitle} - Электронная библиотека | Научная библиотека ИГУ`"
          :description="booksDesc"
        >
          <v-btn
            color="deep-purple lighten-2"
            text
          >
            <v-icon title="поделится в Whatsapp">mdi-whatsapp</v-icon>
          </v-btn>
        </ShareNetwork>
        <ShareNetwork
          network="Email"
          :url="booksLink"
          :title="`${booksTitle} - Электронная библиотека | Научная библиотека ИГУ`"
        >
          <v-btn
            color="deep-purple lighten-2"
            text
          >
            <v-icon title="поделится в Email">mdi-email-edit-outline</v-icon>
          </v-btn>
        </ShareNetwork>
        <v-btn
          color="deep-purple lighten-2"
          text
        >
          <v-icon
            class="mx-4"
            title="удалить"
            @click.prevent="deleteBook(bookId)"
          >mdi-delete-off</v-icon>
        </v-btn>
      </v-card-actions>
    </v-card>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import VClamp from 'vue-clamp'
export default {
  name: 'MyBooksCard',
  components: {VClamp},
  data() {
    return {
      ratingValue: 0
    }
  },
  props: {
    bookId: {
      type: String
    },
    booksTitle: {
      type: String
    },
    booksLink: {
      type: String
    },
    booksImage: {
      type: String
    },
    bookLink: {
      type: String
    },
    booksYear: {
      type: String
    },
    booksAuthor: {
      type: String
    },
    booksDesc: {
      type: String
    },
    rating: { type: Array }
  },
  computed: {
    bookRating() {
      return this.ratingValue = this.rating.reduce((a, b) => a + b / 5, 0)
    }
  },
  methods: {
    ...mapActions({
      deleteUserBooks: 'user/deleteUserBooks',
      ratingSet: 'books/setBookRating'
    }),
    async deleteBook() {
      this.snackbar = true
      const res = await this.deleteUserBooks({idUser: this.$auth.user._id, bookID: this.bookId})
      if(res.data.success) {
        this.messageSet = res.data.message
      }else{
        this.messageSet = res.data.error
      }
    },
    async setRating() {
      await this.ratingSet( { bookId: this.bookId, rating: this.ratingValue } )
    }
  }
}
</script>

<style scoped>
.v-application a{
  text-decoration: none;
}
</style>

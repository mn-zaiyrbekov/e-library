<template>
  <div>
    <v-card
      class="mx-auto my-12"
      max-width="300"
    >
        <!-- :to="`/books/${idBook}`" -->
      <template slot="progress">
        <v-progress-linear
          color="deep-purple"
          height="10"
          indeterminate
        ></v-progress-linear>
      </template>

      <v-img
        width="220"
        height="280"
        :src="bookImage"
        class="mx-auto"
      ></v-img>

      <v-card-title class="subtitle-1" :title="title">
        <v-clamp autoresize :max-lines="1">{{title}}</v-clamp>
      </v-card-title>

      <v-card-text>
        <v-row
          align="center"
          class="mx-0"
        >
          <v-rating
            v-model="baseRaiting"
            color="pink"
            background-color="pink lighten-3"
            empty-icon="$ratingFull"
            half-increments
            hover
            readonly
            large
            small
          ></v-rating>

          <div class="grey--text ml-4">
            {{baseRaiting}}
          </div>
        </v-row>
        <div
          class="my-5 description"
          ref="description"
        >
            <v-clamp autoresize :max-lines="3" :title="description">{{description}}</v-clamp>
        </div>
      </v-card-text>
      <v-divider class="mx-4"></v-divider>
      <v-card-actions>
        <v-btn color="pink lighten-5">
          <v-icon title="читать онлайн" color="deep-purple lighten-1">mdi-book-open</v-icon>
        </v-btn>
        <!-- <v-btn color="deep-purple lighten-2" text >
          <v-icon class="mx-4" title="скачать">mdi-cloud-download</v-icon>
        </v-btn> -->
        <v-btn 
          color="pink lighten-5"
          @click="addMyBooks"
        >
          <v-icon 
            title="Добавить в мои книги" 
            color="deep-purple lighten-1">
            mdi-bookmark-plus-outline
          </v-icon>
        </v-btn>
      </v-card-actions>
    </v-card> 
    <v-snackbar
      v-model="snackbar"
      :timeout="timeoute"
    >
      {{messageSet}}
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
import { mapActions } from 'vuex'
import VClamp from 'vue-clamp'
export default {
  name: 'BooksCards',
  components: {VClamp},
  props: {
    idBook: {
      type: String
    },
    title: {
      type: String,
      default: ''
    },
    description: {
      type: String,
      default: ''
    },
    bookAuthor: {
      type: String,
      default: ''
    },
    bookGenre: {
      type: String,
      default: ''
    },
    bookYear: {
      type: Number
    },
    bookImage: {
      type: String,
      default: ''
    },
    bookLink: {
      type: String,
      default: ''
    }
  },
  data () {
    return{
      baseRaiting: this.homeRating,
      messageSet: null,
      timeoute: 1500,
      snackbar: false
    }
  },
  methods: {
    ...mapActions({
      setBook: 'books/insertUserBook'
    }),
    async addMyBooks() {
      this.snackbar = true
      const res = await this.setBook(this.idBook)
      if (res.data.success) {
        this.messageSet = res.data.message
      }else{
        this.messageSet = res.data.message
      }
    }
  }
}
</script>

<style lang="scss" scoped>

</style>

<template>
  <div>
    <v-card
      class="mx-auto my-12"
      max-width="300"
    >
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
          <v-card-text class="px-0">Ваша оценка:</v-card-text>
          <v-rating
            v-model="rating"
            color="pink"
            background-color="pink lighten-3"
            empty-icon="$ratingFull"
            half-increments
            hover
            large
            small
          ></v-rating>

          <div class="grey--text ml-4">
            Rating
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
        <v-btn
          color="deep-purple lighten-2"
          text
        >
          <v-icon title="поделится">mdi-arrange-send-backward</v-icon>
          <v-icon
            class="mx-4"
            title="удалить"
            @click="deleteBook(idBook)"
          >mdi-delete-off</v-icon>
        </v-btn>
      </v-card-actions>
    </v-card>
  </div>
</template>

<script>
import VClamp from 'vue-clamp'
export default {
  name: 'MyBooksCard',
  components: {VClamp},
  data: () => ({
    rating: 2.3
  }),
  props: {
    idBook: {
      type: String
    },
    title: {
      type: String
    },
    description: {
      type: String
    },
    bookImage: {
      type: String
    },
    bookLink: {
      type: String
    },
    bookYear: {
      type: Number
    },
    bookAuthor: {
      type: String
    },
    bookGenre: {
      type: String
    },
    deleteBook: {
      type: Function
    }
  }
}
</script>

<style scoped>

</style>

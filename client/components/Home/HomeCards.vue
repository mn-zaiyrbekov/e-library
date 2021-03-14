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
        <v-btn color="deep-purple lighten-2" text>
          <v-icon title="читать онлайн">mdi-book-open</v-icon>
        </v-btn>
        <v-btn color="deep-purple lighten-2" text>
          <v-icon class="mx-4" title="скачать">mdi-cloud-download</v-icon>
        </v-btn>
        <v-btn 
          color="deep-purple lighten-2" 
          text
          :to="`/books/${id}`"
        ><v-icon class="mx-4" title="открыть">mdi-folder-outline</v-icon>
        </v-btn>
      </v-card-actions>
    </v-card>
  </div>
</template>

<script>
import VClamp from 'vue-clamp'
export default {
  name: 'HomeCards',
  components: {VClamp},
  props: {
    id: {
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
    },
    homeRating: {
      type: Number,
      default: 4.3
    },
  },
  data () {
    return{
      baseRaiting: this.homeRating
    }
  },
}
</script>

<style scoped>
</style>

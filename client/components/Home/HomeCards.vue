<template>
  <div>
    <v-card
      class="mx-auto my-12"
      max-width="300"
      link
      :to="`/books/${id}`"
    >
      <v-img
        width="220"
        height="280"
        :src="bookImage"
        class="mx-auto"
      ></v-img>

      <v-card-title class="subtitle-1" :title="title">
        <v-clamp autoresize :max-lines="1">{{title}}</v-clamp>
      </v-card-title>

      <v-card-text class="pl-0">
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
          ></v-rating>
        </v-row>
        <div
          class="my-5 description pl-4"
          ref="description"
        >
          <v-clamp autoresize :max-lines="3" :title="description">{{description}}</v-clamp>
        </div>
      </v-card-text>
    </v-card>
  </div>
</template>

<script>
import VClamp from 'vue-clamp'
export default {
  name: 'HomeCards',
  components: {VClamp},
  props: {
    id: { type: String }, title: { type: String, default: '' },
    description: { type: String, default: '' },
    bookAuthor: { type: String, default: '' },
    bookGenre: { type: String, default: '' },
    bookYear: { type: String, default: '' },
    bookImage: { type: String, default: '' },
    bookLink: { type: String, default: '' },
    homeRating: { type: Number, default: 4.3 },
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

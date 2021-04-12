<template>
  <v-row>
    <v-col 
      cols="12" 
      md="4"
      v-for="(genre, key) in genres"
      :key="key"
    >
      <v-card
        class="mx-auto"
        max-width="344"
      >
        <v-card-text>
          <p class="text--primary subtitle">
            <v-icon class="mr-2">mdi-star-box</v-icon>
            {{genre.name}}
          </p>
          <!-- <p
          >Количество книг в данном жанре {{counting}}</p> -->
          <div class="text--primary">
            well meaning and kindly.<br>
            "a benevolent smile"
          </div>
        </v-card-text>
        <v-card-actions>
          <v-btn color="pink lighten-5" :to="`/admin/genre/edit/${genre._id}`">
            <v-icon title="редактировать" color="deep-purple lighten-1">mdi-pencil</v-icon>
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  computed: {
    ...mapGetters({
      genres: 'books/getBookGenre',
    })
  },
  methods: {
    ...mapActions({
      fetchGenre: 'books/getAllGenreBooks',
    })
  },
  created() {
    this.fetchGenre()
  }
}
</script>

<style scoped>

</style>
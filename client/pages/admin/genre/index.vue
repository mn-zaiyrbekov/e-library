<template>
  <div>
    <v-row>
      <v-col class="col-md-6 col-12">
        <VcardTitle title="Жанры книг"/>
      </v-col>
    </v-row>

    <v-row class="mt-12">
      <v-col 
        cols="12" 
        md="4"
        v-for="(genre, key) in genres"
        :key="key"
      >
        <GenreCard 
          :name="genre.name"
          :idGenre="genre._id"
        />
      </v-col>
    </v-row>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import GenreCard from '@/components/admin/GenreCard'
import VcardTitle from '@/components/Globals/VcardTitle'
export default {
  name: 'genre',
  layout: 'adminlayout',
  components: { GenreCard, VcardTitle },
  head() {
    return {
      title: 'Жанры книг'
    }
  },
  computed: {
    ...mapGetters({
      genres: 'books/getBookGenre'
    })
  },
  methods: {
    ...mapActions({
      fetchGenre: 'books/getAllGenreBooks'
    })
  },
  created() {
    this.fetchGenre()
  }
}
</script>

<style lang="scss" scoped>

</style>
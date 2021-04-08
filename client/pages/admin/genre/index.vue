<template>
  <div>
    <v-row>
      <v-col class="col-md-6 col-12">
        <v-card-title class="orange accent-4 white--text">
          Жанры книг
        </v-card-title>
      </v-col>
    </v-row>

    <v-row class="mt-12">
      <GenreCard />
    </v-row>
  </div>
</template>

<script>
import GenreCard from '@/components/admin/GenreCard'
export default {
  name: 'genre',
  layout: 'adminlayout',
  components: { GenreCard },
  head() {
    return {
      title: 'Жанры книг'
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
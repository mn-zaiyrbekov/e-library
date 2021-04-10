<template>
  <div>
    <v-row>
      <v-col class="col-md-6 col-12">
        <VcardTitle title="Жанры книг"/>
      </v-col>
    </v-row>
    <GenreBook/>
  </div>
</template>

<script>
import GenreBook from '@/components/admin/GenreBook'
import VcardTitle from '@/components/Globals/VcardTitle'
export default {
  name: 'genre',
  layout: 'adminlayout',
  components: { GenreBook, VcardTitle },
  head() {
    return {
      title: 'Жанры книг'
    }
  }
}
</script>

<style scoped>

</style>
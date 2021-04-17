<template>
  <v-autocomplete
    class="mx-4"
    :loading="serachLoading"
    :search-input.sync="search"
    flat
    hide-no-data
    hide-details
    label="Введите название книги"
    solo-inverted
    cache-items
  ></v-autocomplete>
</template>

<script>
  export default {
    data () {
      return {
        serachLoading: false,
        search: null,
        items: []
      }
    }
  }
</script>

<style scoped>

</style>
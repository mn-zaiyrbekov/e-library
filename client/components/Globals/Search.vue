<template>
  <v-autocomplete
    v-model="select"
    class="mx-4 d-none d-sm-flex"
    :loading="searchLoading"
    :search-input.sync="search"
    :items="items"
    hide-no-data
    hide-details
    label="Введите название книги"
    solo-inverted
    cache-items
    @input="getId"
  ></v-autocomplete>
</template>

<script>
  export default {
    data () {
      return {
        searchLoading: false,
        search: null,
        select: null,
        items: []
      }
    },
    watch: {
      search (val) {
        val && val !== this.select && this.getQuery(val)
      }
    },
    methods: {
      async getQuery (val) {
        this.searchLoading = true
        const res = await this.$axios.post('/books/book/search', { search: val } )
        if (res.data.success) {
          res.data.subject.filter(e => {
            this.items = [e.booksTitle]
          })
        }
        this.searchLoading = false
      },
      getId() {
        alert(this.items)
      }
    }
  }
</script>

<style scoped>

</style>
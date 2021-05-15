<template>
  <div>
    <v-autocomplete
      v-model="select"
      :loading="searchLoading"
      :search-input.sync="search"
      hide-no-data
      hide-details
      label="Введите название книги"
      class="mx-4"
      solo-inverted
      cache-items
    >
          <!-- :items="items" -->
    </v-autocomplete>
    <v-expand-transition>
     <div class="search-link" v-if="search">
       <div v-for="(book, key) in items" :key="key">
         <nuxt-link :to="`/books/${book._id}`">{{book.booksTitle}}</nuxt-link>
       </div>
     </div>
    </v-expand-transition>
  </div>
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
          this.items = res.data.subject
          // res.data.subject.filter(e => {
          //   this.items = [e.booksTitle]
          // })
        }
        this.searchLoading = false
      }
    }
  }
</script>

<style scoped>
.search-link{
  position: absolute;
  width: 100%;
  min-height: 100%;
  background: #fff;
  padding: 10px;
}
.search-link a {
  margin-bottom: 10px;
  color: #000;
}
</style>

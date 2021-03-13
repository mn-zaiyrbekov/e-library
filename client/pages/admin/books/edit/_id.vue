<template>
  <v-row class="ml-4 pt-5">
    <v-col class="col-8 md-5">
      <v-card-title class="pl-0">Редактирование</v-card-title>
      <EditForm :book="book" :saveBook="saveBook"/>
    </v-col>
  </v-row>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import EditForm from '@/components/Forms/Edit'
  export default {
    name: 'idBooks',
    layout: 'adminLayouts',
    components: {EditForm},
    head(){
      return {
        title: `Редактирование ${this.book.title}`
      }
    },
    computed: {
      ...mapGetters({
        getbook: 'books/get'
      }),
      book() {
        return this.getbook(this.$route.params.id)
      }
    },
    methods: {
      ...mapActions({
        bookEdit: 'books/BookEdit'
      }),
      async saveBook() {
        try{
          const res = await this.bookEdit(this.book)
          if (res.data.success) {
            this.$router.back()
          }
        }catch(err) {
          console.log(err)
        }
      }
    }
  }
</script>

<style scoped>

</style>
<template>
  <EditForm :book="book" :saveBook="saveBook"/>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import EditForm from '@/components/Forms/Edit'
  export default {
    name: 'idBooks',
    layout: 'adminLayouts',
    components: {EditForm},
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
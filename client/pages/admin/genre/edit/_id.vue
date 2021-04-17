<template>
  <div>
    <v-row>
      <v-col cols="6" md="4">
        <VcardTitle title="Редактирование жанра"/>
      </v-col> 
    </v-row>
    <v-row class="mt-5">
      <v-col cols="8" md="4">
        <v-form @submit.prevent="submitForm">
          <v-text-field
            v-model="genre.name"
            label="Название жанра"
          >
          </v-text-field>
          <v-btn
            color="brown"
            class="white--text mt-5"
            type="submit"
          >
            Редактировать
            <v-icon
              right
              dark
            >
              mdi-cloud-upload
            </v-icon>
          </v-btn>
        </v-form>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import VcardTitle from '@/components/Globals/VcardTitle'
export default {
  layout: 'adminlayout',
  components: { VcardTitle },
  data() {
    return {
      errors: null
    }
  },
  computed: {
    ...mapGetters({
      genre: 'books/getOneGenreBook'
    })
  },
  methods: {
    ...mapActions({
      fetchGenre: 'books/getOneGenreBook'
    }),
    async submitForm() {
      const newGenre = this.genre
      try{
        const res = await this.$axios.put(`/booksgenre/${this.genre._id}`, newGenre)
        if (res.data.success) {
          this.$router.push('/admin/genre')
        }else{
          this.errors = res.data.error
        }
      }catch(e) {
        this.errors = e
      }
    }
  },
  created() {
    this.fetchGenre( { idGenre: this.$route.params.id } )
  }
}
</script>

<style scoped>

</style>
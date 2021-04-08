<template>
  <div>
    <v-row>
      <v-col cols="6" md="4">
        <VcardTitle title="Добавить жанр"/>
      </v-col> 
    </v-row>
    <v-row class="mt-5">
      <v-col cols="8" md="4">
        <p v-if="!resError">{{resError}}</p>
        <v-form @submit.prevent="submitForm">
          <v-text-field
            v-model="name"
            label="Введите жанр"
          >
          </v-text-field>
          <v-btn
            color="brown"
            class="white--text mt-5"
            type="submit"
          >
            Добавить
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
import VcardTitle from '@/components/Globals/VcardTitle'
export default {
  name: 'add',
  layout: 'adminlayout',
  components: { VcardTitle },
  data() {
    return {
      name: '',
      resError: null
    }
  },
  methods: {
    async submitForm() {
      try{
        const res = await this.$axios.post('/booksgenre', {name: this.name} )
        if (res.data.success) {
          this.$router.back()
        }else{
          this.resError = res.response.data.error
        }
      }catch(e) {
        this.resError = e
      }
    }
  }
}
</script>

<style scoped>

</style>
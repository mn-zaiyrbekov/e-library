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
            v-model="genreValue.name"
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
import VcardTitle from '@/components/Globals/VcardTitle'
export default {
  layout: 'adminlayout',
  components: { VcardTitle },
  data() {
    return {
      genreValue: {
        name: ''
      }
    }
  },
  methods: {
    async submitForm() {
      alert(this.genreValue.name)
    }
  }
}
</script>

<style scoped>

</style>
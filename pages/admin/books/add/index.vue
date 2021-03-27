<template>
  <div>
    <v-row>
      <v-col class="col-6 pt-7">
        <form class="mt-5" @submit.prevent="submitForm">
          <v-text-field
            v-model="book.booksTitle"
            :counter="1000"
            label="Заголовок"
            required
          ></v-text-field>

          <v-textarea
            v-model="book.booksDesc"
            :counter="3000"
            :error-messages="errors"
            required
            label="Описание - аннотация"
          ></v-textarea>

          <v-text-field
            v-model="book.booksImage"
            :error-messages="errors"
            label="Ссылка до картинки"
            required
          ></v-text-field>
          <v-text-field
            v-model="book.booksAuthor"
            :error-messages="errors"
            label="Автор книги"
            required
          ></v-text-field>
          <v-text-field
            v-model="book.booksYear"
            :error-messages="errors"
            label="Год издания"
            required
          ></v-text-field>
          <v-text-field
            v-model="book.booksLink"
            :error-messages="errors"
            label="Ссылка до самой книги"
            required
          ></v-text-field>
          <v-text-field
            v-model="book.booksGenre"
            :error-messages="errors"
            label="Жанр"
            required
          ></v-text-field>

            <v-btn
              color="brown"
              class="white--text"
              type="submit"
              :disabled="!disabled"
            >
              Добавить
              <v-icon
                right
                dark
              >
                mdi-cloud-upload
              </v-icon>
            </v-btn>
        </form>
      </v-col>
    </v-row>
    <p v-if="inError">{{inError}}</p>
  </div>
</template>

<script>
import Forms from '@/components/forms/forms'
  export default {
    name: 'insert',
    layout: 'admin',
    components: {Forms},
    data() {
      return {
        errors: null,
        inError: null,
        disabled: true,
        book: {
          booksTitle: '',
          booksDesc: '',
          booksImage: '',
          booksAuthor: '',
          booksYear: '',
          booksGenre: '',
          booksLink: ''
        }
      }
    },
    head() {
      return {
        title: 'Добавить книгу'
      }
    },
    methods: {
      async submitForm() {
        this.disabled = false
        try{
          const res = await this.$axios.post('/books/books', this.book)
          if(res.data.success) {
            this.$router.push('/admin')
          }else{
            // this.errors = res.data.message
          }
        }catch(err) {
          // this.inError = res.data.message
        }
      }
    }
  }
</script>

<style scoped>

</style>

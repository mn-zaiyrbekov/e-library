<template>
  <v-row class="ml-6">
    <v-col class="col-6">
      <v-form
        lazy-validation
        ref="form"
        @submit.prevent="addBookForm"
      >
        <v-text-field
          v-model="title"
          label="Название книги"
          required
        ></v-text-field>

        <v-textarea
          class="my-5"
          label="Описание книги"
          v-model="description"
          required
        ></v-textarea>

        <v-text-field
          v-model="bookAuthor"
          label="Автор книги"
          required
        ></v-text-field>

        <v-text-field
          v-model="bookGenre"
          label="Жанр"
          required
        ></v-text-field>

        <v-text-field
          v-model="bookYear"
          label="Год издания"
          required
        ></v-text-field>

        <v-text-field
          v-model="bookImage"
          label="Ссылка на картинку"
          required
        ></v-text-field>

        <v-text-field
          v-model="bookLink"
          label="Ссылка на файл"
          required
        ></v-text-field>

        <v-btn
          color="error"
          class="mr-4"
          @click="reset"
        >
          Очистить поля
        </v-btn>
        <v-btn
          color="primary"
          class="mr-4"
          type="submit"
        >
          Добавить
        </v-btn>
      </v-form>
    </v-col>
  </v-row>
</template>

<script>
import { mapActions } from 'vuex'
  export default {
    name: 'insernewbook',
    layout: 'adminLayouts',
    data() {
      return {
        title: '',
        description: '',
        bookImage: '',
        bookLink: '',
        bookYear: '',
        bookAuthor: '',
        bookGenre: ''
      }  
    },
    methods: {
      ...mapActions({
        addBook: 'books/addNewBook'
      }),
      async addBookForm() {
        const book = {
          title: this.title,
          description: this.description,
          bookImage: this.bookImage,
          bookLink: this.bookLink,
          bookYear: this.bookYear,
          bookAuthor: this.bookAuthor,
          bookGenre: this.bookGenre
        }
        try{
          const res = await this.addBook(book)
          if (res.data.success) {
            this.$router.push('/admin')
          }
        }catch(err) {
          console.log(err)
        }
      },
      reset() {
        this.$refs.form.reset()
      }
    }
  }
</script>

<style scoped>

</style>
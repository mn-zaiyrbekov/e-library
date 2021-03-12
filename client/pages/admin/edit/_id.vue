<template>
  <div>
    Edit on {{this.$route.params.id}}

    <v-form @submit.prevent="bookEdit">
      <v-text-field
        label="Заголовок"
        hide-details="auto"
        v-model="book.title"
      ></v-text-field>
      <v-textarea
        clearable
        clear-icon="mdi-close-circle"
        label="Описание"
        v-model="book.description"
      ></v-textarea>
      <v-text-field
        label="Автор книги"
        hide-details="auto"
        v-model="book.bookAuthor"
      ></v-text-field>
      <v-text-field
        label="Жанр"
        hide-details="auto"
        v-model="book.bookGenre"
      ></v-text-field>
      <v-text-field
        label="Ссылка книги"
        hide-details="auto"
        v-model="book.bookLink"
      ></v-text-field>
      <v-text-field
        label="Ссылка на картинку"
        hide-details="auto"
        v-model="book.bookImage"
      ></v-text-field>
      <v-text-field
        label="Год"
        hide-details="auto"
        v-model="book.bookYear"
      ></v-text-field>
      <v-btn type="submit">Редактировать</v-btn>
    </v-form>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
  export default {
    layout: 'adminLayouts',
    name: 'adminEdit',
    data() {
      return {
        bookInfo: {
          type: Object
        }
      }
    },
    computed: {
      ...mapGetters({
        book: 'books/book'
      })
    },
    methods: {
      ...mapActions({
        getBook: 'books/getBook'
      }),
      ...mapActions({
        getBookEdit: 'books/getBookEdit'
      }),
      async bookEdit() {
        const book = {
          title: this.bookTitle,
          description: this.bookDesc,
          bookAuthor: this.bookAuthor,
          bookGenre: this.bookGenre,
          bookYear: this.bookYear,
          bookImage: this.bookImage
        }
        try{
          const response = await this.getBookEdit({bookId: this.$route._id}, book.slice())
          if (response.data.success) {
            this.$router.push('/admin')
          }
        }catch(err) {
          console.log(err)
        }
      }
    },
    created() {
      this.getBook({bookId: this.$route.params.id})
    }
  }
</script>

<style scoped>

</style>
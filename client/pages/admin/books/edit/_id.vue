<template>
  <div>
    <v-row>
      <v-col class="col-8 pt-7">
        <form class="mt-5" @submit.prevent="editBook">
          <v-text-field
            v-model="book.booksTitle"
            :counter="1000"
            label="Заголовок"
            required
          ></v-text-field>

          <v-textarea
            v-model="book.booksDesc"
            :counter="3000"
            required
            label="Описание - аннотация"
          ></v-textarea>

          <v-text-field
            v-model="book.booksImage"
            label="Ссылка до картинки"
            required
          ></v-text-field>
          <v-text-field
            v-model="book.booksAuthor"
            label="Автор книги"
            required
          ></v-text-field>
          <v-text-field
            v-model="book.booksYear"
            label="Год издания"
            required
          ></v-text-field>
          <v-text-field
            v-model="book.booksLink"
            label="Ссылка до самой книги"
            required
          ></v-text-field>
          <v-select
            v-model="book.booksGenre"
            :items="bookGenre"
            item-text="name"
            item-value="_id"
            label="Выберите жанр"
            multiple            
          ></v-select>

          <v-btn
            color="brown"
            class="white--text"
            type="submit"
          >
            Отредактировать
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
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
  export default {
    name: 'dynamocpage',
    layout: 'adminlayout',
    head() {
      return {
        title: `Редактирование ${this.book.booksTitle}`
      }
    },
    computed: {
      ...mapGetters({
        book: 'books/getOneBook',
        bookGenre: 'books/getBookGenre'
      })
    },
    methods: {
      ...mapActions({
        getOneBook: 'books/getOneBook',
        editBookById: 'books/editBookById',
        fetchBooksGenre: 'books/getAllGenreBooks'
      }),
      async editBook() {
        const res = await this.editBookById({
          id: this.$route.params.id,
          book: this.book
        })
        if(res.data.success) {
          this.$router.push('/admin/books')
        }else{
          ///
        }
      }
    },
    created() {
      this.getOneBook( { id: this.$route.params.id } )
      this.fetchBooksGenre()
    }
  }
</script>

<style scoped>

</style>
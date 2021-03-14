<template>
  <div>
    <v-row>
      <v-col class="col-4 pt-10">
        <v-card>
          <v-img
            :src="`${book.bookImage}`"
            lazy-src="https://picsum.photos/id/11/100/60"
            max-width="340"
            max-height="440"
          ></v-img>
          <v-card-actions>
            <v-btn color="deep-purple lighten-2" text>
              <v-icon title="читать онлайн">mdi-book-open</v-icon>
            </v-btn>
            <v-btn color="deep-purple lighten-2" text>
              <v-icon class="mx-4" title="скачать">mdi-cloud-download</v-icon>
            </v-btn>
            <v-btn color="deep-purple lighten-2" text >
              <v-icon title="Добавить в мои книги">mdi-bookmark-plus-outline</v-icon>
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
      <v-col class="col-8">
        <div class="mt-6 pr-4">
          <h3 class="title-2">
            <small class="red accent-3 white--text py-1 mb-3 px-1 subtitle-1 d-block">
              Название
            </small>
            {{book.title}}
          </h3>
          
          <p class="mt-8">
            <small class="red accent-3 white--text py-1 px-1 mb-4 subtitle-1 d-block">
              Описание
            </small>
            {{book.description}}
          </p>
          <v-list>
            <v-list-item class="pl-0">
              <v-icon class="mr-2">mdi-account-edit</v-icon>
              <v-list-item-title>Автор: {{book.bookAuthor}}</v-list-item-title>
            </v-list-item>
            <v-list-item class="pl-0">
              <v-icon class="mr-2">mdi-calendar-range</v-icon>
              <v-list-item-title>Год издания: {{book.bookYear}}</v-list-item-title>
            </v-list-item>
            <v-list-item class="pl-0">
              <v-icon class="mr-2">mdi-book-information-variant</v-icon>
              <v-list-item-title>Жанр: {{book.bookGenre}}</v-list-item-title>
            </v-list-item>
          </v-list>
        </div>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
  export default {
    name: 'bookOne',
    head() {
      return {
        title: this.book.title
      }
    },
    computed: {
      ...mapGetters({
        getBook: 'books/get'
      }),
      book() {
        return this.getBook(this.$route.params.id)
      }
    }
  }
</script>

<style scoped>

</style>